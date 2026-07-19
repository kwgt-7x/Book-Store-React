import "./AuthorCard.css";

import { Link } from "react-router-dom";

function AuthorCard({ author }) {

    return (

        <Link
            to={`/Authors/${author.id}`}
            className="author-card"
            data-aos="fade-up"
        >

            <div className="author-image">

                <img
                    src={`http://localhost:1337/admin${author.image?.url}`}
                    alt={author.name}
                />

                <div className="author-overlay">

                    <h4>{author.name}</h4>

                </div>

            </div>

        </Link>

    );

}

export default AuthorCard;