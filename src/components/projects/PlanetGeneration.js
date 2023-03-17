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
                                <h5>Status: MVP, WIP to Feature Complete</h5>
                                <br />
                                <h3>Summary</h3>
                                <p>The Quadtree Planet mesh was dynamically generated at runtime through the utilization of procedural mesh generation techniques,
                                    allowing for the creation of planetary-scale structures.</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>
                    {/* ------ Row 2 ------ */}
                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Challanges</h2>
                                <br />
                                <li><b>Seam Handling:</b> Seam handling is a complex task that involves addressing visible gaps in 
                                    the mesh when transitioning from a higher level of detail (LOD) to a lower LOD. To achieve this, 
                                    QuadTreeNodes must be able to detect whether their neighboring nodes are at a lower depth level, 
                                    requiring a sophisticated neighbor-finding algorithm. This process is further complicated when dealing 
                                    with edges of the cube-sphere used in the planet's construction, as the algorithm must be capable of 
                                    locating neighbors across these boundaries.
                                </li>
                                <br />
                                <li><b>Normals:</b> Calculating normals for vertices located at the edges of mesh chunks posed a significant challenge. 
                                    To accomplish this task, each mesh chunk, or PlanetFace, required a map of its neighboring faces and their relative orientation.
                                    With this map, edge vertices could easily locate their neighbors in O(1) time, ensuring efficient normal calculation. </li>
                                <br />
                                <li><b>Editor Functionality:</b> By default, Unreal Engine rebuilds an actor every time it is moved or its values are changed in the details panel, 
                                    which caused significant slowdowns for modifying parameters in my planet meshes. To address this issue, 
                                    I implemented a solution that prevented the UnregisterAll function from unregistering my MeshChunk components. 
                                    Additionally, I utilized the meta UPROPERTY() specifier to add tags that specified which changed properties required a mesh rebuild. 
                                    This approach greatly improved my workflow efficiency when making adjustments to my planet meshes in the editor.</li>
                            </ProjectTextCard>
                            <ProjectImageCard src="/images/planet-generation/PlanetSettings.png" title="Details panel for planet settings, 
                    classes that inherit from UProceduralPlanetCalculationBase and override ModifyHeight() can be added here, 
                    these are layered together to calculate the height of each vertex. Currently using simple and rigid layered perlin noise to generate example planet"/>
                            <ProjectImageCard src="/images/planet-generation/TriplanerMapping.png" title="Material Function showing the tri-planer mapping I used for the 
                            planets textures as traditional use of x,y coordinates for UVs does not work on a spherical planet."/>
                        </Col>
                        <Col>
                            <ProjectImageCard src="/images/planet-generation/PlayerPlanetZoom2.gif" title="Planet scale with Player ref"/>
                            <ProjectTextCard>
                                <h2>Features</h2>
                                <br />
                                <li><b>Dynamic Level of Detail:</b> One of the key features of my project is dynamic level of detail, 
                                    which involves updating the mesh at runtime to maintain a consistent triangle density on the screen. 
                                    This technique ensures that the level of detail is optimized for the current view, 
                                    enhancing the visual quality of the planet while improving performance.</li>
                                <br />
                                <li><b>Runtime Procedural Generation:</b> An important feature of my project is the ability to generate procedural mesh data at runtime, 
                                    which is necessary for creating planets that can scale to massive sizes. Traditional methods of storing mesh data would be 
                                    prohibitively large for such large-scale structures, making procedural generation a critical technique for efficient and scalable mesh creation.</li>
                                <br />
                                <li><b>Editor Previewing:</b> My project includes an editor previewing feature, which allows the planet to be viewed in the viewport for the purpose of 
                                    supporting level building and efficient procedural generation tweaking. This functionality enhances the workflow of the project by enabling designers 
                                    and developers to make adjustments and optimize the planet's appearance in real time, resulting in a more streamlined and effective development process.</li>
                            </ProjectTextCard>
                            <ProjectImageCard src="/images/planet-generation/MaterialLayers.png" title="For the planets material I used material layers 
                            to blend between textures based on noise, height and slope angle."/>
                            <ProjectImageCard src="/images/planet-generation/MaterialLayerBlending.png" title="One of the MaterialLayerBlend assets I used, this MLB blends based noise 
                            and height."/>
                        </Col>
                    </Row>
                </Col>
                {/* ------ Right Column ------ */}
                <Col md={3}>
                    <ProjectImageCard src="/images/planet-generation/planet-generation-icon.png" />
                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Unreal Engine 5</li>
                            <li>C++/Unreal++</li>
                            <li>Blueprints</li>
                        </ul>
                    </ProjectTextCard>
                    <ProjectImageCard src="/images/planet-generation/LODScreenshot.png" title="Wireframe of LOD around player"/>
                    <ProjectImageCard src="/images/planet-generation/PlanetBuilding.gif" title="Character Controller and Build System integrated into planet"/>
                    <ProjectImageCard src="/images/planet-generation/PlanetZoomWireframe.gif" title="Planet zooming wireframe"/>
                    <ProjectImageCard src="/images/planet-generation/PlanetZoomLit.gif" title="Planet zooming lit"/>

                </Col>
            </Row>
        </div>
    )
}