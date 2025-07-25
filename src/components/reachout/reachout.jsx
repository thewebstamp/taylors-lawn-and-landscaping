import './reachout.css';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Images } from '../../assets/images';
import ReactGA from 'react-ga4';

function Reachout() {
    const navigate = useNavigate();
    const reachoutT = useRef();
    const reachoutB = useRef();
    const handleClick = () => {
        ReactGA.event({
            category: 'Button',
            action: 'Click',
            label: 'Reachout Button'
        });
    };

    function slideUp() {
        if (window.location.pathname == "/") {
            if (window.innerHeight * 0.9 >= reachoutT.current.getBoundingClientRect().top) {
                reachoutT.current.classList.add("slide-up");
            } else {
                reachoutT.current.classList.remove("slide-up");
            }

            if (window.innerHeight * 0.9 >= reachoutB.current.getBoundingClientRect().top) {
                reachoutB.current.classList.add("slide-up");
            } else {
                reachoutB.current.classList.remove("slide-up");
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", slideUp);

        return () => {
            if (window.location.pathname == "/") {
                reachoutT.current.classList.remove("slide-up");
                reachoutB.current.classList.remove("slide-up");
            }
        }
    }, []);

    return (
        <div className="reachout-comp">
            <div className="r-top" ref={reachoutT}>
                <div className="r-headline">REACH OUT TO US</div>
                <h2>Ready to Transform Your Outdoors? Reach Out Today!</h2>
                <p>Whether you need dependable <b>weekly lawn care, seasonal leaf clean-up, privacy fencing, sprinkler system installation, or drainage solutions</b>, we’re here to help — fast, local, and ready when you are.</p>
                <a href="#" onClick={() => {handleClick(); navigate("/contact") }}>See Contact Info</a>
            </div>

            <div className="r-base" ref={reachoutB}>
                <div className="r-image-design"></div>
                <img src={Images.contact} alt="" />
                <img className='r-base-height' src={Images.contact} alt="" />
            </div>
        </div>
    )
}

export default Reachout;