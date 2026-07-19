import "./CategoryBooksPage.css";

import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { FaArrowLeft } from "react-icons/fa";

import BookCard from "../../components/BookCard/BookCard";
import CategorySkeleton from "../../components/SkeletonLoading/CategorySkeleton/CategorySkeleton";
import Error from "../../components/Error/Error";
import { getAllBooksApi } from "../../features/getAllBooksApi/getAllBooksApiSlice";

function CategoryBooksPage() {

    const { documentId } = useParams();

    const dispatch = useDispatch();

    const { data, ispayload, error } = useSelector(

        state => state.allBooks

    );

    useEffect(() => {

        dispatch(getAllBooksApi());

    }, [dispatch]);

    if (ispayload) {

        return (

            <section className="category-books-page">

                <div className="books-grid">

                    {[...Array(8)].map((_, index) => (

                        <CategorySkeleton key={index} />

                    ))}

                </div>

            </section>

        );

    }

    if (error) {

        return <Error />;

    }

    const books = data.filter(book =>
        book.categories?.some(category =>
            category.documentId === documentId
        )
    );

    const category = books
        .flatMap(book => book.categories)
        .find(category => category.documentId === documentId);

    return (

        <section className="category-books-page">

            <Link
                to="/CategoriesPage"
                className="back-to-books"
            >

                <FaArrowLeft />

                Back to Categories

            </Link>

            <div className="page-header">

                <span>Category</span>

                <h1>

                    {category?.title || "Books"}

                </h1>

                <p>

                    Explore every book available in the{" "}
                    <strong>

                        {category?.title || "selected"}

                    </strong>{" "}

                    category.

                </p>

            </div>

            {

                books.length > 0 ?

                    (

                        <div className="books-grid">

                            {

                                books.map(book => (

                                    <BookCard
                                        key={book.documentId}
                                        book={book}
                                    />

                                ))

                            }

                        </div>

                    )

                    :

                    (

                        <div className="empty-books">

                            No books found in this category.

                        </div>

                    )

            }

        </section>

    );

}

export default CategoryBooksPage;