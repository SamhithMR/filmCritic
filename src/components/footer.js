import './components.css'
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

function Footer(){
    return(
        <div className="footer">
           <div className='footer_links'>
                <p>Terms Of Use</p>
                <p>About</p>
                <p>Blog</p>
                <p>FAQ</p>
           </div>
           <div className='footer_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
           <div className='footer_icons'>
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
                <FaLinkedin />
           </div>
        </div>
    )
}

export default Footer