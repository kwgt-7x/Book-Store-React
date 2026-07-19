import "./AuthorsPage.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthers } from "../../features/getAuthers/getAuthersSlice";
import AuthorCard from "../../components/AuthorCard/AuthorCard";

function AuthorsPage() {

    const dispatch = useDispatch();

    const { data } = useSelector(state => state.auther);

    useEffect(() => {

        dispatch(getAuthers());

    }, [dispatch]);

    return (

        <section className="authors-page">

            <div className="page-header">

                <span className="section-subtitle">

                    Authors

                </span>

                <h1>

                    Meet Our Authors

                </h1>

                <p>

                    Discover the talented writers behind our collection. Explore their stories, learn about their backgrounds, and browse the books they have created.

                </p>

            </div>

            <div className="authors-page-grid">

                {
                    data.map(author => (

                        <AuthorCard
                            key={author.id}
                            author={author}
                        />

                    ))
                }

            </div>

        </section>

    );

}

export default AuthorsPage;