import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from "../ProjectTextCard";
import ItchDownload from "../ItchDownload";
import ProjectImageCard from "../ProjectImageCard";

export default function UntitledProject() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>
                    {/* ------ Row 1 ------ */}
                    <Row>
                        <Col>
                            <ItchDownload src='1286345' download='https://headcoach.itch.io/dungeonexplorerprototype' title='Untitled Project' />
                            <ProjectTextCard>
                                <h2>Untitled Project</h2>
                                <br />
                                <h3>Summary</h3>
                                <p>Personal project made in unity to learn multiplayer networking using mirror networking.</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>
                    {/* ------ Row 2 ------ */}
                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Challanges</h2>
                                <br />
                                <li><b>Software Architecture:</b> This project was very large and taught me the importance of good software architecture, this started my never ending
                                journey to improve my software archecture skill and my passion for finding the cleanest, most robust architecture solutions. </li>
                                <br />
                                <li><b>Multiplayer Networking:</b> This project was my first time networking a game, this was a very steep learning curve as I learned to handle all the
                                edge cases of networking, all the complexities of ensuring code is server authoritive and the ability to keep multiplayer code clean.</li>
                                <br />
                                <li><b>Large Project:</b> This was my first large project and first project where I begun to understand how hard game dev is.</li>
                            </ProjectTextCard>
                            <ProjectImageCard src="/images/untitled-project/BowCombat.gif" title="Combat"/>
                            <ProjectImageCard src="/images/untitled-project/SailingEquipment.gif" title="Equipment"/>
                            <ProjectImageCard src="/images/untitled-project/inventory-screenshot.jpg" title="Inventory"/>
                            <ProjectImageCard src="/images/untitled-project/dungeon-trap-screenshot.jpg" title="Dungeon Trap Room"/>
                            <ProjectImageCard src="/images/untitled-project/dungeon-loot-screenshot.jpg" title="Dungeon Loot Room"/>
                            <ProjectImageCard src="/images/untitled-project/dungeon-screenshot.jpg" />
                        </Col>
                        <Col>
                            <ProjectImageCard src="/images/untitled-project/dungeon-combat-screenshot.jpg" />
                            <ProjectTextCard>
                                <h2>Features</h2>
                                <br />
                                <li><b>Realistic Sailing System:</b> Multiplayer realistic sailing system with ships that use modular parts, Sails can be hoisted, Lowered, Trimmed. 
                                    Ships can be steered using a rudder that is controlled by a steering wheel. Sails produce realistic forces requiring the player to trim sails, 
                                    tack and gybe to travel.</li>
                                <br />
                                <li><b>Bow and Arrow Combat:</b> Multiplayer bow and arrow combat that works in PvP and PvM, uses stats from equipment and consumes arrow as they are used.</li>
                                <br />
                                <li><b>Inventory and Equipment System:</b> Networked inventory, equipment, chests, ground items all using drag and drop networked item system.
                                Inventories such as containers can be interacted with by multiplayers at once with all race conditions handled.</li>
                                <br />
                                <li><b>Character Creator:</b> Character creator using Synty assets allowing players to customize their hair, body type, skin color, markings and more.</li>
                                <br />
                                <li><b>NPCs:</b> Enemy and friendly npcs to interact with, friendly npc shop keepers and enemy npcs to fight that have unique drop tables.</li>
                                <br />
                                <li><b>Dungeon and Loot System:</b> Modular dungeon system that requires a group of players to face multiple challanges to progress to the final boss and
                                loot room.</li>
                            </ProjectTextCard>
                            <ProjectImageCard src="/images/untitled-project/SailingSteering.gif" title="Sailing Steering"/>
                            <ProjectImageCard src="/images/untitled-project/SailingTrimming.gif" title="Sailing Trimming"/>
                            <ProjectImageCard src="/images/untitled-project/settings-menu.png" title="Settings Menu Control Rebinding"/>
                            
                            
                        </Col>
                    </Row>
                </Col>
                {/* ------ Right Column ------ */}
                <Col md={3}>
                    <ProjectImageCard src="/images/untitled-project/untitled-project-icon.png" />
                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Mirror Networking</li>
                            <li>C#</li>
                            <li>Unity</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>
        </div>
    )
}