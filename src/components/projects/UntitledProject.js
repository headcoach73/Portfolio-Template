import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from "../ProjectTextCard";

export default function UntitledProject() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>
                    {/* ------ Row 1 ------ */}
                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Untitled Project</h2>
                                <br />
                                <h3>Summary</h3>
                                <p>Personal project made in unity to learn multiplayer networking using mirror networking.</p>
                                <p>???</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}