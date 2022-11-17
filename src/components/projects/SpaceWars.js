import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from "../ProjectTextCard";
import ProjectImageCard from "../ProjectImageCard";

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
                            </ProjectTextCard>
                        </Col>
                    </Row>
                    {/* ------ Row 2 ------ */}
                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Challanges</h2>
                                <br />
                                <li><b>Realistic Space Flight:</b> Flying in space is a lot different due to the lack of air to provide lift and drag.
                                It was challanging to create a realistic controller that is easy and fun to use.</li>
                                <br />
                                <li><b>Steam Intergration:</b> I wanted to make use of the steam transport so that people can join each others games without dedicated servers 
                                or port-forwarding. This game with development limitations as you can't be logged into more than one steam account at a time and you
                                can't join on the same steam game.</li>
                                <br />
                                <li><b>Moving Platforms:</b> Networking moving platforms that players can stand on creates a lot issues when syncing and interpolating
                                movement to other clients. Solving this required a custom solution to prevent jittering and other sync issues.</li>
                            </ProjectTextCard>
                            <ProjectImageCard src="/images/space-wars/SpaceWarsGunplay.gif" title="Gunplay"/>
                            <ProjectImageCard src="/images/space-wars/SpaceWarsShipMovement.gif" title="Ship Controller"/>
                            <ProjectImageCard src="/images/space-wars/LauncherScreenshot.png" title="Development Launcher"/>
                        </Col>
                        <Col>
                            <ProjectImageCard src="/images/space-wars/MainMenuScreenshot.png" />
                            <ProjectTextCard>
                                <h2>Features</h2>
                                <br />
                                <li><b>Space Flight:</b> Generic ship controller for space flight that supports any number of thrusters. </li>
                                <br />
                                <li><b>Advanced Movement Controller:</b> Complicated networked movement controller with crouching, sprinting, sliding, jumping and
                                    moving platform support for elevators and moving spaceships.</li>
                                <br />
                                <li><b>FPS Combat:</b> Networked FPS combat with guns, bullets, ADS, hip-fire, recoil, ammo, reloading, health and hit markers.</li>
                                <br />
                                <li><b>Launcher and Deployment System:</b> For development I created a .NET application to act as a launcher that looked up files 
                                    on google drive to check for updates. Inside of unity I created a tool for managing verison number, building and uploading to google drive
                                    in one click.</li>
                            </ProjectTextCard>
                            <ProjectImageCard src="/images/space-wars/SpaceWarsMovement.gif" title="Sprinting, Sliding and Crouching"/>
                            <ProjectImageCard src="/images/space-wars/DeploymentWindow.png" title="Deployment Tool"/>
                        </Col>
                    </Row>
                </Col>
                {/* ------ Right Column ------ */}
                <Col md={3}>
                    <ProjectImageCard src="/images/space-wars/space-wars-icon.png" />
                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Mirror Networking</li>
                            <li>Steam Transport</li>
                            <li>.NET</li>
                            <li>C#</li>
                            <li>Unity</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>
        </div>
    )
}