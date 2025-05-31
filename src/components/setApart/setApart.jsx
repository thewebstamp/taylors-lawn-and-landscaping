import './setApart.css';
import { useRef, useEffect } from 'react';
import { Images } from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faStamp, faCalendar } from '@fortawesome/free-solid-svg-icons';

function SetApart() {
    const sCards = [
        {
            title: "Attention to detail",
            description: "We ensure that every aspect of the project is completed to the highest standards",
            icon: faMagnifyingGlass
        },
        {
            title: "Customer-centric approach",
            description: "We offer tailored solutions to meet each client's unique needs and preferences",
            icon: faUser
        },
        {
            title: "Quality materials & workmanship",
            description: "We use only the best materials and employ skilled tradespeople to deliver the highest of standards",
            icon: faStamp
        },
        {
            title: "Reliability and punctuality",
            description: "We have a reputation for being reliable, punctual, and communicative to customers",
            icon: faCalendar
        }
    ];

    const setApartT = useRef();
    const setApartB = useRef();

    function slideUp() {
        if (window.location.pathname == "/about") {
            if (window.innerHeight * 0.9 >= setApartT.current.getBoundingClientRect().top) {
                setApartT.current.classList.add("slide-up");
            } else {
                setApartT.current.classList.remove("slide-up");
            }

            if (window.innerHeight * 0.9 >= setApartB.current.getBoundingClientRect().top) {
                setApartB.current.classList.add("slide-up");
            } else {
                setApartB.current.classList.remove("slide-up");
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", slideUp);

        return () => {
            if (window.location.pathname == "/about") {
                setApartT.current.classList.remove("slide-up");
                setApartB.current.classList.remove("slide-up");
            }
        }
    }, []);

    return (
        <div className="set-apart-wrap">
            <div className="sa-top" ref={setApartT}>
                <div className="sa-headline">TAYLOR'S LAWN & LANDSCAPING</div>
                <h2>Discover Why Locals Rely on Taylor’s Lawn Care</h2>
                <div className="sa-cards">
                    {sCards.map((card, i) => (
                        <div key={i} className="card">
                            <FontAwesomeIcon className='icon' icon={card.icon} />
                            <div className="vert-line"></div>
                            <div className="text">
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="sa-base" ref={setApartB}>
                <div className="sa-img-design"></div>
                <img src={Images.difference} className="sa-img" />
                <img src={Images.difference} className="sa-img-height" />
            </div>
        </div>
    )
}

export default SetApart;