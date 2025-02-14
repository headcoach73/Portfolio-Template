﻿import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from "../ProjectTextCard";
import ProjectImageCard from "../ProjectImageCard";
import ItchDownload from "../ItchDownload";
import ProjectYoutubeEmbedCard from "../ProjectYoutubeEmbedCard";

export default function Door9() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>
                    {/* ------ Row 1 ------ */}
                    <ItchDownload src='1540974' download='https://sugoi-yellow.itch.io/door-9' title='Door9' />
                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Door9</h2>
                                <h5>Status: Complete</h5>
                                <br />
                                <h3>Summary</h3>
                                <p>A Maze Horror game developed in unreal engine 5 blueprints for Game Jam Aotearoa.</p>
                                <p>Door9 won the community choice award for Game Jam Aotearoa</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>
                    {/* ------ Row 2 ------ */}
                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Challanges</h2>
                                <br />
                                <li><b>First time using blueprints:</b> For many of the programmers (myself included) on the project it was the first time using unreal engines blueprint system.
                                This forced us to design a game with a very small programming scope.</li>
                                <br />
                                <li><b>Merging Blueprints:</b> Blueprints can't be merged, so me and the other programmers were unable to work on the same blueprint at once,
                                communication was vital to not waste time by conflicting blueprints. </li>
                                <br />
                                <li><b>Code/Blueprint Standard:</b> Due to the lack of blueprint experience, the blueprint logic created was very messy and 
                                    readability was a huge challange. This taught me that the same text based coding techniques need to also be applied to blueprints to make them
                                    readable, robust and bug free</li>
                            </ProjectTextCard>
                            <ProjectImageCard src="/images/door9/screeny2.png" />
                            <ProjectImageCard src="/images/door9/screeny1.png" />
                            <ProjectImageCard src="/images/door9/screeny4.png" />
                        </Col>
                        <Col>
                            <ProjectYoutubeEmbedCard src='3rI2HQh3J4w'/>
                            <ProjectTextCard>
                                <h2>Features</h2>
                                <br />
                                <li><b>Procedurally Generated Maze</b> The game is set in a procedurally generated maze.</li>
                                <br />
                                <li><b>Day/Night Toggle System:</b> At semi-random times the game switches between a day (safe) state and a night (dangerous) state.</li>
                                <br />
                                <li><b>NPC Placement Algorithim:</b> An algorithim was designed to place the npc in a valid place with control over the distance from the player.</li>
                            </ProjectTextCard>
                            <ProjectImageCard src="/images/door9/screeny7.png" />
                            <ProjectImageCard src="/images/door9/screeny5.png" />
                        </Col>
                    </Row>
                </Col>
                {/* ------ Right Column ------ */}
                <Col md={3}>
                    <ProjectImageCard src="/images/door9/door9-icon.png" />

                    <ProjectTextCard>
                        <h2>Jam Team</h2>
                        <ul>
                            <li>Jared Bakker (Sugoi Yellow) - Design, Programming, Technical Art</li>
                            <li>Travers Cole (Headcoach) - Design, Programming</li>
                            <li>Stealthhyy (Stealthhyy) - Design, Programming</li>
                            <li>Uncoolly (Uncoolly) - 3D Modelling, Animation, 2D Art</li>
                            <li>Max Skerrett (MaxSkerrett) -  3D Modelling, Texturing</li>
                            <li>Hamish Oliver (HamishOliver) - Sound Design</li>
                        </ul>
                    </ProjectTextCard>
                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Unreal Engine 5</li>
                            <li>Blueprints</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>
        </div>
    )
}