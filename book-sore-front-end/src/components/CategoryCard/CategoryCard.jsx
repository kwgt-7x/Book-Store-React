import "./CategoryCard.css";
import { Link } from "react-router-dom";
// 1. في أعلى الملف، عرّف المتغير الذي يقرأ رابط السيرفر
const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:1337';
// نتخلص من /api في النهاية إذا كانت موجودة للحصول على رابط السيرفر الرئيسي فقط
const SERVER_URL = API_URL.replace('/api', '');

function CategoryCard({ category }) {
    return (
        <Link
            to={`/Categories/${category.documentId}`}
            className="category-card"
            data-aos="zoom-in"
        >
            <div className="category-image">

                <img
                    src={`${SERVER_URL}${category.image?.url}`}
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