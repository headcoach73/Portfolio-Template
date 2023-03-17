import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from "../ProjectTextCard";
import ProjectImageCard from "../ProjectImageCard";

export default function CharacterController() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>
                    {/* ------ Row 1 ------ */}
                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Character Controller</h2>
                                <h5>Status: Functionally Feature Complete</h5>
                                <br />
                                <h3>Summary</h3>
                                <p>Character Controller built from scratch to support easily customizeable movement mechanics and networked with client-side prediction.</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>
                    {/* ------ Row 2 ------ */}
                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Challanges</h2>
                                <br />
                                <li><b>Up was always World Z axis:</b> The CharacterMovementComponent in unreal makes the assumption that up is always the same direction, (0,0,1) in world space. 
                                    This isn't very flexible and prevents using custom gravity directions for use cases like creating a planet. </li>
                                <br />
                                <li><b>Unreals builtin CharacterMovementComponent:</b> Unreals builtin character movement component is a big class containing, 
                                    kinematic movement collision handling, movement logic, clientside prediction and more, all coupled together. This was near impossible to work with,
                                    which lead to my decision to build my own solution from scratch
                                </li>
                                <br />
                                <li><b>Nothing could be reused:</b> Since unreals movement logic was all in one class, I couldn't reuse any of it and needed to build my own logic for Kinematic Controller collisions, 
                                    Movement logic itself such as running, gravity, jumping, sprinting and client side prediction.</li>
                            </ProjectTextCard>
                            <ProjectImageCard src="/images/character-controller/MovementReplication.gif" title="Movement Replication from one client to another"/>
                            <ProjectImageCard src="/images/character-controller/TemplatedCSP.png" title="Used templates for my base Clientside Prediction class 
                            so it could be reused easily for controllers that have different Input and State packets"/>
                            <ProjectImageCard src="/images/character-controller/ModularMovementControllerCombined.png" title="ModularMovementController base class used 
                            to create a powerful architecture for implementing movement logic. It uses a combination of a StateMachine and components that individual movement states can enable/disable"/>
                        </Col>
                        <Col>
                           
                            <ProjectImageCard src="/images/character-controller/MovementTickOverview.png" title="Overview of Movement Tick function used for the 
                            base character controller class in charge of collisions etc. Functions such as UpdateRotation(), UpdateVelocity, BeforeCharacterUpdate(),
                             AfterCharacterUpdate() and more are used to provide an convenient interface to control the character."/>
                            <ProjectTextCard>
                                <h2>Features</h2>
                                <br />
                                <li><b>Client Side Prediciton:</b> Controller is completely server authoritive with client side prediction and a snapshot buffer system to handle replicating movement to remote clients</li>
                                <br />
                                <li><b>Easily Customizable and Extendable Movement logic:</b> Easily customizable movement states, and movement components to handling creating complex movement logic. 
                                    Examples controller uses Ground and Air States, along with Gravity and Jump components. </li>
                                <br />
                                <li><b>Base Kinematic Character Controller logic:</b> A base controller handles, collisions, ground snapping, grounding, stephandling to create a responsive character movement experience</li>
                            </ProjectTextCard>
                            <ProjectImageCard src="/images/character-controller/MovementReconciliation.gif" title="Movement Reconciliation, 
                            one client has an object moved to a different location than the server to demonstrate reconciling and server authority"/> 
                            <ProjectImageCard src="/images/character-controller/ExampleMovementControllerImplementation.png" title="Example implementation of ModularMovementController,
                             uses lambdas as predicates to update StateMachine states, Gravity and Jumping are set as components because they are used in multiple states"/> 


                        </Col>
                    </Row>
                </Col>
                {/* ------ Right Column ------ */}
                <Col md={3}>
                    <ProjectImageCard src="/images/character-controller/character-controller-icon.png" />
                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Unreal Engine 5</li>
                            <li>C++/Unreal++</li>
                            <li>Blueprints</li>
                        </ul>
                    </ProjectTextCard>
                    <ProjectImageCard src="/images/character-controller/MovementStepHandling.gif" title="Step-handling" />
                    <ProjectImageCard src="/images/character-controller/MovementReorientation.gif" title="Movement Reorientation up the slope and against the wall."/>
                    <ProjectImageCard src="/images/character-controller/MovementCreaseHandling.gif" title="Handling creases due to de-collision cycles, 
                            this could be handled better to prevent going inside the wall at all but I decided to leave it as is to reduce scope"/>                            
                    <ProjectImageCard src="/images/character-controller/MovementStepHandling2.gif" title="Step-handling with steep stairs"/>
                    <ProjectImageCard src="/images/character-controller/MovementSlopeHandling.gif" title="Slope-handling able to control maximum walkable slope angle"/>
                </Col>
            </Row>
        </div>
    )
}