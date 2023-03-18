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
                                <p>Untamed Isles is a Monster taming MMO created by Phat Loot Studios, a startup company. However, the project is currently on hold due to funding issues. 
                                    As a developer who joined the team in December 2021, I was responsible for creating and developing several main features such as Player Movement, 
                                    NPC Combat AI, and NPC General AI. Additionally, I oversaw the planning and implementation of assembly definitions to ensure better code architecture 
                                    and enhance editor performance.</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>
                    {/* ------ Row 2 ------ */}
                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Challenges Faced</h2>
                                <br />
                                <li><b>Managing Technical Debt:</b> As Untamed Isles transitioned from a prototype to production development, it accumulated a significant amount of technical debt that required significant effort to handle.</li>
                                <br />
                                <li><b>Optimizing Editor Performance:</b> With a large number of assets and scripts, ensuring optimal editor performance was crucial to maintaining the productivity of the development team.</li>
                                <br />
                                <li><b>Refactoring Code Architecture:</b> The project underwent multiple changes that necessitated significant refactoring of existing code, highlighting the importance of creating robust abstraction layers.</li>
                                <br />
                                <li><b>Maintaining Code Standards:</b> Untamed Isles was a startup project with a diverse range of developer experience and numerous complex problems, making it challenging to maintain high code quality standards.</li>
                            </ProjectTextCard>
                            <ProjectImageCard src="/images/untamed-isles/WanderMap.png" title="Wander AI Map Tool" />
                            <ProjectImageCard src="/images/untamed-isles/combatnpc.png" title="Combat" />
                            <ProjectImageCard src="/images/untamed-isles/untamed-isles-asmdefs.png" title="Assembly Definitions Architecture" />
                        </Col>
                        <Col>
                            <ProjectVideoCard src="/videos/untamed-isles/untamedcombat.mp4" type="video/mp4" muted="true"/>
                            <ProjectTextCard>
                                <h2>Features Developed</h2>
                                <br />
                                <li><b>Player Movement:</b> Implemented a networked player movement system that supports moving platforms and is built using an extendable state machine.</li>
                                <br />
                                <li><b>NPC Combat AI:</b> Designed a system that uses weighted random choices and generic modifiers to create customizable AI profiles with a designer-friendly tool.</li>
                                <br />
                                <li><b>NPC General AI:</b> Developed various tools and systems for NPCs that can wander, chase, and engage in battle with players.</li>
                                <br />
                                <li><b>Battle System:</b> Collaborated with the team responsible for creating the real-time, in-world, networked, turn-based battle system for an MMO.</li>
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
