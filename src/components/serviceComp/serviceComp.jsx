import './serviceComp.css';
import { useNavigate } from 'react-router-dom';
import { Images } from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState, useEffect } from 'react';

function ServiceComp() {
    const navigate = useNavigate();
    const [ourServices, setOurServices] = useState([
        {
            title: 'Lawn Care',
            description: 'Mowing, trimming, fertilizing, and seasonal maintenance',
            image: Images.lawn
        },
        {
            title: 'Landscaping Design',
            description: 'Creative outdoor space planning and installation',
            image: Images.landscaping
        },
        {
            title: 'Drainage Solutions',
            description: 'Prevent flooding with expert water management',
            image: Images.drainage
        },
        {
            title: 'Sod Installation',
            description: 'Fresh sod for thick, healthy lawns',
            image: Images.sod
        },
        {
            title: 'Privacy Fencing',
            description: 'Durable wood fencing for privacy and security',
            image: Images.fence
        },
        {
            title: 'Deck Construction',
            description: 'Build or restore beautiful, sturdy decks',
            image: Images.deck
        },
        {
            title: 'Sprinkler Systems',
            description: 'Efficient irrigation for healthy plants',
            image: Images.sprinkler
        },
        {
            title: 'Hardscaping Work',
            description: 'Patios, walkways, and retaining walls',
            image: Images.hardscape
        },
        {
            title: 'Tree Trimming',
            description: 'Safe trimming and brush removal services',
            image: Images.tree
        },
        {
            title: 'Additional Services',
            description: 'Gutter cleaning, leaf removal, pressure washing',
            image: Images.additional
        }
    ]);

    function scrollLeft() {
        const sItems = document.querySelectorAll('.items');
        setOurServices((o) => {
            o.push(o[0]);
            o.shift();
            return [...o];
        });
        sItems.forEach((item) => {
            item.classList.add("s-slide-left");
            setTimeout(() => {
                item.classList.remove("s-slide-left");
            }, 400);
        })
    }

    function scrollRight() {
        const sItems = document.querySelectorAll('.items');
        setOurServices((o) => {
            o.unshift(o[o.length-1]);
            o.pop();
            return [...o];
        });
        sItems.forEach((item) => {
            item.classList.add("s-slide-right");
            setTimeout(() => {
                item.classList.remove("s-slide-right");
            }, 400);
        })
    };

        const serviceT = useRef();
        const serviceB = useRef();
    
        function slideUp() {
            if (window.location.pathname == "/") {
                if (window.innerHeight * 0.9 >= serviceT.current.getBoundingClientRect().top) {
                    serviceT.current.classList.add("slide-up");
                } else {
                    serviceT.current.classList.remove("slide-up");
                }
    
                if (window.innerHeight * 0.9 >= serviceB.current.getBoundingClientRect().top) {
                    serviceB.current.classList.add("slide-up");
                } else {
                    serviceB.current.classList.remove("slide-up");
                }
            }
        }
    
        useEffect(() => {
            window.addEventListener("scroll", slideUp);
    
            return () => {
                if (window.location.pathname == "/") {
                    serviceT.current.classList.remove("slide-up");
                    serviceB.current.classList.remove("slide-up");
                }
            }
        }, []);

    return (
        <div className="service-comp" id='services'>
            <div className="s-up" ref={serviceT}>
                <div className="s-heading">
                    <div className="s-headline">OUR SERVICES</div>
                    <h2>Lawn and Landscaping Services You Can Trust Always</h2>
                </div>
                <div className="s-text">
                    <p>At Taylor’s Lawn Care & Landscaping, we provide comprehensive solutions to keep your outdoor spaces beautiful, functional, and healthy. <br /><b>Explore our full list of services below:</b></p>
                    <a href="#" onClick={()=>{navigate("/contact")}}>Contact Us</a>
                </div>
            </div>

            <div className="s-base-wrap" ref={serviceB}>
                <div className="s-base">
                    <div className="top">
                        <div className="s-top-case">
                            {ourServices.map((item, i) => (
                                <div key={i} className="items">
                                    <div className="item-card">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                    <img src={item.image} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="control">
                        <FontAwesomeIcon id='s-control-l' icon={faArrowLeft} onClick={scrollRight} />
                        <FontAwesomeIcon id='s-control-r' icon={faArrowRight} onClick={scrollLeft} />
                    </div>
                </div>
                <a href="#" onClick={()=>{navigate("/contact")}}>Contact Us</a>
            </div>
        </div>
    )
}

export default ServiceComp;