import '../../styles/Projects.scss';
import { projects, groups } from "../../data";
import GroupedProjects from '../GroupedProjects';
import {Col, Row} from "react-bootstrap";
import ProjectWebGLCard from "../ProjectWebGLCard";
import ProjectTextCard from "../ProjectTextCard";
import ProjectImageCard from "../ProjectImageCard";

export default function Contact() {

    return (<div className="projects">
        {/* ------ Left Column ------ */}
        <Col>
            <ProjectTextCard>
                <h2>Contact</h2>
                <br />
                <li><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/travers-cole-566433248/">Travers Cole</a></li>
                <li><b>Email:</b> travers.cole1@gmail.com</li>
            </ProjectTextCard>
        </Col>
    </div>)
}
