import './testimonial.css';
import { Images } from '../../assets/images';
import { useRef, useEffect } from 'react';

function Testimonial() {
    const testimonial = [
        {
            name: 'SARAH M',
            address: 'Johnson City, TN',
            review: "Taylor’s Lawn and Landscaping transformed our yard! Reliable, professional, and always on time. Their team takes great care, and we couldn’t be happier with the results. They truly go above and beyond every visit"
        },
        {
            name: 'MIKE R',
            address: 'Kingsport, TN',
            review: 'Excellent attention to detail and great communication. Highly recommend for any landscaping needs in the Tri-Cities area! They listen closely to your needs and deliver exactly what you expect'
        },
        {
            name: 'EMILY T',
            address: 'Bristol, TN',
            review: "From weekly mowing to snow removal, Taylor’s has been our go-to for years. Friendly service and exceptional quality every season. Their dedication and consistency really set them apart from the rest"
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
                {/* <a className='facebook-review' href="https://web.facebook.com/profile.php?id=61555744794312&sk=reviews" target='_blank'><img src={Images.facebookReviews} alt="" /></a> */}
            </div>
        </div>
    )
}

export default Testimonial;