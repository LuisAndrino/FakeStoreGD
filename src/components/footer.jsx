import "../css/footer.css";
import { BsIncognito} from "react-icons/bs";
import { FaBalanceScale} from "react-icons/fa";
import { HiOutlineSpeakerphone} from "react-icons/hi";
import { FaBookReader} from "react-icons/fa";
import { FaUserCircle} from "react-icons/fa";
import { AiFillBank} from "react-icons/ai";
import { AiFillFlag} from "react-icons/ai";
import { FaNewspaper} from "react-icons/fa";

const Footer = () => {
    return(
        <footer className="footer">
        <ul className="footer-list">
                <li className="footer-li"> <FaBalanceScale/> Aviso Legal</li>
                <li className="footer-li"> <BsIncognito/> Privacidad</li>
                <li className="footer-li"> <HiOutlineSpeakerphone/> Vende con nosotros</li>
                <li className="footer-li"> <FaBookReader/> Cultura GD</li>
                <li className="footer-li"> <FaUserCircle/> Empleos</li>
                <li className="footer-li"> <AiFillBank/> Cuentas Bancarias</li>
                <li className="footer-li"> <AiFillFlag/> Boletin</li>
                <li className="footer-li"> <FaNewspaper/> Registra tu experiencia</li>
            </ul>
            <p className="footer-p">© Esta pagina es de prueba</p>
        </footer>
    )
}


export default Footer;
