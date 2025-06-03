import './aboutHero.css';
import { Images } from '../../assets/images.js';

function AboutHero() {
    return (
        <div className="about-hero">
            <div className='ah-top'>
                <div className='img-wrap'>
                    <img className='ah-img-1' src={Images.about1} />
                    <img className='ah-img-2' src={Images.about2} />
                    <img className='ah-img-height' src={Images.about1} />
                </div>
            </div>
            
            <div className='ah-base'>
                <div className='ah-headline'>LEARN ABOUT US</div>
                <h2>Turning Overgrown Yards into Outdoor Showpieces</h2>
                <p>At <b>Taylor’s Lawn Care & Landscaping, LLC</b>, we bring <b>over 25 years of hands-on experience</b> in landscaping, drainage solutions, and heavy equipment operation to every project we take on. Based in <b>South Paragould, Arkansas</b>, and proudly serving <b>Northeast Arkansas (NEA)</b> and surrounding areas, we specialize in transforming outdoor spaces with precision, creativity, and care. <br /><br />Whether you're dealing with poor drainage, need a stunning new landscape design, or want to enhance your property with rock work, privacy fencing, or a revitalized deck — we’ve got you covered. Our <b>faith-based, family-owned</b> business is built on honesty, reliability, and guaranteed results</p>
            </div>
        </div>
    )
}

export default AboutHero;