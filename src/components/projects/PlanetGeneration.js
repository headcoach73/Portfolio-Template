import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from "../ProjectTextCard";
import ProjectImageCard from "../ProjectImageCard";

export default function PlanetGeneration() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>
                    {/* ------ Row 1 ------ */}
                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Planet Generation</h2>
                                <h5>Status: Prototype</h5>
                                <br />
                                <h3>Summary</h3>
                                <p>Networked Rust-like build system made in unreal engine 5 using c++ and blueprints, used to learn unreal engine.</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>
                    {/* ------ Row 2 ------ */}
                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Challanges</h2>
                                <br />
                                <li><b>C++ to Blueprint workflow:</b> Learning where to draw the line between where the c++ stops and the blueprints begins</li>
                                <br />
                                <li><b>Unreal++ Syntax:</b> Coming from C# background, c++ in unreal felt like C# with lots more syntax to learn. Learning the unreal
                                syntax and architecture were the biggest road bumps in this projects. </li>
                                <br />
                                <li><b>Unreal Garabage Collector:</b> After splitting up my logic into seperate classes using UObjects everything promptly died,
                                luckly I have heard of other people having problems with the garabage collector which gave me an idea of what to look into.</li>
                            </ProjectTextCard>
                            <ProjectImageCard src="/images/build-system/BuildingSystem4.gif" title="Multiplayer Building"/>
                            <ProjectImageCard src="/images/build-system/build-system-screenshot2.png" />
                            <ProjectImageCard src="/images/build-system/build-system-screenshot3.png" />
                        </Col>
                        <Col>
                            <ProjectImageCard src="/images/build-system/build-system-screenshot.png" />
                            <ProjectTextCard>
                                <h2>Features</h2>
                                <br />
                                <li><b>Networked Multiplayer:</b> The building system is networked across clients</li>
                                <br />
                                <li><b>Placement Conditions and Snapping Zones:</b> Placement conditions and snapping zones are used to define the rules of building</li>
                                <br />
                                <li><b>Triangle Foundation Building:</b> Using snapping zones rather than a grid means that buildings can take non-square shapes
                                by combining square foundations and triangle foundations.</li>
                            </ProjectTextCard>
                            <ProjectImageCard src="/images/build-system/BuildingSystemRotating.gif" title="Rotating Buildables"/>
                        </Col>
                    </Row>
                </Col>
                {/* ------ Right Column ------ */}
                <Col md={3}>
                    <ProjectImageCard src="/images/build-system/build-system-icon.png" />
                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Unreal Engine 5</li>
                            <li>C++/Unreal++</li>
                            <li>Blueprints</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>
        </div>
    )
}