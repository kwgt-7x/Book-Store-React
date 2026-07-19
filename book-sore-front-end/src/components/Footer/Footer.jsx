import "./Footer.css";

import { Link } from "react-router-dom";

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {

    return (

        <footer className="footer" data-aos="fade">

            <div className="footer-container">

                <div className="footer-about">

                    <div className="footer-logo">

                        <span>B</span>ook

                    </div>

                    <p>

                        Discover your next favorite book from our growing collection.
                        Explore authors, categories, and timeless stories all in one place.

                    </p>

                    <div className="footer-social">

                        <Link>
                            <FaFacebookF />
                        </Link>

                        <Link>
                            <FaInstagram />
                        </Link>

                        <Link>
                            <FaTwitter />
                        </Link>

                    </div>

                </div>

                <div className="footer-links">

                    <h4>Quick Links</h4>

                    <Link to="/">Home</Link>

                    <Link to="/BooksPage">Books</Link>

                    <Link to="/AuthorsPage">Authors</Link>

                    <Link to="/CategoriesPage">Categories</Link>

                </div>

                <div className="footer-links">

                    <h4>Categories</h4>

                    <Link>Fiction</Link>

                    <Link>Science</Link>

                    <Link>History</Link>

                    <Link>Romance</Link>

                </div>

                <div className="footer-contact">

                    <h4>Contact</h4>

                    <p>

                        <FaEnvelope />

                        info@book.com

                    </p>

                    <p>

                        <FaPhoneAlt />

                        +1 234 567 890

                    </p>

                    <p>

                        <FaMapMarkerAlt />

                        New York, USA

                    </p>

                </div>

            </div>

            <div className="footer-bottom">

                <p>

                    © 2026 Book. All Rights Reserved.

                </p>

                <p>

                    Designed with ❤️ using React

                </p>

            </div>

        </footer>

    );

}

export default Footer;