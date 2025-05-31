import AboutHero from '../../components/aboutHero/aboutHero';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Questions from '../../components/questions/questions';
import SetApart from '../../components/setApart/setApart';

function AboutUs() {
    return (
        <div className="about-us">
            <Header about="active" />
            <AboutHero />
            <SetApart />
            <Questions />
            <Footer />
        </div>
    )
}

export default AboutUs;