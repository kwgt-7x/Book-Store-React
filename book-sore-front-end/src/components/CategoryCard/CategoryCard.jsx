import { getImageUrl } from "../../api";
import "./CategoryCard.css";
import { Link } from "react-router-dom";


function CategoryCard({ category }) {
    return (
        <Link
            to={`/Categories/${category.documentId}`}
            className="category-card"
            data-aos="zoom-in"
        >
            <div className="category-image">

                <img
                    src={`${getImageUrl(category.image)}`}
                    alt={category.title}
                />

                <div className="category-overlay">

                    <h4>{category.title}</h4>

                </div>

            </div>
        </Link>
    );
}

export default CategoryCard;