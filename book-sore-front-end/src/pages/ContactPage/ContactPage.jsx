import "./ContactPage.css";

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt
} from "react-icons/fa";

function ContactPage() {

    return (

        <section className="contact-page" data-aos="fade-right">

            <div className="page-header">

                <span className="section-subtitle">

                    Contact

                </span>

                <h1>

                    We'd Love to Hear From You

                </h1>

                <p>

                    Have a question, suggestion, or need assistance? Fill out the form below and our team will get back to you as soon as possible.

                </p>

            </div>

            <div className="contact-wrapper">

                <div className="contact-form">

                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input-theme"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        className="input-theme"
                    />

                    <input
                        type="text"
                        placeholder="Subject"
                        className="input-theme"
                    />

                    <textarea
                        placeholder="Write your message..."
                        rows="7"
                        className="input-theme"
                    />

                    <button className="btn-theme btn-theme-primary">

                        Send Message

                    </button>

                </div>

                <div className="contact-info">

                    <h3>

                        Contact Information

                    </h3>

                    <div className="info-item">

                        <FaMapMarkerAlt />

                        <span>

                            Amsterdam, Netherlands

                        </span>

                    </div>

                    <div className="info-item">

                        <FaEnvelope />

                        <span>

                            support@bookstore.com

                        </span>

                    </div>

                    <div className="info-item">

                        <FaPhoneAlt />

                        <span>

                            +31 000 000 000

                        </span>

                    </div>

                    <div className="social-links">

                        <a href="#">

                            <FaFacebookF />

                        </a>

                        <a href="#">

                            <FaInstagram />

                        </a>

                        <a href="#">

                            <FaTwitter />

                        </a>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default ContactPage;