import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

// Font awesome icons
import {library} from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';

// Stand alone components
import Header from "./components/Header";

// Nav page components
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

// Project components
import UntamedIsles from "./components/projects/UntamedIsles";
import Door9 from "./components/projects/Door9";
import BillsBussinBuffet from "./components/projects/BillsBussinBuffet";
import BuildSystem from "./components/projects/BuildSystem";
import SpaceWars from "./components/projects/SpaceWars";
import UntitledProject from "./components/projects/UntitledProject";
import Amebois from "./components/projects/Amebois";
import CharacterController from "./components/projects/CharacterController";
import PlanetGeneration from "./components/projects/PlanetGeneration";

// Font awesome setup
const iconList = Object.keys(Icons)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  .map((icon) => Icons[icon]);

library.add(...iconList);

export default function App() {
  return (
    <Router>
      <Container fluid className="main">

        {/* Adds page header to all pages */}
        <Header />

        <Container>
          <Row className="justify-content-center">
            {/* Registers route listeners */}
            <Switch>
              <Route path="/" exact component={() => <Projects />} />
              <Route path="/projects" exact component={() => <Projects />} />
              <Route path="/contact" exact component={() => <Contact />} />

              {/* Projects */}
              <Route path="/projects/build-system" exact component={() => <BuildSystem />} />
              <Route path="/projects/character-controller" exact component={() => <CharacterController />} />
              <Route path="/projects/planet-generation" exact component={() => <PlanetGeneration />} />
              <Route path="/projects/space-wars" exact component={() => <SpaceWars />} />
              <Route path="/projects/untitled-project" exact component={() => <UntitledProject />} />
              <Route path="/projects/untamed-isles" exact component={() => <UntamedIsles />} />
              <Route path="/projects/door9" exact component={() => <Door9 />} />
              <Route path="/projects/amebois" exact component={() => <Amebois />} />
              <Route path="/projects/bills-bussin-buffet" exact component={() => <BillsBussinBuffet />} />
            </Switch>
          </Row>
        </Container>

      </Container>
    </Router>
  );
}
