import Accordion from '@components/Accordion';
import ActionListItem from '@components/ActionListItem';
import AlertBanner from '@components/AlertBanner';
import Card from '@components/Card';
import Grid from '@components/Grid';
import ListItem from '@components/ListItem';
import DefaultActionBar from '@components/page/DefaultActionBar';
import DefaultLayout from '@components/page/DefaultLayout';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.body.classList.add('theme-light');
  }, []);
  return (
    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
      <DefaultActionBar />
      <Grid>
        <AlertBanner>🦙 Jared Lorince, PhD — AI Engineer</AlertBanner>


        <Card title="Contact">
          <ActionListItem icon={`⭢`} href="mailto:jared.j.lorince@gmail.com">
            jared.j.lorince@gmail.com
          </ActionListItem>
          <ActionListItem icon={`⭢`} href="https://www.linkedin.com/in/jaredlorince/" target="_blank">
            LinkedIn
          </ActionListItem>
          <ActionListItem icon={`⭢`} href="/jared-lorince-resume.pdf" target="_blank">
            Resume (PDF)
          </ActionListItem>
          <ActionListItem icon={`◉`}>
            Chicago, IL
          </ActionListItem>
        </Card>


        <Card title="Summary">
          AI engineer with 9+ years spanning academic research, early-stage startups, and large-scale platform engineering. Track record of identifying critical gaps in AI systems, building the foundational infrastructure to close them, and unifying features as they scale from prototype to company-wide adoption. Founding engineer and technical lead, equally at home in framework-level architecture and shipping user-facing product.
        </Card>

        <Card title="Core Competencies">
          <ul>
            <ListItem><strong>AI/ML systems</strong> — End-to-end development of LLM-backed product features: provider APIs, prompt engineering, evaluation frameworks, tool-calling and validation infrastructure, latency optimization, and telemetry for measuring AI impact in production.</ListItem>
            <ListItem><strong>Software engineering</strong> — Full-stack product and platform development across startup and enterprise scale, with a focus on API design and the boundary between framework infrastructure and user-facing features.</ListItem>
            <ListItem><strong>Technical leadership</strong> — Founding-engineer and tech-lead experience: architecture ownership, cross-team standardization, mentoring junior engineers, and directing contract engineers.</ListItem>
            <ListItem><strong>Research & analysis</strong> — Experimental design, statistical analysis, and large-scale data processing applied to product and modeling decisions.</ListItem>
            <ListItem><strong>Technical skills</strong> — TypeScript, Python, SQL, Bash; React, GraphQL and REST API design; PostgreSQL; Git.</ListItem>
          </ul>
        </Card>


        <Card title="Current Role">
          <strong>Senior Software Engineer</strong> @ <a href="https://databricks.com" target="_blank" rel="noreferrer">Databricks</a> — March 2025–Present
          <ul>
            <ListItem>Core contributor to framework and user-facing features for <a href="https://www.databricks.com/product/databricks-assistant" target="_blank" rel="noreferrer">Genie Code</a>, Databricks' AI coding assistant (~80,000 daily active users) — tool selection, diff parsing and rendering, accept/reject flows, and the coordination layer tying disparate AI surfaces into a coherent experience.</ListItem>
            <ListItem>Identified the absence of structured validation in the LLM tool-calling path and designed and built the validation layer (schema enforcement, retry and error-handling logic) now foundational to the internal agent APIs consumed by engineering teams across the ~3,000-person organization.</ListItem>
            <ListItem>Own character-level code-attribution telemetry backing a primary company KPI — the share of code on the platform that is AI- versus human-authored. Significantly expanded an early prototype into the company's source of truth for this metric.</ListItem>
            <ListItem>Standardized how AI-proposed code changes are rendered across product contexts, and drove the design of the integration unifying the inline assistant with the sidebar agent experience.</ListItem>
            <ListItem>Serve as de facto manager for two contract engineers and mentor junior engineers on the team, directing implementation and reviewing work across the AI feature set.</ListItem>
          </ul>
        </Card>


        <Card title="Previous Roles">
          <ul>
            <ListItem>
              <a href="https://hex.tech" target="_blank" rel="noreferrer">Hex Technologies</a> — May 2021–March 2025
              <ul>
                <ListItem>[Sept 2024–March 2025] Staff AI Engineer — Technical lead for a 6-engineer AI team. Built a custom SQL parser enabling no-code data explorations via natural language; a pipeline that auto-generates contextual suggested prompts from customer data; and integrated AI typeahead for live in-editor code completions.</ListItem>
                <ListItem>[Jan 2023–Sept 2024] Senior AI Engineer — Founding engineer of <a href="https://hex.tech/product/magic-ai/" target="_blank" rel="noreferrer">Hex Magic</a>; sole developer on the initial integration of AI features into the platform. Architected an agent-agnostic LLM prompting pipeline underlying all AI features; built "Magic Analysis" (natural-language Q&A returning intelligently selected SQL, Python, and visualizations); designed the evaluation framework for prompting quality and experimentation.</ListItem>
                <ListItem>[May 2021–Jan 2023] Senior Software Engineer (10th employee) — Designed Hex's custom notebook file format (enabling GitHub sync, import/export, and other enterprise features); implemented dataframe SQL; designed and shipped the public API; added R language support.</ListItem>
              </ul>
            </ListItem>
            <ListItem>
              Narrative Science, Inc. (acquired by <a href="https://www.tableau.com/solutions/ai-analytics/augmented-analytics" target="_blank" rel="noreferrer">Salesforce/Tableau</a>) — May 2017–May 2021
              <ul>
                <ListItem>[2019–2021] Senior Software Engineer → Data Intelligence Technical Lead — Developer on the core rule- and template-based NLG platform (pre-LLM era); incubation team member prototyping high-risk/high-reward features, including automatic extraction of linguistic expressions for abstract concepts from unstructured text (see Patents). Served as NLP and ML subject-matter expert.</ListItem>
                <ListItem>[2017–2019] Software Engineer — Built a custom event-tracking framework enabling stakeholders to analyze user interaction with the platform.</ListItem>
              </ul>
            </ListItem>
          </ul>
        </Card>


        <Card title="Earlier Experience">
          <ul>
            <ListItem>
              <a href="https://www.nico.northwestern.edu/" target="_blank" rel="noreferrer">Northwestern Institute on Complex Systems</a> — Postdoctoral Fellow (2016–2017). Research in complex systems and computational social science using ML, text mining, and statistical methods; projects included predicting the emergence of new scientific fields and musical genres, and large-scale data visualization.
            </ListItem>
            <ListItem>
              <a href="https://en.wikipedia.org/wiki/StumbleUpon" target="_blank" rel="noreferrer">StumbleUpon</a> — Data Scientist (2015–2016). Lead developer of an Apache Spark framework combining topic modeling and rating prediction for user-interest profiling and content recommendation on the discovery platform.
            </ListItem>
            <ListItem>
              <a href="https://en.wikipedia.org/wiki/StumbleUpon" target="_blank" rel="noreferrer">StumbleUpon</a> — Data Science Intern (Summer 2015). Prototyped methods for canonical user-interest profiling.
            </ListItem>
            <ListItem>
              <a href="https://en.wikipedia.org/wiki/Yahoo!_Labs" target="_blank" rel="noreferrer">Yahoo! Labs</a> — Research Scientist Intern (2011–2012). Built and evaluated an ecologically-inspired social web-search interface.
            </ListItem>
          </ul>
        </Card>


        <Card title="Education">
          <ul>
            <ListItem>Indiana University, Bloomington
              <ul>
                <ListItem>[2010–2016] Joint Ph.D. in Cognitive Science and Cognitive Psychology. NSF IGERT Fellow. Served as cognitive-science advisor on IARPA's SIRIUS program, designing and analyzing serious-game environments to train intelligence analysts in recognizing and mitigating cognitive biases.</ListItem>
              </ul>
            </ListItem>
            <ListItem>University of California, Berkeley
              <ul>
                <ListItem>[2005–2009] B.A. with High Honors in Cognitive Science</ListItem>
              </ul>
            </ListItem>
          </ul>
        </Card>


        <Card title="Patents">
          <ul>
            <ListItem>Bischof, B., <em>Lorince, J.</em>, Colgrove, C., McCardel, B., Takahashi, G., & Storr, A. (2025). Priming generative AI model leveraging directed acyclic graph-driven notebook environment. <a href="https://patents.google.com/patent/US12332931" target="_blank" rel="noreferrer">U.S. Patent No. US 12,332,931</a>.</ListItem>
            <ListItem><em>Lorince, J.</em>, Storr, A., McCardel, B., Miller, I., Colgrove, C., & Bischof, B. (2024). Machine learning-assisted code generation in directed acyclic graph-driven notebook environment. <a href="https://patents.google.com/patent/US20240256228A1" target="_blank" rel="noreferrer">U.S. Patent Application No. US 2024/0256228 A1</a> (pending).</ListItem>
            <ListItem>Smathers, M., Platt, D., Nichols, N., & <em>Lorince, J.</em> (2022). Applied artificial intelligence technology for adaptive natural language understanding with term discovery. <a href="https://patents.google.com/patent/US11341330B1" target="_blank" rel="noreferrer">U.S. Patent No. US 11,341,330 B1</a>.</ListItem>
            <ListItem>Platt, D., Nichols, N., Smathers, M., & <em>Lorince, J.</em> (2022). Applied artificial intelligence technology for using natural language processing to train a natural language generation system with respect to numeric style features. <a href="https://patents.google.com/patent/US11232270B1" target="_blank" rel="noreferrer">U.S. Patent No. US 11,232,270 B1</a>.</ListItem>
            <ListItem>Platt, D., Nichols, N., Smathers, M., & <em>Lorince, J.</em> (2020). Applied artificial intelligence technology for using natural language processing and concept expression templates to train a natural language generation system. <a href="https://patents.google.com/patent/US10706236B1" target="_blank" rel="noreferrer">U.S. Patent No. US 10,706,236 B1</a>.</ListItem>
          </ul>
        </Card>


        <Card title="Publications">
          <ul>
            <ListItem><em>Lorince, J.</em> & Todd, P. M. (2016). Music Tagging and Listening: Testing the Memory Cue Hypothesis in a Collaborative Tagging System. In M. N. Jones (Ed.), <em>Big Data in Cognitive Science: From Methods to Insights</em>.</ListItem>
            <ListItem><em>Lorince, J.</em>, Zorowitz, S., Murdock, J., & Todd, P. M. (2015). The Wisdom of the Few? "Supertaggers" in Collaborative Tagging Systems. <em>The Journal of Web Science</em>.</ListItem>
            <ListItem><em>Lorince, J.</em>, Donato, D., & Todd, P. M. (2014). Path Following in Social Web Search. Proceedings of the 7th Annual Social Computing, Behavioral-Cultural Modeling and Prediction Conference.</ListItem>
          </ul>
          <Accordion title="Additional publications">
            <ul>
              <ListItem><em>Lorince, J.</em>, Joseph, K., & Todd, P. M. (2015). Analysis of music tagging and listening patterns: Do tags really function as retrieval aids? Proceedings of the 8th Annual Social Computing, Behavioral-Cultural Modeling and Prediction Conference.</ListItem>
              <ListItem><em>Lorince, J.</em>, Zorowitz, S., Murdock, J., & Todd, P. M. (2014). "Supertagger" behavior in building folksonomies. Proceedings of the 6th Annual ACM Web Science Conference.</ListItem>
              <ListItem><em>Lorince, J.</em>, & Todd, P. M. (2013). Can simple social copying heuristics explain tag popularity in a collaborative tagging system? Proceedings of the 5th Annual ACM Web Science Conference.</ListItem>
              <ListItem>Veinott, E. S., Leonard, J., Papautsky, E. L., Perelman, B., Stankovic, A., <em>Lorince, J.</em>, et al. (2013). The effect of camera perspective and session duration on training decision making in a serious video game. Proceedings of the 2013 IEEE Games Innovation Conference.</ListItem>
              <ListItem>Mullinix, G., Gray, O., Colado, J., Veinott, E., Leonard, J., Papautsky, E. L., ..., <em>Lorince, J.</em>, et al. (2013). Heuristica: Designing a serious game for improving decision making. Proceedings of the 2013 IEEE Games Innovation Conference.</ListItem>
              <ListItem><em>Lorince, J.</em> (2016). Consumption of Content on the Web: An Ecologically Inspired Perspective. (Doctoral dissertation, Indiana University).</ListItem>
            </ul>
          </Accordion>
        </Card>
      </Grid>
    </DefaultLayout>
  );
}

export default App;
