import './hero.css';
import { Images } from '../../assets/images';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();

    return (
        <div className="hero-wrap">
            <div className="hero-container">
                <div className="hero-background">
                    <img src={Images.heroImg1} alt="" />
                </div>
                <div className="hero">
                    <div className="hero-top">
                        <div className="small-headline">TAYLOR'S LAWN CARE & LANDSCAPING, LLC</div>
                        <h1>Trusted Lawn Care & Landscaping Experts in Arkansas</h1>
                        <p><b>Where Your Lawn Gets the TLC It Deserves</b>. <br />Over 25 Years of Experience in Landscaping, Drainage Solutions, Sod Installation, Fencing & More!</p>
                        <div className="hero-btn">
                            <a id='hero-f-btn' className='hero-f-btn' onClick={() => {navigate('/contact')}} href="#">Get Free Quote</a>
                            <a id='hero-s-btn' className='hero-s-btn' href="#services">See Services</a>
                        </div>
                    </div>

                    <div className="hero-base">
                        <img src={Images.heroImg1} alt="" />
                        <img src={Images.heroImg2} alt="" />
                        <img src={Images.heroImg3} alt="" />
                        <img src={Images.heroImg4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;