import "./Footer.css";
import google from "../assets/img/google.svg";
import facebook from "../assets/img/facebook.svg";
import telegram from "../assets/img/telegram.svg";
import linkedin from "../assets/img/linkedin.svg";
import twitter from "../assets/img/twitter.svg";



function Footer(){
    return(
        <footer className="conteiner-footer">
            <nav className="conteiner-footer-content">
                <ul className="conteiner-footer-content-icon">
                    <img src={google} alt="google"></img>
                </ul>
                <ul className="conteiner-footer-content-text">
                    <li>Home</li>
                    <li>UserList</li>
                    <li>Contact</li>
                    <li>Login</li>

                </ul>
                <ul className="conteiner-footer-content-socSetImg">
                <img src={facebook} alt="facebook"></img>
                <img src={telegram} alt="telegram"></img>
                <img src={linkedin} alt="linkedin"></img>
                <img src={twitter} alt="twitter"></img> 
                </ul>
            </nav>

        </footer>
    )
}
export default Footer;