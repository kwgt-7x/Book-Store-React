import "./Error.css";

import { FaExclamationTriangle } from "react-icons/fa";

function Error({ message = "Something went wrong. Please try again later." }) {

    return (

        <section className="error-container">

            <div className="error-box">

                <div className="error-icon">

                    <FaExclamationTriangle />

                </div>

                <h2>

                    Oops!

                </h2>

                <p>

                    {message}

                </p>

                <button
                    className="btn-theme btn-theme-primary"
                    onClick={() => window.location.reload()}
                >

                    Try Again

                </button>

            </div>

        </section>

    );

}

export default Error;