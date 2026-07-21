import "./AuthorCard.css";

import { Link } from "react-router-dom";

// 1. في أعلى الملف، عرّف المتغير الذي يقرأ رابط السيرفر
const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:1337';
// نتخلص من /api في النهاية إذا كانت موجودة للحصول على رابط السيرفر الرئيسي فقط
const SERVER_URL = API_URL.replace('/api', '');

function AuthorCard({ author }) {

    return (

        <Link
            to={`/Authors/${author.id}`}
            className="author-card"
            data-aos="fade-up"
        >

            <div className="author-image">

                <img
                    src={`${SERVER_URL}${author.image?.url}`}
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