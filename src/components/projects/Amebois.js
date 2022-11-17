import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from "../ProjectTextCard";
import ProjectImageCard from "../ProjectImageCard";
import ItchDownload from "../ItchDownload";

export default function Amebois() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>
                    {/* ------ Row 1 ------ */}
                    <ItchDownload src='1682762' download='https://sugoi-yellow.itch.io/amebois' title='Amebois' />
                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Amebois</h2>
                                <h5>Status: Complete</h5>
                                <br />
                                <h3>Summary</h3>
                                <p>A endless wave shooter developed for an internal game jam at Phat Loot Studios</p>
                                <p>Amebois was developed for the theme "Reversible" and features projectiles that can be reversed back into the players gun
                                after being shot</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>
                    {/* ------ Row 2 ------ */}
                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Challanges</h2>
                                <br />
                                <li><b>Scope and Time constraints:</b> Amebois was developed by a fairly large team for a 48 hour game jam, due to the large team,
                                the scope increased to the point we couldn't implement all the art that was made for the project.</li>
                                <br />
                                <li><b>Merging Blueprints:</b> Blueprints can't be merged, so me and the other programmers were unable to work on the same blueprint at once,
                                    communication was vital to not waste time by conflicting blueprints. </li>
                                <br />
                                <li><b>Code/Blueprint Standard:</b> Due to the time constraints, the blueprint logic created was very messy and
                                    readability was a huge challange. This taught me that the same text based coding techniques need to also be applied to blueprints to make them
                                    readable, robust and bug free</li>
                            </ProjectTextCard>
                            <ProjectImageCard src="/images/amebois/screeny1.png" />
                        </Col>
                        <Col>
                            
                            <ProjectTextCard>
                                <h2>Features</h2>
                                <br />
                                <li><b>Reversable Projectile System:</b>I primarly worked on the reversable projectiles.</li>
                                <br />
                                <li><b>Unique Enemies</b>Enemies have unique health system that is made up of parts that can be only
                                    damaged by a certain projectile direction</li>
                                <br />
                                <li><b>Wave system</b>Amebois features endless wave system with scoring system.</li>
                            </ProjectTextCard>
                            <ProjectImageCard src="/images/amebois/screeny2.png" />
                        </Col>
                    </Row>
                </Col>
                {/* ------ Right Column ------ */}
                <Col md={3}>
                    <ProjectImageCard src="/images/amebois/amebois-icon.png" />

                    <ProjectTextCard>
                        <h2>Jam Team</h2>
                        <ul>
                            <li>Jared Bakker (Sugoi Yellow) - Design, Programming, Technical Art</li>
                            <li>Travers Cole (Headcoach) - Design, Programming</li>
                            <li>Stealthhyy (Stealthhyy) - Programming</li>
                            <li>Kees Tucker (SoggyKees) - Programming</li>
                            <li>Mike - Programming</li>
                            <li>Kent - Animation and Rigging</li>
                            <li>BombLogic - UI</li>
                            <li>Ellie - UI</li>
                            <li>Renee - Enviromenet Art, Level Design and Characters</li>
                            <li>Aaron - Enviromenet Art and Characters</li>
                            <li>Shan - SFX and Characters</li>
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