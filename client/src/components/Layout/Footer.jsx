import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer(){

    return(
        <footer>
            <ul>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
            </ul>
            <p>Nosso Rodapé</p>
        </footer>
    )
}

export default Footer