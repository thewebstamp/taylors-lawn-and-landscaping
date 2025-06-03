import './testimonial.css';
import { Images } from '../../assets/images';
import { useRef, useEffect } from 'react';

function Testimonial() {
    const testimonial = [
        {
            name: 'TAMMIE W HESTER',
            address: 'Jonesboro, AR',
            review: "Billy is excellent!  He took my wild out of control flower bed and reigned it in and made it looks fresh and added lights, it is wonderful.  He worked hard, had the project completed promptly!  I would recommend him if you need anything done"
        },
        {
            name: 'KIM WHITMAN',
            address: 'Jonesboro, AR',
            review: "Taylor's Lawn Care & Landscaping, LLC is the best service I’ve had since I moved to Jonesboro 15 years ago. They come on time, for a very fair price, and couldn’t be more helpful and proactive and keeping my lawn looking spectacular!"
        },
        {
            name: 'BRENDA BRENDA',
            address: 'Jonesboro, AR',
            review: "My yard was a MESS! Taylor Lawn Care did an outstanding job and now it is beautiful!  They worked tirelessly and did everything I asked them to do and stayed exactly with the initial quote Billy gave me. Billy and Ricky were a blessing to me!"
        }
    ];

    const testimonialB = useRef();

    function slideUp() {
        if (window.location.pathname == "/") {
            if (window.innerHeight * 0.9 >= testimonialB.current.getBoundingClientRect().top) {
                testimonialB.current.classList.add("slide-up");
            } else {
                testimonialB.current.classList.remove("slide-up");
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", slideUp);

        return () => {
            if (window.location.pathname == "/") {
                testimonialB.current.classList.remove("slide-up");
            }
        }
    }, []);

    return (
        <div className="testimonial-comp">
            <div className="t-top">
                <div className="t-screen"></div>
                <img src={Images.testimonial} alt="" />
            </div>

            <div className="t-base" ref={testimonialB}>
                <div className="t-headline">⭐⭐⭐⭐⭐ WHAT OUR CLIENTS SAY</div>
                <h2>We Let Our Work & Our Clients Do The Talking</h2>
                <div className="testimonial-wrap">
                    {testimonial.map((review, i) => (
                        <div className="t-reviews" key={i}>
                            <div className="review">
                                <div className="big-circle"></div>
                                <div className="small-circle"></div>
                                <p>{review.review}</p>
                            </div>
                            <p className='a'>{review.name}</p>
                            <p className='t-address'>{review.address}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="base-rev">
                <a className='facebook-review' href="https://web.facebook.com/TLCLAWN21/reviews" target='_blank'><img src={Images.review} alt="" /></a>
            </div>
        </div>
    )
}

export default Testimonial;