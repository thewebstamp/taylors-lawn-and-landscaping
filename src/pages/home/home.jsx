import { useRef } from 'react';
import AboutComp from '../../components/aboutComp/aboutComp';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Hero from '../../components/hero/hero';
import Portfolio from '../../components/portfolio/portfolio';
import Reachout from '../../components/reachout/reachout';
import ServiceComp from '../../components/serviceComp/serviceComp';
import Testimonial from '../../components/testimonial/testimonial';

function Home() {
    return (
        <div className='home'>
            <Header home="active" />
            <Hero />
            <AboutComp />
            <ServiceComp />
            <Portfolio />
            <Testimonial />
            <Reachout />
            <Footer />
        </div>
    )
}

export default Home;