import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from "../ProjectTextCard";

export default function Door9() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>
                    {/* ------ Row 1 ------ */}
                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Door9</h2>
                                <h5>Status: Complete</h5>
                                <br />
                                <h3>Summary</h3>
                                <p>A Maze Horror game developed in unreal engine 5 blueprints for Game Jame Aotearoa.</p>
                                <p>???</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}