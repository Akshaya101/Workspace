import { Container, Row, Col } from 'react-bootstrap'
import ToDoForm from './ToDoForm'
import Greeting from './Greeting'
import './Space.css'
import video1 from './video/video1.mp4'
import video2 from './video/video2.mp4'
import video3 from './video/video3.mp4'
import Timer from './Timer'

function VideoRandom() {
    const arr = [video1, video2, video3]
    const random = Math.floor(Math.random() * 3);
    return (
        <div>
            <video autoPlay loop muted
                style={{
                    position: "absolute",
                    width: "100%",
                    objectFit: "cover",
                    zIndex: "-1"
                }}
                className='background-video-style'
            >
                <source src={arr[random]} type='video/mp4' />
            </video>
        </div>
    )
}
function Space() {
    return (
        <div>
            <VideoRandom />
            <Container fluid>
                <Row>
                    <Col></Col>
                    <Col><Greeting /></Col>
                </Row>
            </Container>
            <Container className='features'>
                <Row>
                    <Col className="to-do-list"><ToDoForm /></Col>
                    <Col className='timer'><Timer /></Col>
                </Row>
            </Container>
        </div>
    )
}
export default Space