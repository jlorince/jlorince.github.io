---
layout: post
title: Making GitHub pull requests from the command line.
---

A while back I discovered [Hub](https://hub.github.com/hub.1.html), "an extension to command-line git that helps you do everyday GitHub tasks without ever leaving the terminal."

One of the coolest features is that it lets you make pull requests from the command line, without needing to mess with the GitHub UI. This is great, but tagging other team members presents an issue: The GitHub UI gives you fuzzy "@"-mention completion, but with Hub you're just typing into a CLI editor and are forced to have committed the username of anyone you want to mention to memory.

I initially wrote off using Hub, but I use [Alfred](https://www.alfredapp.com/) (a beefed up Spotlight replacement for MacOS), and realized its snippet feature could let me emulate GitHub's fuzzy username matching on the command line. The general approach I outline here could surely be adapted to another snippet manager, but the instructions are specific to Alfred.

## Auto-generating snippets

Luckily, Alfred stores its snippets as simple, human-readable json files, so making a Python script to pull down username info from GitHub was straightforward. Note that you'll need to pip install the [github3.py](https://github.com/sigmavirus24/github3.py) library for this to work.

The script simply pulls down all the members of the GitHub organizations you specify, then creates a snippet in Alfred for each user. You can re-run the script at any time, which will just delete all the snippets and re-generate them for the current set of org users (so make sure you use a separate snippet collection for this). Snippet files are hidden inside the Alfred preferences file (right click and  choose "show package contents" to see them in Finder), but are stored as  plain JSON. "github_users" is just what I call the snippet collection for all my GitHub username completions, so feel free to change that.

Be sure to set the snippet matching option in Alfred to "Name, Keyword, or Snippet", and this will let you search by a user's GitHub username or their display name.

The script depends on you having a [GitHub access token](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line) defined as `GITHUB_TOKEN` in your environment

{% highlight python %}
#!/usr/bin/env python
import json
import os
import uuid

import github3

# Specify the orgs you care about; for me it's just my company
ORGS = ["NarrativeScience"]

SNIPPET_PATH = "/path/to/Alfred.alfredpreferences/snippets/github_users"

if os.path.exists(SNIPPET_PATH):
    os.rmdir(SNIPPET_PATH)
os.mkdir(SNIPPET_PATH)

client = github3.login(token=os.environ["GITHUB_TOKEN"])

for org_name in ORGS:
    org = client.organization(org_name)
    users = [user for user in org.members()]
    for username in users:
        user = client.user(username)
        snippet_id = str(uuid.uuid4())
        json_spec = {
            "alfredsnippet": {
                "snippet": f"@{user.login}",
                "uid": snippet_id,
                "name": user.name or user.login,
                "keyword": user.login,
            }
        }
        filename = f"{SNIPPET_PATH}/{user.login} [{snippet_id}].json"
        with open(filename, "w") as f:
            f.write(json.dumps(json_spec))
{% endhighlight %}

Once you've run the script, you'll see the snippets in Alfred preferences, and can insert them the usual way. If you're team is changing quite a bit, I could imagine setting up a Cron job to re run this script and make sure your snippets are up to date, but I just manually re-run as needed.

## Using Hub to make pull requests

Now we're ready to actually use Hub to make pull requests from the command line. My approach relies on a few shell functions/aliases that I'll describe below, but obviously there are many ways you could get this to work. Here's my bash function for actually creating a PR:

{% highlight bash %}
function gpr(){
  squash "${2:-master}"
  gc $1
  gp
  printf "$1\n\n" > pr_desc
  hub pull-request -p -F pr_desc -e -c -b "${2:-master}"
  rm -f pr_desc
}
{% endhighlight %}

There's a bit happening here, so to unpack it a bit...

### `squash "${2:-master}"`

I often generate a number of commits while working on something, and like to squash all that into a single commit when I open a PR, so that's what this line. `$2` is an optional second argument specifying the base branch, which defaults to master. I use a custom squash function, which looks like this:

{% highlight bash %}
function squash(){
  current_branch=$(git_branch)
  git branch -D my-branch-old
  git branch -m my-branch-old
  git checkout "${1:-master}"
  git checkout -b $current_branch
  git merge --squash my-branch-old
}
{% endhighlight %}

`squash` takes the optional base branch parameter from above, and lets me collapse all my changes into a single commit, without mucking about with rebases. There may be better/different ways, but this allows me to work for a while without worrying about "good" commit messages, and now that I can make my PR with a single commit and clear commit message when I'm ready.

This also uses a `git_branch` alias I have configured to get the name of the current branch:

{% highlight bash %}
alias git_branch="git rev-parse --abbrev-ref HEAD"
{% endhighlight %}

### `gc $1`

This line uses a custom commit function to actually commit my work, and uses the first (required) function argument as the commit message.

{% highlight bash %}
function getJIRA(){
    python -c 'import sys; print("-".join(sys.stdin.read().split("-")[:2]))'
}
alias gj="git_branch | getJIRA"
function gc(){
    git commit -m "$(gj) $1"
}
{% endhighlight %}
Every commit to master at my company needs to be prepended with a JIRA ticket number (e.g. ABC-12345), and I follow a convention of naming my branches with the ticket number as well, e.g. "ABC-12345-some-feature". This just allows me to pull that ticket number off the branch name, and prepend it to the commit message.

You could replace this with `git commit -m $1` if you don't care about the JIRA ticket number stuff.

### `gp`

Another alias, which just pushes to the remote branch:

{% highlight bash %}
alias gp="git push origin $(git_branch)"
{% endhighlight %}

###  `printf "$1\n\n" > pr_desc`

A Hub pull request uses a file where the first line is the PR title, and any other text is used as the PR description. This can all be done interactively, but I know I want to use my commit message as the PR title, so I first write that to a temporary file, which I'll have Hub parse in the next step.

### `hub pull-request -F pr_desc -e -c -b "${2:-master}"`

Here's where we actually make the pull request. `-F` tells hub to use the file we configured in the previous step, `-c` tells it to copy the URL of the pull request to the clipboard once it's made, and `-b` allows specifying the base branch defined above (again defaulting to master). There is a variety of other ways to customize pull request behavior, documented [here](https://hub.github.com/hub-pull-request.1.html); this is just what works for me.

After this command runs, it will open up the default editor (similar to how it would when running `git commit`) with the PR title already set. I then just add my PR description, use my Alfred snippets to tag team members as needed, and I'm off to the races.

Again, this is my own idiosyncratic flow, but hopefully at least parts of it are useful. Feel free to reach out with suggestions/comments.



