import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from "../ProjectTextCard";

export default function SpaceWars() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>
                    {/* ------ Row 1 ------ */}
                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Space Wars</h2>
                                <h5>Status: Prototype</h5>
                                <br />
                                <h3>Summary</h3>
                                <p>Small personal project made with Kees Tucker, feature space flight, fps elements, multiplayer and basic interactions.</p>
                                <p>???</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}