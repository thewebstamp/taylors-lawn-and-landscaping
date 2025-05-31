import './footer.css';
import { useNavigate } from 'react-router-dom';
import { Images } from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

function Footer({home, about, contact }) {
    const navigate = useNavigate();

    return (
        <div className="footer-comp">
            <div className="f-top-1">
                <a href="#" onClick={()=>{navigate("/")}}><img src={Images.ddr_logo} alt="" /></a>
                <p>Seasons Change. Our Care Doesn’t</p>
                <a href="mailto:TaylorsLandL@gmail.com?Subject=Project Enquiry" target='_blank'><span>Email:</span>&nbsp; TaylorsLandL @gmail.com</a>
                <a href="https://www.bing.com/maps?q=Bristol%2C+TN%2C+United+States%2C+Tennessee&FORM=HDRSC6&cp=36.531851~-82.209745&lvl=12.5" target='_blank'>Bristol, TN, United States, Tennessee</a>
            </div>

            <div className="f-top-2">
                <div className="company">Company</div>
                <ul>
                    <li className={home}><a href="#" onClick={()=>{navigate("/")}}>Home</a></li>
                    <li className={about}><a href="#" onClick={()=>{navigate("/about")}}>About us</a></li>
                    <li className={home} onClick={()=>{navigate("/")}}><a href="#services">Our services</a></li>
                    <li className={home} onClick={()=>{navigate("/")}}><a href="#portfolio">Portfolio</a></li>
                    <li className={contact}><a href="#" onClick={()=>{navigate("/contact")}}>Contact us</a></li>
                </ul>
            </div>

            <div className="f-top-3">
                <div className="social-media">Social Media</div>
                <div className="sm-app">
                    <a href="#"><FontAwesomeIcon className='med-app' icon={faInstagram} /></a>
                    <a href="https://web.facebook.com/taylorslawn" target='_blank'><FontAwesomeIcon className='med-app' icon={faFacebookF} /></a>
                </div>
            </div>

            <p className="copyright">&copy;{new Date().getFullYear()} All Rights Reserved By Taylor's Lawn and Landscaping, Inc</p>
        </div>
    )
}

export default Footer;