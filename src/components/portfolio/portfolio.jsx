import './portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Images } from '../../assets/images';

function Portfolio() {
    const navigate = useNavigate();
    const [portfolio, setPortfolio] = useState([
        Images.p1, Images.p2, Images.p3, Images.p4, Images.p5, Images.p6, Images.p7, Images.p8, Images.p9,
        Images.p10, Images.p11, Images.p12, Images.p13
    ]);

    function pLeft() {
        const pImage = document.querySelectorAll('.p-image-sc');
        setPortfolio((p) => {
            p.push(p[0]);
            p.shift();
            return [...p];
        });
        pImage.forEach((item) => {
            item.classList.add("p-slide-left");
            setTimeout(() => {
                item.classList.remove("p-slide-left");
            }, 400);
        })
    };

    function pRight() {
        const pImage = document.querySelectorAll('.p-image-sc');
        setPortfolio((p) => {
            p.unshift(p[p.length - 1]);
            p.pop();
            return [...p];
        });
        pImage.forEach((item) => {
            item.classList.add("p-slide-right");
            setTimeout(() => {
                item.classList.remove("p-slide-right");
            }, 400);
        })
    };

    const portfolioA = useRef();

    function slideUp() {
        if (window.location.pathname == "/") {
            if (window.innerHeight * 0.9 >= portfolioA.current.getBoundingClientRect().top) {
                portfolioA.current.classList.add("slide-up");
            } else {
                portfolioA.current.classList.remove("slide-up");
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", slideUp);

        return () => {
            if (window.location.pathname == "/") {
                portfolioA.current.classList.remove("slide-up");
            }
        }
    }, []);

    return (
        <div className="portfolio-comp" id='portfolio' ref={portfolioA}>
            <div className="p-headline">PORTFOLIO</div>
            <h2>Our Work Speaks for Itself</h2>
            <div className="portfolio-images">
                <div className="image-wrap">
                    <div className="p-imgs">
                        {portfolio.map((img, i) => (
                            <img key={i} className='p-image-sc' src={img} alt="" />
                        ))}
                    </div>
                </div>
            </div>
            <div className="p-base">
                <div className="controls">
                    <FontAwesomeIcon id='p-control-l' icon={faArrowLeft} onClick={pRight} />
                    <FontAwesomeIcon id='p-control-r' icon={faArrowRight} onClick={pLeft} />
                </div>
                <a href="#" onClick={()=>{navigate("/contact")}}>Call Us Today</a>
            </div>
        </div>
    )
}

export default Portfolio;