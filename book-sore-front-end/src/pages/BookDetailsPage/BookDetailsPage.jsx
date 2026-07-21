import "./BookDetailsPage.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";


// 1. في أعلى الملف، عرّف المتغير الذي يقرأ رابط السيرفر
const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:1337';
// نتخلص من /api في النهاية إذا كانت موجودة للحصول على رابط السيرفر الرئيسي فقط
const SERVER_URL = API_URL.replace('/api', '');


import {
    FaHeart,
    FaShoppingCart,
    FaArrowLeft
} from "react-icons/fa";

import toast from "react-hot-toast";

import { getBooksApi } from "../../features/getBooksApi/getBooksApiSlice";
import BookDetailsSkeleton from "../../components/SkeletonLoading/BookDetailsSkeleton/BookDetailsSkeleton";
import Error from "../../components/Error/Error";

function BookDetailsPage() {

    const { id } = useParams();

    const dispatch = useDispatch();

    const {
        data,
        ispayload,
        error
    } = useSelector(state => state.books);

    // ==========================
    // States
    // ==========================

    const [isFavorite, setIsFavorite] = useState(false);
    const [isCart, setIsCart] = useState(false);

    // ==========================
    // Fetch Books
    // ==========================

    useEffect(() => {

        if (!data || data.length === 0) {

            dispatch(

                getBooksApi({

                    page: 1,
                    pageSize: 36

                })

            );

        }

    }, [data, dispatch]);

    // ==========================
    // Current Book
    // ==========================

    const book = data.find(

        item => item.documentId === id

    );

    // ==========================
    // Sync LocalStorage
    // ==========================

    useEffect(() => {

        if (!book) return;

        const wishlist =
            JSON.parse(localStorage.getItem("wishlist")) || [];

        const cart =
            JSON.parse(localStorage.getItem("cart")) || [];

        setIsFavorite(

            wishlist.includes(book.documentId)

        );

        setIsCart(

            cart.some(item =>

                item.documentId === book.documentId

            )

        );

    }, [book]);

    // ==========================
    // Loading
    // ==========================

    if (ispayload) {

        return <BookDetailsSkeleton />;

    }

    if (error) {

        return <Error />;

    }

    if (!book) {

        return (

            <div className="details-error">

                Book not found.

            </div>

        );

    }

    // ==========================
    // Wishlist
    // ==========================

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

    // ==========================
    // Cart
    // ==========================

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

            toast.success("Added to Cart 🛒");

        }

        localStorage.setItem(

            "cart",

            JSON.stringify(cart)

        );

        window.dispatchEvent(

            new Event("cartUpdated")

        );

    };

    return (

        <section className="book-details-page">

            <Link
                to="/BooksPage"
                className="back-to-books"
            >

                <FaArrowLeft />

                Back to Books

            </Link>

            <div className="book-details-wrapper">

                <div className="book-details-image">

                    <img
                        src={`${SERVER_URL}${book.image?.url}`}
                        alt={book.title}
                    />

                </div>

                <div className="book-details-content">

                    <div className="book-details-categories">

                        {

                            book.categories?.map(category => (

                                <span
                                    key={category.id}
                                    className="book-category-tag"
                                >

                                    {category.title}

                                </span>

                            ))

                        }

                    </div>

                    <h1>

                        {book.title}

                    </h1>

                    <p className="book-details-author">

                        By <strong>{book.auther}</strong>

                    </p>

                    <div className="book-details-price">

                        ${book.price}

                    </div>

                    <p className="book-details-description">

                        {book.shortDescription}

                    </p>

                    <div className="book-details-actions">

                        <button
                            className={`btn-theme btn-theme-primary ${isCart ? "active-icon" : ""}`}
                            onClick={toggleCart}
                        >

                            <FaShoppingCart />

                            {

                                isCart

                                    ? "Added"

                                    : "Add to Cart"

                            }

                        </button>

                        <button
                            className={`favorite-btn ${isFavorite ? "active-icon" : ""}`}
                            onClick={toggleWishlist}
                        >

                            <FaHeart />

                        </button>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default BookDetailsPage;