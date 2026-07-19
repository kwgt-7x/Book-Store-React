import "./SearchPage.css";

import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

import BookCard from "../../components/BookCard/BookCard";

function SearchPage() {

    const [searchParams] = useSearchParams();

    const query = searchParams.get("q") || "";

    const { data } = useSelector(

        state => state.books

    );

    const filteredBooks = useMemo(() => {

        const search = query.toLowerCase().trim();

        if (!search) return [];

        return data.filter(book =>

            book.title.toLowerCase().includes(search) ||

            book.auther.toLowerCase().includes(search) ||

            book.shortDescription.toLowerCase().includes(search) ||

            book.categories.some(category =>

                category.title.toLowerCase().includes(search)

            )

        );

    }, [data, query]);

    return (

        <section className="search-page">

            <div className="page-header">

                <h1>

                    Search Results

                </h1>

                <p>

                    Showing results for

                    <span>

                        "{query}"

                    </span>

                </p>

            </div>

            {

                filteredBooks.length === 0 ?

                    (

                        <div className="empty-search">

                            <h2>

                                No books found

                            </h2>

                            <p>

                                Try searching with another keyword.

                            </p>

                        </div>

                    )

                    :

                    (

                        <>

                            <div className="search-count">

                                {filteredBooks.length} books found

                            </div>

                            <div className="search-grid">

                                {

                                    filteredBooks.map(book => (

                                        <BookCard

                                            key={book.documentId}

                                            book={book}

                                        />

                                    ))

                                }

                            </div>

                        </>

                    )

            }

        </section>

    );

}

export default SearchPage;