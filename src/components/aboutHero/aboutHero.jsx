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
                <h2>Your Trusted Lawn and Landscape Care Experts</h2>
                <p>At Taylor’s Lawn and Landscaping, Inc, we take pride in being your dependable, locally owned lawn care and landscaping team serving the Tri-Cities area. With years of hands-on experience and a deep commitment to our community, we provide professional, year-round services that keep your outdoor spaces looking their best—whether it’s springtime lawn maintenance, fall leaf cleanup, or winter snow removal. <br /><br />What started as a small mowing service has grown into a full-service landscaping company trusted by homeowners and businesses alike. From <b>weekly mowing and lawn care</b> to <b>custom landscape design, gutter cleaning</b>, and <b>seasonal snow plowing</b>, we handle every job with precision, care, and a personal touch</p>
            </div>
        </div>
    )
}

export default AboutHero;