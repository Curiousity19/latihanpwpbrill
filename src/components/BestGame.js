import { Container, Row, Col, Card, Image } from "react-bootstrap";
import b4bImage from "../asset/best/back4blood.jpg";
import crysisImage from "../asset/best/crysis3.jpg";
import re2Image from "../asset/best/residentEvil2.jpg";
import TWDImage from "../asset/best/theWalkingDead.jpg";
import thiefImage from "../asset/best/thief.jpg";
import UDImage from "../asset/best/untilDawn.jpg";

const BestGame = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white text-center" id="best">BEST</h1>
                <br/>
                <Row>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={b4bImage} alt="Minecraft Thumbnail" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">A</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with naturan lead-in to additional content    
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago    
                                    </Card.Text>                            
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={crysisImage} alt="Minecraft Thumbnail" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">A</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with naturan lead-in to additional content    
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago    
                                    </Card.Text>                            
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={re2Image} alt="Minecraft Thumbnail" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">A</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with naturan lead-in to additional content    
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago    
                                    </Card.Text>                            
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={TWDImage} alt="Minecraft Thumbnail" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">A</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with naturan lead-in to additional content    
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago    
                                    </Card.Text>                            
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={b4bImage} alt="Minecraft Thumbnail" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">A</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with naturan lead-in to additional content    
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago    
                                    </Card.Text>                            
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={b4bImage} alt="Minecraft Thumbnail" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">A</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with naturan lead-in to additional content    
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago    
                                    </Card.Text>                            
                                </div>
                            </div>
                        </Card>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default BestGame;