import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';
import ProjectVideoCard from "../ProjectVideoCard";

export default function UnannouncedProject() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>
                    {/* ------ Row 1 ------ */}
                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Unannounced Project</h2>
                                <h5>Status: Unannounced</h5>
                                <br />
                                <h3>Summary</h3>
                                <p>I am a programmer at Altered Phoenix and have been working on an unannounced auto battle royal type game in Unity that integrates with Twitch like the popular game Marbles. 
                                    My main contributions include developing editor tools for designers, creating player unit AI and designing the architecture for the interconnected unit systems to enable 
                                    different gameplay interactions and testing. I drew inspiration from Unreal Engine, specifically their Controller-Pawn architecture and Gameplay Ability System (GAS), 
                                    and incorporated a dynamic camera that tracks the unit with the most action.</p>
                                <p><b>Since this project is unnanounced I am unfortunely unable to share any footage around</b></p>
                            </ProjectTextCard>
                        </Col>
                    </Row>
                    {/* ------ Row 2 ------ */}
                    <Row>
                        <ProjectTextCard>
                            <h2>Notable Experience</h2>
                            <br />
                            <li>Developed editor tools for developers and designers, showcasing your ability to design and build tools that improve team efficiency and productivity.</li>
                            <br />
                            <li>Worked on player units AI and architecture of interconnected systems, demonstrating your ability to build complex gameplay systems that interact with one another and are easy to test.</li>
                            <br />
                            <li>Utilized inspiration from the Controller - Pawn architecture and the Gameplay Ability System (GAS) from Unreal Engine,
                                showcasing your ability to learn from and implement concepts from other game engines.</li>
                            <br />
                            <li>Designed and implemented a dynamic camera system that centered on the unit seeing the most action, showcasing your ability to build intuitive and responsive camera systems.</li>
                        </ProjectTextCard>
                    </Row>
                </Col>
                {/* ------ Right Column ------ */}
                <Col md={3}>

                    <ProjectImageCard src="/images/unannounced-project/unannounced-project-icon.png" />

                    <ProjectTextCard>
                        <h2>Studio</h2>
                        <ul>
                            <li>My Position: Programmer</li>
                            <li>Altered Phoenix</li>
                            <li>New Zealand</li>
                        </ul>
                    </ProjectTextCard>

                    <ProjectImageCard src="/images/unannounced-project/altered-phoenix-banner.png" color="white" />

                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Unity</li>
                            <li>C#</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>
        </div>
    )
}
