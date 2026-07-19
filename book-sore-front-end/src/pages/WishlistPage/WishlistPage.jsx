import "./WishlistPage.css";

import { useSelector } from "react-redux";

import BookCard from "../../components/BookCard/BookCard";
import { useEffect, useState } from "react";

function WishlistPage() {

    const { data } = useSelector(

        state => state.books

    );

    const [wishlist, setWishlist] = useState(

        JSON.parse(

            localStorage.getItem("wishlist")

        ) || []

    );

    useEffect(() => {

        const updateWishlist = () => {

            setWishlist(

                JSON.parse(

                    localStorage.getItem("wishlist")

                ) || []

            );

        };

        window.addEventListener(

            "wishlistUpdated",

            updateWishlist

        );

        return () => {

            window.removeEventListener(

                "wishlistUpdated",

                updateWishlist

            );

        };

    }, []);

    const wishlistBooks = data.filter(book =>

        wishlist.includes(book.documentId)

    );

    return (

        <section className="wishlist-page">

            <div className="page-header">

                <h1>

                    My Wishlist

                </h1>

                <p>

                    Save your favorite books and come back anytime.

                </p>

            </div>

            {

                wishlistBooks.length === 0

                    ?

                    (

                        <div className="empty-state">

                            <h2>

                                Your wishlist is empty ❤️

                            </h2>

                            <p>

                                Add books you love to see them here.

                            </p>

                        </div>

                    )

                    :

                    (

                        <div className="wishlist-grid">

                            {

                                wishlistBooks.map(book => (

                                    <BookCard

                                        key={book.documentId}

                                        book={book}

                                    />

                                ))

                            }

                        </div>

                    )

            }

        </section>

    );
}

export default WishlistPage;