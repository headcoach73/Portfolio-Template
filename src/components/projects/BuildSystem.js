import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from "../ProjectTextCard";

export default function BuildSystem() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>
                    {/* ------ Row 1 ------ */}
                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Build System</h2>
                                <h5>Status: Prototype</h5>
                                <br />
                                <h3>Summary</h3>
                                <p>Networked Rust-like build system made in unreal engine 5 using c++ and blueprints, used to learn unreal engine.</p>
                                <p>???</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}