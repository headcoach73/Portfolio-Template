import '../styles/ProjectImageCard.scss';
import Card from 'react-bootstrap/Card';

export default function ProjectImageCard(props) {
    return (
        <div className="project-image-card">
            <Card className={props.className && props.className}>
                <Card.Img src={props.src} />
                <Card.ImgOverlay />
                {props.title ? <p style={{textAlign: "center", width: "100%"}}>{props.title}</p> : <></>}
            </Card>
        </div>
    )
}
