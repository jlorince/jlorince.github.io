import '@root/global.scss';


import ActionListItem from '@components/ActionListItem';
import AlertBanner from '@components/AlertBanner';
import Card from '@components/Card';
import Grid from '@components/Grid';
import ListItem from '@components/ListItem';
import DefaultLayout from '@components/page/DefaultLayout';

export const dynamic = 'force-static';

export async function generateMetadata({ params, searchParams }) {
  const title = "Jared Lorince"
  const description = "Homepage for Jared Lorince";
  const url = 'https://jlorince.github.io';

  return {
    description,
    icons: {
      icon: '/favicon.png',
      shortcut: '/favicon.png',
    },
    title,
    url,
  };
}

export default async function Page(props) {
  return (
    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
      <Grid>
          <AlertBanner>🦙 Jared Lorince - AI Product Engineer</AlertBanner>

        <br />
        <Card title="Contact">
          <ActionListItem icon={`⭢`} href="mailto:jared.j.lorince@gmail.com">
            jared.j.lorince@gmail.com
          </ActionListItem>
          <ActionListItem icon={`⭢`} href="https://www.linkedin.com/in/jaredlorince/" target="_blank">
            LinkedIn
          </ActionListItem></Card>
        <br />
        <Card title="Current Role">
          Senior Software Engineer @<a href="https://databricks.com" target="_blank">databricks</a> building the <a href="https://www.databricks.com/product/databricks-assistant" target="_blank">Databricks Assistant</a>.
        </Card>
        <br />
        {/* <Accordion defaultValue={false} title="Additional Metadata"> */}
        <Card title="Previous Roles">
          <ul>
            <ListItem><a href="https://hex.tech" target="_blank">Hex</a>
              <ul>
                <ListItem>[2024-2025] Staff AI Engineer; technical lead for <a href="https://hex.tech/product/magic-ai/" target="_blank">Hex Magic</a></ListItem>
                <ListItem>[2023-2024] Senior AI Engineer; founding engineer for <a href="https://hex.tech/product/magic-ai/" target="_blank">Hex Magic</a></ListItem>
                <ListItem>[2021-2023] Senior Software Engineer</ListItem>
              </ul>
            </ListItem>
            <ListItem>Narrative Science (acquired by <a href="https://www.tableau.com/solutions/ai-analytics/augmented-analytics">Salesforce</a>)
              <ul>
                <ListItem>[2021] Data Intelligence Technical Lead</ListItem>
                <ListItem>[2019-2021] Senior Software Engineer</ListItem>
                <ListItem>[2017-2019] Software Engineer</ListItem>
              </ul>
            </ListItem>
            <ListItem><a href="https://www.nico.northwestern.edu/" target="_blank">Northwestern Institute on Complex Systems</a>
              <ul>
                <ListItem>[2016-2017] Postdoctoral Fellow</ListItem>
              </ul>
            </ListItem>
            <ListItem><a href="https://en.wikipedia.org/wiki/StumbleUpon" target="_blank">StumbleUpon</a>
              <ul>
                <ListItem>[2015-2016] Data scientist</ListItem>
                <ListItem>[2015] Data science intern</ListItem>
              </ul>
            </ListItem>
          </ul>
        </Card>
        <br />
        <Card title="Education">
          <ul>
            <ListItem>Indiana University, Bloomington
              <ul>
                <ListItem>[2010-2016] Joint PhD in cognitive science and psychology</ListItem>
              </ul>
            </ListItem>
            <ListItem>University of California, Berkeley
              <ul>
                <ListItem>[2005-2009] BA in cognitive science with high honors</ListItem>
              </ul>
            </ListItem>
          </ul>
        </Card>
        <br />
        <Card title="Patents & Publications">
          <ul>
            <ListItem><em>Lorince, J.</em>, Storr, A., McCardel, B., Miller, I., Colgrove, C., & Bischof, B. (2024). Machine Learning-Assisted Code Generation in Directed Acyclic Graph-Driven Notebook Environment. Patent No. US20240256228A1</ListItem>
            <ListItem>Platt, D., Nichols, N., Smathers, M., & <em>Lorince, J.</em> (2021). Applied artificial intelligence technology for using natural language processing and concept expression templates to train a natural language generation system. Patent No. US11989519B2</ListItem>
            <ListItem>Smathers, M., Platt, D., Nichols, N., & <em>Lorince, J.</em> (2021). Applied artificial intelligence technology for adaptive natural language understanding. Patent No. US10990767B1  </ListItem>
            <ListItem><em>Lorince, J.</em> (2016). Consumption of Content on the Web: An Ecologically Inspired Perspective (Doctoral dissertation)</ListItem>
            <ListItem><em>Lorince, J.</em> & Todd, P. M. (2016). Music Tagging and Listening: Testing the Memory Cue Hypothesis in a Collaborative Tagging System. In Jones, M. N. (Ed.), Big Data in Cognitive Science: From Methods to Insights</ListItem>
            <ListItem><em>Lorince, J.</em>, Zorowitz, S., Murdock, J., & Todd, P. M. (2015). The Wisdom of the Few? "Supertaggers" in Collaborative Tagging Systems. The Journal of Web Science</ListItem>
            <ListItem><em>Lorince, J.</em>, Joseph, K., & Todd, P. M. (2015). Analysis of music tagging and listening patterns: Do tags really function as retrieval aids? Proceedings of the 8th Annual Social Computing, Behavioral-Cultural Modeling and Prediction Conference</ListItem>
            <ListItem><em>Lorince, J.</em>, Zorowitz, S., Murdock, J., & Todd, P. M. (2014). "Supertagger" behavior in building folksonomies. Proceedings of the 6th Annual ACM Web Science Conference</ListItem>
            <ListItem><em>Lorince, J.</em>, Donato, D., & Todd, P. M. (2014). Path Following in Social Web Search. Proceedings of the 7th Annual Social Computing, Behavioral-Cultural Modeling and Prediction Conference</ListItem>
            <ListItem><em>Lorince, J.</em>, & Todd, P. M. (2013). Can simple social copying heuristics explain tag popularity in a collaborative tagging system? Proceedings of the 5th Annual ACM Web Science Conference</ListItem>
            <ListItem>Veinott, E. S., Leonard, J., Papautsky, E. L., Perelman, B., Stankovic, A., <em>Lorince, J.</em>, et al. (2013). The effect of camera perspective and session duration on training decision making in a serious video game. Proceedings of the 2013 IEEE Games Innovation Conference</ListItem>
            <ListItem>Mullinix, G., Gray, O., Colado, J., Veinott, E., Leonard, J., Papautsky, E. L., ... , <em>Lorince, J.</em>, et al. (2013). Heuristica: Designing a serious game for improving decision making. Proceedings of the 2013 IEEE Games Innovation Conference</ListItem>
          </ul>
        </Card>


        {/* </Accordion> */}
      </Grid>


    </DefaultLayout>
  );
}
