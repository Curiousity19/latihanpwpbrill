import { Container } from "react-bootstrap";
import Facebook from "../asset/icon/facebook.svg";
import Instagram from "../asset/icon/instagram.svg";
import Twitter from "../asset/icon/twitter.svg";


const Footer = () => {
    return (
        <div>
            <Container>
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <svg className="bi" width="30" height="24"></svg>
                    </a>
                    <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="#"><img className="color" src={Facebook} width="24" /></a></li>
                    <li className="ms-3"><a className="text-muted" href="#"><img className="color" src={Twitter} width="24" /></a></li>
                    <li className="ms-3"><a className="text-muted" href="#"><img className="color" src={Instagram} width="24" /></a></li>
                    </ul>
                </footer>
            </Container>
        </div>
    )
}

export default Footer;