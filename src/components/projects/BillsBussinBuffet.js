import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from "../ProjectTextCard";

export default function BillsBussinBuffet() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>
                    {/* ------ Row 1 ------ */}
                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Bills Bussin Buffet</h2>
                                <h5>Status: Complete</h5>
                                <br />
                                <h3>Summary</h3>
                                <p>A dating sim developed in unity for Kiwi Jam.</p>
                                <p>???</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}