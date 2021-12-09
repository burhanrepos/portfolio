import whatsapp from "../images/icons8-whatsapp-50.png";
import facebook from "../images/icons8-facebook-50.png";
import github from "../images/icons8-github-50.png";
import instagram from "../images/icons8-instagram-50.png";
import {FaFacebook} from 'react-icons/fa';
import {FaWhatsapp} from 'react-icons/fa';
import {GoMarkGithub} from 'react-icons/go';
import {FaInstagram} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
const Footer =()=>{
    return(
        <div className="Footer__bar">
        <p className="brand__name">Burhan Shaheen</p>
        <h3>Your Complete Web Solution</h3>
        <div className="footer__icons">
            {/* <a href="https://wa.me/923339216466" target="_blank" title="Whatsapp"><img src={whatsapp} alt=""  /></a>
            <a href="https://www.facebook.com/burhan.afridi.33" target="_blank" title="Facebook"><img src={facebook} alt="" /></a>
            <a  href="https://www.instagram.com/burhan_afridi_10/" target="_blank" title="Instagram"><img src={instagram} alt="" /></a>
            <a href="https://github.com/burhanrepos" target="_blank" title="Github"> <img src={github} alt="" /></a> */}
             <a href="https://wa.me/923339216466" target="_blank" title="Whatsapp">
                    <FaWhatsapp size={45} style={{ color: 'white',padding:'4%' }} />
                </a>
             <a href="https://www.facebook.com/burhan.afridi.33" target="_blank" title="Facebook">
                    <FaFacebook size={45} style={{ color: 'white',padding:'4%' }} />
                </a>
             <a href="https://www.instagram.com/burhan_afridi_10/" target="_blank" title="Instagram">
                    <FaInstagram size={45} style={{ color: 'crimson',padding:'4%' }} />
             </a>
             <a href="https://github.com/burhanrepos" target="_blank" title="Github">
                    <GoMarkGithub size={45} style={{ color: 'white',padding:'4%' }} />
             </a>
             <a href="https://www.linkedin.com/in/burhan-shaheen-49b3aa1b0" target="_blank" title="LinkedIn">
                    <FaLinkedin size={45} style={{ color: 'white',padding:'4%' }} />
             </a>
        </div>
        <p className="copyR">copyright © 2021 reserved by Burhan Shaheen</p>
    </div>
    );
}
export default Footer;