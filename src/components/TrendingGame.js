import { Container, Row, Col, Card, Image } from "react-bootstrap";
import mineCraftImage from "../asset/trending/minecraft.jpg";
import farCryImage from "../asset/trending/farCry6.jpg";
import lolImage from "../asset/trending/lol.jpg";
import olliworldImage from "../asset/trending/olliworld.jpg";
import valorantImage from "../asset/trending/valorant.jpg";
import wowImage from "../asset/trending/wow.jpg";

const TrendingGame = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white text-center" id="trending">TRENDING</h1>
                <br/>
                <Row>
                    <Col md={4}>
                        <Image src={mineCraftImage} alt="Minecraft Thumbnail" className="images"/>
                        <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">A</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with naturan lead-in to additional content    
                            </Card.Text>
                            <Card.Text className="text-left">
                                Last updated 3 mins ago    
                            </Card.Text>                            
                        </div>
                    </Col>
                    <Col md={4}>
                        <Image src={farCryImage} alt="Far Cry 6 Thumbnail" className="images"/>
                        <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">A</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with naturan lead-in to additional content    
                            </Card.Text>
                            <Card.Text className="text-left">
                                Last updated 3 mins ago    
                            </Card.Text>                            
                        </div>
                    </Col>
                    <Col md={4}>
                        <Image src={lolImage} alt="League Of Legend Thumbnail" className="images"/>
                        <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">A</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with naturan lead-in to additional content    
                            </Card.Text>
                            <Card.Text className="text-left">
                                Last updated 3 mins ago    
                            </Card.Text>                            
                        </div>
                    </Col>
                    <Col md={4}>
                        <Image src={olliworldImage} alt="Olli World Thumbnail" className="images"/>
                        <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">A</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with naturan lead-in to additional content    
                            </Card.Text>
                            <Card.Text className="text-left">
                                Last updated 3 mins ago    
                            </Card.Text>                            
                        </div>
                    </Col>
                    <Col md={4}>
                        <Image src={valorantImage} alt="Valorant Thumbnail" className="images"/>
                        <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">A</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with naturan lead-in to additional content    
                            </Card.Text>
                            <Card.Text className="text-left">
                                Last updated 3 mins ago    
                            </Card.Text>                            
                        </div>
                    </Col>
                    <Col md={4}>
                        <Image src={wowImage} alt="Warcraft Thumbnail" className="images"/>
                        <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">A</Card.Title>
                            <Card.Text className="text-left">
                                This is a wider card with naturan lead-in to additional content    
                            </Card.Text>
                            <Card.Text className="text-left">
                                Last updated 3 mins ago    
                            </Card.Text>                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TrendingGame;