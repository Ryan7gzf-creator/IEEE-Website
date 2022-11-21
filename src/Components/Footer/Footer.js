import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import './Footer.css';

const Footer = () => {
    return(
        <nav className="bottomNavbar">
            <div className="footer">
                <a href="https://www.facebook.com/UOAIEEESB">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.instagram.com/ieee.uoa/">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.linkedin.com/company/ieee-student-branch-uoa/">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </nav>
    );
}
export default Footer;