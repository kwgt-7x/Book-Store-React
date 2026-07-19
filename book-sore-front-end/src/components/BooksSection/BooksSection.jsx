import "./BooksSection.css";

import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBooksApi } from "../../features/getBooksApi/getBooksApiSlice";
import BookCard from "../BookCard/BookCard";
import BookSkeleton from "../SkeletonLoading/BookSkeleton/BookSkeleton";
import Error from "../Error/Error";

function BooksSection() {

    const dispatch = useDispatch()

    const { data, ispayload, error } = useSelector((state) => state.books)

    useEffect(() => {

        dispatch(getBooksApi({ page: 1, pageSize: 36 }))

    }, [dispatch, data.length])

    console.log(data)

    if (ispayload) {

        return (

            <section className="books-page">

                <div className="books-grid">

                    {

                        [...Array(8)].map((_, index) =>

                            <BookSkeleton

                                key={index}

                            />

                        )

                    }

                </div>

            </section>

        )

    }

    if(error) {
        return <Error/>
    }

    return (

        <section className="books-section">

            <div className="section-header">

                <div>

                    <span className="section-subtitle">

                        Books

                    </span>

                    <h2>

                        Featured Books

                    </h2>

                    <p>

                        Discover our collection of carefully selected books for every reader.

                    </p>

                </div>

                <Link
                    to="/BooksPage"
                    className="view-all-btn"
                >

                    View All

                    <FaArrowRight />

                </Link>

            </div>

            <div className="books-grid">

                {

                    data.filter((_, index) => index % 5 === 0).map(book => (

                        <BookCard

                            key={book.id}

                            book={book}

                        />

                    ))

                }

            </div>

        </section>

    );

}

export default BooksSection;