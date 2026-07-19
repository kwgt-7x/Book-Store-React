import "./AuthorsSection.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import AuthorCard from "../AuthorCard/AuthorCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAuthers } from "../../features/getAuthers/getAuthersSlice";
import AuthorSkeleton from "../SkeletonLoading/AuthorSkeleton/AuthorSkeleton";
import Error from '../Error/Error'

function AuthorsSection() {


    const dispatch = useDispatch();
    const { data, ispayload, error } = useSelector((state) => state.auther);

    useEffect(() => {
        dispatch(getAuthers({ pagesize: 3 }))
    }, [dispatch])

    if (ispayload) {

        return (

            <section className="authors-page">

                <div className="authors-grid">

                    {

                        [...Array(6)].map((_, index) => (

                            <AuthorSkeleton

                                key={index}

                            />

                        ))

                    }

                </div>

            </section>

        );

    }

    if(error) {
        return <Error/>
    }

    return (

        <section className="authors-section">

            <div className="section-header">

                <div>

                    <span className="section-subtitle">

                        Authors

                    </span>

                    <h2>

                        Featured Authors

                    </h2>

                    <p>

                        Meet the talented authors behind our book collection.

                    </p>

                </div>

                <Link
                    to="/AuthorsPage"
                    className="view-all-btn"
                >

                    View All

                    <FaArrowRight />

                </Link>

            </div>

            <div className="authors-grid">

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

export default AuthorsSection;