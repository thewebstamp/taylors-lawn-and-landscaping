import './aboutComp.css';
import { useNavigate } from 'react-router-dom';
import { Images } from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef } from 'react';

function AboutComp() {
    const navigate = useNavigate();
    const aboutT = useRef();
    const aboutB = useRef();

    function slideUp() {
        if (window.location.pathname == "/") {
            if (window.innerHeight * 0.9 >= aboutT.current.getBoundingClientRect().top) {
                aboutT.current.classList.add("slide-up");
            } else {
                aboutT.current.classList.remove("slide-up");
            }

            if (window.innerHeight * 0.9 >= aboutB.current.getBoundingClientRect().top) {
                aboutB.current.classList.add("slide-up");
            } else {
                aboutB.current.classList.remove("slide-up");
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", slideUp);

        return () => {
            if (window.location.pathname == "/") {
                aboutT.current.classList.remove("slide-up");
                aboutB.current.classList.remove("slide-up");
            }
        }
    }, []);

    return (
        <div className="about-comp">
            <div className="about-comp-imgs" ref={aboutT}>
                <img className='a-height' src={Images.acompImg1} alt="" />
                <img className='a-img-1' src={Images.acompImg1} alt="" />
                <img className='a-img-2' src={Images.acompImg2} alt="" />
            </div>

            <div className="about-comp-text" ref={aboutB}>
                <div className="a-headline">ABOUT US</div>
                <h2>Every Lawn Deserves TLC — and We Deliver It!</h2>
                <p>We bring over 25 years of hands-on experience in landscaping, drainage solutions, and heavy equipment operation to every project we take on. Based in South Paragould, Arkansas, and proudly serving Northeast Arkansas (NEA) and surrounding areas, we specialize in transforming outdoor spaces with precision, creativity, and care.</p>
                <div className="about-bullet">
                    <div className="item">
                        <FontAwesomeIcon className='a-check' icon={faCheck} />
                        <span>Locally Trusted</span>
                    </div>
                    <div className="item">
                        <FontAwesomeIcon className='a-check' icon={faCheck} />
                        <span>great Service</span>
                    </div>
                    <div className="item">
                        <FontAwesomeIcon className='a-check' icon={faCheck} />
                        <span>Fast Response</span>
                    </div>
                    <div className="item">
                        <FontAwesomeIcon className='a-check' icon={faCheck} />
                        <span>good Rates</span>
                    </div>
                </div>
                <a href="#" onClick={() => { navigate("/about") }}>Learn &nbsp;More</a>
            </div>
        </div>
    )
}

export default AboutComp;