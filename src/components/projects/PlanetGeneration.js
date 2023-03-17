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
                                <p>Quadtree Planet mesh created at runtime using procedural mesh generation at planetary scales.</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>
                    {/* ------ Row 2 ------ */}
                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Challanges</h2>
                                <br />
                                <li><b>Seam Handling:</b> When going from a higher LOD to a lower LOD gaps mesh can be seen, 
                                    dealing this is tricky first of all QuadTreeNodes need to know if their neighbour is at a lower depth requiring a fancy neighbour finding algorithm.
                                    This alogrithm was made even more complex as it had to handle finding neighbours across edges of the cube-sphere used to make the planet.
                                </li>
                                <br />
                                <li><b>Normals:</b> A particular big challange was calculating normals for vertices that lay at the edge of each mesh chunk. 
                                    Every mesh chunk or PlanetFace would required a map of its neighbours and their relative orientation 
                                    so that edge vertices could find their neighbours in O(1) time. </li>
                                <br />
                                <li><b>Editor Functionality:</b> Unreal engine likes rebuild an actor everytime its moved or its values changed in the details panel. 
                                    This force my planet meshes to be rebuilt everytime you tried to modify a parameter, which was a very slow workflow. 
                                    To overcome this I prevented the UnregisterAll from unregistering my MeshChunk components and 
                                    used meta UPROPERTY() specifier to add tags that instruct what properties being changed needed to result in a mesh rebuild</li>
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
                                <li><b>Dynamic Level of Detail:</b> Mesh is updated at runtime to roughly maintain a constant triangle density on screen</li>
                                <br />
                                <li><b>Runtime Procedural Generation:</b> To make a mesh that scales to planetary size the mesh data must be procedurally generated at runtime, 
                                    traditional methods of storing mesh data would be too large for big planets</li>
                                <br />
                                <li><b>Editor Previewing:</b> The planet can be previewed in the viewport to support level building and fast procedural generation tweaking.</li>
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