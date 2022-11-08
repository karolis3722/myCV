import './App.css';
import Panel from "./components/Panel";
import translations from './translations';
import User from "./components/User";
import Bullets from "./components/Bullets";
import { Segment, Container } from 'semantic-ui-react';

function App() {
  const parser = new DOMParser();
  // const doc3 = ;
  // console.log(doc3.body.children[0].textContent);

  return (
    <div className="App">
        <User path="./assets/profile.jpg"/>
        <Container>
          <Segment.Group>
            <Segment>
              <Panel label={translations.Info} color="#34b454" useClass="bold" />
              </Segment>
            <Segment>
              <Panel label={translations.Name} color="rgb(250 214 71)" useClass="left-side" />
            </Segment>
            <Segment>
              <Panel label={translations.Email} color="rgb(250 218 71)" useClass="right-side" magic="true" />
            </Segment>
            <Segment>
              <Panel label={translations.Phone} color="rgb(246 116 3)" useClass="right-side"/>
            </Segment>
            <Segment>
              <a href="https://github.com/karolis3722" target="_blank">
                <Panel label={translations.Github} color="rgb(29 184 139)" useClass="bold"/>
              </a>
            </Segment>
            <Segment>
              <a href="https://www.linkedin.com/in/karolis-siaulys-8900b2149/" target="_blank">
                <Panel label={translations.Linkedin} color="rgb(49 218 28)" useClass="bold"/>
              </a>
            </Segment>
            <hr />
            <Segment>
              <Panel label={translations.About} color="rgb(215 57 248)" useClass="bold" />
            </Segment>
            <hr />
          </Segment.Group>
          <Segment.Group>
            <Segment>
              <Panel label={translations.Education} color="rgb(250 214 71)" useClass="right-side bold" />
            </Segment>
            <Segment>
              <Panel label={translations.education_description} color="rgb(133 198 22)" useClass="left-side" />
            </Segment>
            <Segment>
              <Panel label={translations.history} color="rgb(29 184 139)" useClass="bold" />
            </Segment>
            <Segment>
              <Panel label={translations.job_one} color="rgb(29 184 107)" useClass="left-side" />
            </Segment>
            <Segment>
              <Panel label={translations.job_one_timeline} color="rgb(29 184 107)" useClass="left-side" />
            </Segment>
            <Segment>
              <Bullets list={parser.parseFromString(translations.job_one_description, "text/html").body.children} color="rgb(29 184 107)" useClass="left-side" />
            </Segment>
            <Segment>
              <Panel label={translations.job_two} color="rgb(41 155 226)" useClass="right-side" />
            </Segment>
            <Segment>
              <Panel label={translations.job_two_timeline} color="rgb(41 155 226)" useClass="right-side" />
            </Segment>
            <Segment>
              <Bullets list={parser.parseFromString(translations.job_two_description, "text/html").body.children} color="rgb(41 155 226)" useClass="right-side" />
            </Segment>
            <Segment>
              <Panel label={translations.job_three} color="rgb(228 148 193)" useClass="left-side" />
            </Segment>
            <Segment>
              <Panel label={translations.job_three_timeline} color="rgb(228 148 193)" useClass="left-side" />
            </Segment>
            <Segment>
              <Bullets list={parser.parseFromString(translations.job_three_description, "text/html").body.children} color="rgb(228 148 193)" useClass="left-side" />
            </Segment>
          </Segment.Group>
        </Container>
    </div>
  );
}

export default App;
