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
                                <p>I created a custom character controller for Unreal Engine that enables flexible customization of movement mechanics, 
                                    while also incorporating networking with client-side prediction. This approach ensures that the movement of the character 
                                    is smooth and responsive in multiplayer environments, making it server-authoritative. The result is a reliable and highly 
                                    customizable solution for character control in Unreal Engine-based games and applications.</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>
                    {/* ------ Row 2 ------ */}
                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Challanges</h2>
                                <br />
                                <li><b>Custom gravity direction support:</b> One of the main challenges I faced while developing the character controller 
                                    was the assumption made by Unreal Engine's CharacterMovementComponent that up is always aligned with the World Z axis,
                                    specifically the vector (0,0,1) in world space. This lack of flexibility made it difficult to implement custom gravity 
                                    directions, such as those required for planet creation. Overcoming this challenge required implementing a custom solution
                                    that could support gravity in any direction, enabling greater creative freedom and more diverse gameplay options.</li>
                                <br />
                                <li><b>Complex CharacterMovementComponent implementation:</b> The built-in CharacterMovementComponent in Unreal Engine proved to be 
                                    a significant challenge due to its size and complexity. The class combines several features, including kinematic movement,
                                    collision handling, movement logic, and client-side prediction, which made it difficult to work with effectively. In light 
                                    of these challenges, I made the decision to create my own solution from scratch, allowing for greater flexibility and more 
                                    efficient implementation of the required features.
                                </li>
                                <br />
                                <li><b>Lack of Reusability:</b> A significant challenge I encountered while developing the character controller was the inability
                                    to reuse any of Unreal Engine's built-in movement logic. Due to the all-in-one implementation of the CharacterMovementComponent,
                                    I had to create my own logic for kinematic controller collisions and movement mechanics such as running, gravity, jumping, sprinting,
                                    and client-side prediction. This process required significant effort and expertise, but ultimately resulted in a more efficient and
                                    flexible solution for character control in Unreal Engine-based games and applications.</li>
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
                                <li><b>Client Side Prediciton:</b> Character controller includes client-side prediction
                                    and a snapshot buffer system, ensuring that the controller is completely server-authoritative. This feature allows 
                                    for smooth and responsive movement in multiplayer environments by replicating movement to remote clients in real-time.
                                </li>
                                <br />
                                <li><b>Customizable Movement Logic:</b> Character controller offers customizable movement states and components, 
                                    making it easy to create complex movement logic. For instance, the controller uses ground and air states, as well as gravity and jump components.
                                    These features enable developers to extend and modify movement mechanics to suit the needs of their games and applications.
                                </li>
                                <br />
                                <li><b>Kinematic Controller Logic:</b> The character controller includes a base controller that handles collisions, 
                                    ground snapping, grounding, and step handling. These features work together to create a responsive and immersive movement experience for the character.</li>
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