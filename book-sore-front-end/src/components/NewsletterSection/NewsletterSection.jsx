import "./NewsletterSection.css";

import { FaPaperPlane } from "react-icons/fa";

function NewsletterSection() {

    return (

        <section className="newsletter-section">

            <div className="newsletter-content">

                <span className="section-subtitle">

                    Newsletter

                </span>

                <h2>

                    Stay Updated With New Books

                </h2>

                <p>

                    Subscribe to receive the latest book releases, exclusive offers, and reading recommendations directly in your inbox.

                </p>

                <form className="newsletter-form">

                    <input
                        type="email"
                        placeholder="Enter your email address"
                    />

                    <button type="submit">

                        <FaPaperPlane />

                        Subscribe

                    </button>

                </form>

            </div>

        </section>

    );

}

export default NewsletterSection;