import "./BookCard.css";
import toast from "react-hot-toast";

import { Link } from "react-router-dom";

import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

// 1. في أعلى الملف، عرّف المتغير الذي يقرأ رابط السيرفر
const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:1337';
// نتخلص من /api في النهاية إذا كانت موجودة للحصول على رابط السيرفر الرئيسي فقط
const SERVER_URL = API_URL.replace('/api', '');

function BookCard({ book }) {

    const [isFavorite, setIsFavorite] = useState(() => {

        const wishlist =
            JSON.parse(localStorage.getItem("wishlist")) || [];

        return wishlist.includes(book.documentId);

    });

    const [isCart, setIsCart] = useState(() => {

        const cart =
            JSON.parse(localStorage.getItem("cart")) || [];

        return cart.some(

            item => item.documentId === book.documentId

        );

    });

    const toggleWishlist = () => {

        let wishlist =
            JSON.parse(localStorage.getItem("wishlist")) || [];

        if (wishlist.includes(book.documentId)) {

            wishlist = wishlist.filter(

                item => item !== book.documentId

            );

            setIsFavorite(false);

            toast.error("Removed from Wishlist 💔");

        }

        else {

            wishlist.push(book.documentId);

            setIsFavorite(true);

            toast.success("Added to Wishlist ❤️");

        }

        localStorage.setItem(

            "wishlist",

            JSON.stringify(wishlist)

        );

        window.dispatchEvent(

            new Event("wishlistUpdated")

        );

    };

    const toggleCart = () => {

        let cart =
            JSON.parse(localStorage.getItem("cart")) || [];

        const index = cart.findIndex(

            item => item.documentId === book.documentId

        );

        if (index !== -1) {

            cart.splice(index, 1);

            setIsCart(false);

            toast.error("Removed from Cart 🛒");

        }

        else {

            cart.push({

                documentId: book.documentId,

                quantity: 1

            });

            setIsCart(true);

            toast.success("Added to Cart ❤️");

        }

        localStorage.setItem(

            "cart",

            JSON.stringify(cart)

        );

        window.dispatchEvent(

            new Event("wishlistUpdated")

        );

    };

    return (

        <div className="book-card" data-aos="zoom-in">

            <div className="book-image">

                <img
                    src={`${SERVER_URL}${book.image?.url}`}
                    alt={book.title}
                />

                <div className="book-icons">

                    <button

                        onClick={toggleWishlist}

                        className={

                            isFavorite

                                ?

                                "active-icon"

                                :

                                ""

                        }

                    >

                        <FaHeart />

                    </button>

                    <button

                        onClick={toggleCart}

                        className={

                            isCart

                                ?

                                "active-icon"

                                :

                                ""

                        }

                    >

                        <FaShoppingCart />

                    </button>

                </div>

            </div>

            <div className="book-content">

                <h3 className="ellipsis-1">

                    {book.title}

                </h3>

                <span className="book-price">

                    ${book.price}

                </span>

                <Link
                    to={`/BookDetails/${book.documentId}`}
                    className="book-btn btn-theme btn-theme-primary"
                >

                    View Details

                </Link>

            </div>

        </div>

    );

}

export default BookCard;