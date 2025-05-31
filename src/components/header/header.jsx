import './header.css';
import { useNavigate } from 'react-router-dom';
import { Images } from '../../assets/images.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function Header({home, about, service, contact}) {
    const navigate = useNavigate();
    const [menuActive, setMenuActive] = useState(true);
    const menuNav = document.getElementById("navigation");
    const menu = document.getElementById("menu");

    function menuSlide() {
        const menuNav = document.getElementById("navigation");
        const menuText = document.getElementById("menu");

        if (menuActive) {
            menuNav.classList.add("nav-menu-active");
            menuText.classList.add("menu-close");
            setMenuActive(false);
            menuText.textContent = "Close";
        } else {
            menuNav.classList.remove("nav-menu-active");
            menuText.classList.remove("menu-close");
            setMenuActive(true);
            menuText.textContent = "Menu";
        }
    };

    document.addEventListener("click", (e) => {
        const menuText = document.getElementById("menu");

        if (e.target != menuNav && e.target != menu) {
            menuNav.classList.remove("nav-menu-active");
            menuText.classList.remove("menu-close");
            setMenuActive(true);
            menuText.textContent = "Menu";
        }
    });

    return (
        <div className="header-comp">
            <img src={Images.heroImg1} alt="" id="website-img" />
            <a href="#" onClick={()=>{navigate("/")}}><img src={Images.ddr_logo} alt="" /></a>
            <div className="navigation-right">
                <a href="tel:+14233831893" className="phone-contact">
                    <FontAwesomeIcon className="header-phone" icon={faPhone} />
                    <p>+1 423-383-1893</p>
                </a>
                <div className="nav-base">
                    <nav className='navigation' id='navigation'>
                        <ul>
                            <li className={home} onClick={()=>{navigate("/")}}><a href="#">Home</a></li>
                            <li className={about} onClick={()=>{navigate("/about")}}><a href="#">About us</a></li>
                            <li className={service} onClick={()=>{navigate("/")}}><a href="#services">Our services</a></li>
                            <li className={contact} onClick={()=>{navigate("/contact")}}><a href="#">Contact us</a></li>
                        </ul>
                    </nav>
                    <div className="nav-menu">
                        <p id='menu' onClick={menuSlide}>Menu</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;