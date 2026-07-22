import "./CartPage.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getImageUrl } from "../../api";



function CartPage() {

    const { data } = useSelector(state => state.books);

    const [cart, setCart] = useState(

        JSON.parse(localStorage.getItem("cart")) || []

    );

    const cartBooks = cart.map(item => {

        const book = data.find(

            book => book.documentId === item.documentId

        );

        return {

            ...book,

            quantity: item.quantity

        };

    }).filter(Boolean);

    // زيادة الكمية
    const increaseQuantity = (documentId) => {

        const updatedCart = cart.map(item =>

            item.documentId === documentId

                ? { ...item, quantity: item.quantity + 1 }

                : item

        );

        setCart(updatedCart);

        localStorage.setItem(

            "cart",

            JSON.stringify(updatedCart)

        );

        window.dispatchEvent(new Event("wishlistUpdated"));

    };

    // إنقاص الكمية
    const decreaseQuantity = (documentId) => {

        const updatedCart = cart.map(item =>

            item.documentId === documentId

                ? {
                    ...item,
                    quantity: item.quantity > 1
                        ? item.quantity - 1
                        : 1
                }

                : item

        );

        setCart(updatedCart);

        localStorage.setItem(

            "cart",

            JSON.stringify(updatedCart)

        );

        window.dispatchEvent(new Event("wishlistUpdated"));

    };

    // حذف كتاب
    const removeBook = (documentId) => {

        const updatedCart = cart.filter(

            item => item.documentId !== documentId

        );

        setCart(updatedCart);

        localStorage.setItem(

            "cart",

            JSON.stringify(updatedCart)

        );

        window.dispatchEvent(new Event("wishlistUpdated"));

    };

    const total = cartBooks.reduce(

        (sum, book) =>

            sum + (book.price * book.quantity),

        0

    );

    return (

        <section className="cart-page">

            <div className="page-header">

                <h1>Shopping Cart</h1>

                <p>Review your selected books before checkout.</p>

            </div>

            {

                cartBooks.length === 0 ?

                    (

                        <div className="empty-cart">

                            <h2>Your cart is empty 🛒</h2>

                            <p>

                                Start adding your favorite books.

                            </p>

                        </div>

                    )

                    :

                    (

                        <>

                            <div className="cart-list">

                                {

                                    cartBooks.map(book => (

                                        <div

                                            className="cart-item"

                                            key={book.documentId}

                                        >

                                            <img

                                                src={`${getImageUrl(book.image)}`}

                                                alt={book.title}

                                            />

                                            <div className="cart-info">

                                                <h3>

                                                    {book.title}

                                                </h3>

                                                <span>

                                                    ${book.price}

                                                </span>

                                            </div>

                                            <div className="quantity">

                                                <button

                                                    onClick={() =>

                                                        decreaseQuantity(

                                                            book.documentId

                                                        )

                                                    }

                                                >

                                                    -

                                                </button>

                                                <span>

                                                    {book.quantity}

                                                </span>

                                                <button

                                                    onClick={() =>

                                                        increaseQuantity(

                                                            book.documentId

                                                        )

                                                    }

                                                >

                                                    +

                                                </button>

                                            </div>

                                            <button

                                                className="remove-btn"

                                                onClick={() =>

                                                    removeBook(

                                                        book.documentId

                                                    )

                                                }

                                            >

                                                Remove

                                            </button>

                                        </div>

                                    ))

                                }

                            </div>

                            <div className="cart-summary">

                                <h3>

                                    Total

                                </h3>

                                <span>

                                    ${total.toFixed(2)}

                                </span>

                                <Link
                                    className="checkout-btn btn-theme btn-theme-primary"
                                >

                                    Checkout

                                </Link>

                            </div>

                        </>

                    )

            }

        </section>

    );

}

export default CartPage;