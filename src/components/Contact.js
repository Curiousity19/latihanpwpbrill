import {useState} from 'react';
import { Col, Container, Form, Row, Button } from "react-bootstrap"


const Contact = () => {

    const [judul, setJudul] = useState('ngawi');

    function handleName(e) {
        setJudul(e.target.value);
    }

    return (
        <div>
            <Container className="text-white">
                <h1 className="text-center" id="contact">{judul}</h1>
                <Row>
                    <Col className="d-flex justify-content-center align-items-center">
                        <Form className="col-5">
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your Name" onChange={handleName} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Comment</Form.Label>
                                <Form.Control as="textarea" rows={7} placeholder="Leave a comment here" />
                            </Form.Group>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                    <Button variant="danger" type="submit" className="col-4">
                                        Send
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;