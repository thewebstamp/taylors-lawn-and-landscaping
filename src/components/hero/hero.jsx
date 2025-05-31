import './hero.css';
import { Images } from '../../assets/images';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();

    return (
        <div className="hero-wrap">
            <div className="hero-container">
                <div className="hero-background">
                    <img src={Images.thumbnail} alt="" />
                </div>
                <div className="hero">
                    <div className="hero-top">
                        <div className="small-headline">TAYLOR'S LAWN & LANDSCAPING, INC</div>
                        <h1>Professional Lawn & Landscaping Services in the Tri-Cities</h1>
                        <p>Locally owned and fully committed to your curb appeal—offering mowing, landscaping, leaf removal, gutter cleaning, and 24/7 snow removal. <b>Rain, Snow, or Shine – We’re There</b></p>
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