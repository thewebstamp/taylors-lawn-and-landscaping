import "./contact.css";
import ContactComp from '../../components/contactComp/contactComp';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

function Contact() {
    return (
        <div className="contact-page">
            <Header contact='active' />
            <ContactComp />
            <Footer />
        </div>
    )
}

export default Contact;