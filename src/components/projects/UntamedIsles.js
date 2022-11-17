import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';
import ProjectVideoCard from "../ProjectVideoCard";

export default function UntamedIsles() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>
                    <Row>
                        <ProjectVideoCard src="/videos/untamed-isles/untamedtrailer.mp4" type="video/mp4" muted="true"/>
                    </Row>
                    {/* ------ Row 1 ------ */}
                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Untamed Isles</h2>
                                <h5>Status: Delayed</h5>
                                <br />
                                <h3>Summary</h3>
                                <p>Untamed Isles is Monster taming MMO developed by startup company Phat Loot Studios, the project is currently on hold due to funding issues.</p>
                                <p>I joined the development team of untamed isles in december 2021, the main features I was responisble for and developed were, Player Movement, NPC Combat AI, NPC General AI.</p>
                                <p>I was also in charge planning and implementing assembly definitions to enforce stricter code architecture and improve editor performance</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>
                    {/* ------ Row 2 ------ */}
                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Challanges</h2>
                                <br />
                                <li><b>Handling Technical Debt:</b> Untamed Isles was a prototype that quickly shifted into production development,
                                    this resulted in a large amount of technical debt that I spent alot of time dealing with.</li>
                                <br />
                                <li><b>Editor Performance:</b> Untamed Isles was a very large project with a lot of assets and scripts, managing editor performance
                                    was essential to the productivity of the dev team.</li>
                                <br />
                                <li><b>Code Architecture:</b> The project went through many changes that required big refactorings of old code, this showed me the importance
                                    of making good abstractions layers.</li>
                                <br />
                                <li><b>Code Standard:</b> Untamed Isles was startup project with a wide range of developer experience and a large number of difficult problems.
                                    This made maintaining code quality challanging.</li>
                            </ProjectTextCard>
                            <ProjectImageCard src="/images/untamed-isles/WanderMap.png" title="Wander AI Map Tool" />
                            <ProjectImageCard src="/images/untamed-isles/combatnpc.png" title="Combat" />
                            <ProjectImageCard src="/images/untamed-isles/untamed-isles-asmdefs.png" title="Assembly Definitions Architecture" />
                        </Col>
                        <Col>
                            <ProjectVideoCard src="/videos/untamed-isles/untamedcombat.mp4" type="video/mp4" muted="true"/>
                            <ProjectTextCard>
                                <h2>My Features</h2>
                                <br />
                                <li><b>Player Movement:</b> movement was networked and supports networked moving platforms, made using extendable state machine</li>
                                <br />
                                <li><b>NPC Combat AI:</b> Weighted random choices, customized with generic modifiers to create different AI profiles with a designer friendly tool</li>
                                <br />
                                <li><b>NPC General AI:</b> Tools and systems for npcs that wander, chase and battle players.</li>
                                <br />
                                <li><b>Battle System:</b> Worked in the team responisble for creating the realtime, inworld networked turn based battle system for a mmo.</li>
                            </ProjectTextCard>
                            <ProjectImageCard src="/images/untamed-isles/SkillWeightingAI.png" title="Skill Weighting AI Tool" />
                        </Col>
                    </Row>
                </Col>
                {/* ------ Right Column ------ */}
                <Col md={3}>

                    <ProjectImageCard src="/images/untamed-isles/untamed-isles-card-black.png" />

                    <ProjectTextCard>
                        <h2>Studio</h2>
                        <ul>
                            <li>My Position: Network Programmer/Feature Lead</li>
                            <li>Phat Loot Studios</li>
                            <li>New Zealand</li>
                            <li>70 Employees</li>
                        </ul>
                    </ProjectTextCard>

                    <ProjectImageCard src="/images/untamed-isles/phatlootlogo.png" />

                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Unity</li>
                            <li>C#</li>
                            <li>Mirror</li>
                            <li>Firebase</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>
        </div>
    )
}
