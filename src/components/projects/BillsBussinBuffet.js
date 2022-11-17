import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from "../ProjectTextCard";
import ProjectWebGLCard from "../ProjectWebGLCard";
import ProjectImageCard from "../ProjectImageCard";
import ProjectYoutubeEmbedCard from "../ProjectYoutubeEmbedCard";

export default function BillsBussinBuffet() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>
                    {/* ------ Row 1 ------ */}
                    <Row>
                        <Col>
                            <ProjectWebGLCard url='https://itch.io/embed-upload/6221691' width='948' height='650' />
                            <ProjectTextCard>
                                <h2>Bills Bussin Buffet</h2>
                                <h5>Status: Complete</h5>
                                <br />
                                <h3>Summary</h3>
                                <p>A dating sim developed in unity for Kiwi Jam.</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>
                    {/* ------ Row 2 ------ */}
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Challanges</h2>
                                <br />
                                <li><b>In-Engine Developer Bottleneck:</b> The majority of project members were not in engine. This created a 
                                    bottleneck when integrating art assets.</li>
                                <br />
                                <li><b>Third Party Tools:</b> The dialogue system was built ontop of the third party ink unity intergration. This meant we inherited all the problems
                                and limitations of a third party tool. </li>
                            </ProjectTextCard>
                            <ProjectImageCard src="/images/bills-bussin-buffet/enter-name-screenshot.png" />
                        </Col>
                        <Col>
                            <ProjectImageCard src="/images/bills-bussin-buffet/gameplay-screenshot.png" />
                            <ProjectTextCard>
                                <h2>Features</h2>
                                <br />
                                <li><b>Branching Dialogue:</b> The dialogue system was driven by Ink narritive scripting language.</li>
                                <br />
                                <li><b>Text Effects:</b> Custom text effects were used to add personality to text dialogue.</li>
                                <br />
                                <li><b>Sprite and Audio System:</b> Background sprites, character sprites and audio were all controlled via custom tags in 
                                    the dialogue script.</li>
                            </ProjectTextCard>
                            <ProjectImageCard src="/images/bills-bussin-buffet/options-screenshot.png" />
                        </Col>
                    </Row>
                </Col>
                {/* ------ Right Column ------ */}
                <Col md={3}>

                    <ProjectImageCard src="/images/bills-bussin-buffet/bills-bussin-buffet-icon.png" />

                    <ProjectTextCard>
                        <h2>Jam Team</h2>
                        <ul>
                            <li>Jashon Brown (itsnotagoodtime) - Programmer</li>
                            <li>Travers - Programmer</li>
                            <li>Jared Bakker (SugoiYellow) - Producer / Designer</li>
                            <li>Shan (uncoolly) Singleton - Milo (art & narrative), Chef (art)</li>
                            <li>Lachlan Walsh - Alice (art & narrative) & kitchen</li>
                            <li>Arlena Hosking (@aydaze.art) - Tempest (art & narrative) & misc design</li>
                            <li>Max Skerrett - Kiwi (art & narrative), seating area & UI design</li>
                            <li>Cameron Edwards - Chef (narrative)</li>
                            <li>Sara Ransley - Ethan /E-Boy(Art)</li>
                            <li>Andy - Trish(art & narrative)</li>
                            <li>Hunter Craig - Sound Design</li>
                            <li>Scott Thomson - Special effects / Technical Artist</li>
                        </ul>
                    </ProjectTextCard>

                    <ProjectImageCard src="/images/bills-bussin-buffet/BBB_Logo.png" />

                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Unity</li>
                            <li>C#</li>
                            <li>Ink Narritive Scripting</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>
        </div>
    )
}