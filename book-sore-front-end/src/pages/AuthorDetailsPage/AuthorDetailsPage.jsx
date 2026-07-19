import "./AuthorDetailsPage.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
    FaArrowLeft,
    FaFacebookF,
    FaInstagram,
    FaTwitter
} from "react-icons/fa";
import { getAuthers } from "../../features/getAuthers/getAuthersSlice";
import BookCard from "../../components/BookCard/BookCard";
import AuthorDetailsSkeleton from "../../components/SkeletonLoading/AuthorDetailsSkeleton/AuthorDetailsSkeleton";
import Error from "../../components/Error/Error";
import { getAllBooksApi } from "../../features/getAllBooksApi/getAllBooksApiSlice";

function AuthorDetailsPage() {

    const { id } = useParams();

    const dispatch = useDispatch();

    const {
        data: authors,
        ispayload: authorsLoading,
        error
    } = useSelector(state => state.auther);

    const {
        data: books,
        ispayload: booksLoading
    } = useSelector(state => state.allBooks);

    useEffect(() => {

        if (!authors.length) {

            dispatch(getAuthers());

        }

        if (!books.length) {

            dispatch(

                getAllBooksApi()

            );

        }

    }, [dispatch, authors.length, books.length]);

    const author = authors.find(

        item => item.id === Number(id)

    );

    if (authorsLoading || booksLoading) {

        return <AuthorDetailsSkeleton />;

    }

    if (error) {

        return <Error />;

    }

    if (!author) {

        return <Error />;

    }

    const categoryIds = author.categories.map(

        category => category.id

    );

    const relatedBooks = books.filter(book =>

        book.categories?.some(category =>

            categoryIds.includes(category.id)

        )

    );

    return (

        <section className="author-details">

            <Link
                to="/AuthorsPage"
                className="back-to-books"
            >

                <FaArrowLeft />

                Back to Authors

            </Link>

            <div className="author-info">

                <img
                    src={`http://localhost:1337${author.image.url}`}
                    alt={author.name}
                />

                <div className="author-content">

                    <span>

                        {author.field}

                    </span>

                    <h1>

                        {author.name}

                    </h1>

                    <p>

                        {author.bio}

                    </p>

                    <div className="author-social">

                        <a href={author.class_icon_1}>

                            <FaFacebookF />

                        </a>

                        <a href={author.class_icon_2}>

                            <FaInstagram />

                        </a>

                        <a href={author.class_icon_3}>

                            <FaTwitter />

                        </a>

                    </div>

                </div>

            </div>

            <div className="author-books">

                <div className="page-header">

                    <span>

                        Books

                    </span>

                    <h2>

                        Books Related To {author.field}

                    </h2>

                    <p>

                        Explore books connected to the author's area of expertise.

                    </p>

                </div>

                <div className="books-grid">

                    {

                        relatedBooks.map(book => (

                            <BookCard

                                key={book.documentId}

                                book={book}

                            />

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default AuthorDetailsPage;