import { useState } from "react"
import { Container, Stack, Row, Col } from "react-bootstrap"
import './Themes.css'
import quotes from "../quotes";

function Themes() {
    const random = Math.floor(Math.random() * 6);
    const randomQuote = quotes.filter((quote) => {
        return Number(quote.id) === random
    })
    return (
        <div>
            {/* <Stack>
                <Container fluid className="section-1"><h1 className="heading">Blankspace .</h1></Container>
                <Container>
                    <p>{randomQuote[0].description}</p>
                </Container>
                <Container fluid className="spotify"><iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9sIqqvKsjG8?utm_source=generator" width="100%" height="380" frameBorder="0" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></Container>
            </Stack> */}
            <Col>
                <Row style={{ marginRight: '0px' }}><h1 className="heading">Blankspace .</h1></Row>
                <Row style={{ marginRight: '0px' }}><div className='quote-div'><p className="quote">{randomQuote[0].description}</p></div></Row>
                <Row style={{ marginRight: '0px' }}><Container fluid className="spotify"><iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9sIqqvKsjG8?utm_source=generator" width="100%" height="380" frameBorder="0" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></Container></Row>
            </Col>
        </div>
    )
}
export default Themes