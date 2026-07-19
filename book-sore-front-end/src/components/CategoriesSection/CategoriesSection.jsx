import "./CategoriesSection.css";

import Category from "../CategoryCard/CategoryCard";

import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesApi } from "../../../../Book-Store/book-sore-front-end/src/features/getCategoriesApi/getCategoriesApiSlice";
import { useEffect } from "react";
import CategorySkeleton from "../SkeletonLoading/CategorySkeleton/CategorySkeleton";
import Error from "../Error/Error";


function CategoriesSection() {

    const dispatch = useDispatch();

    const { data, ispayload, error } = useSelector((state) => state.categories)

    console.log(data)

    useEffect(() => {

        dispatch(getCategoriesApi({ pagesize: 4 }))

    }, [dispatch, data.length])

    if (ispayload) {

        return (

            <section className="categories-section">

                <div className="section-header">

                    <div>

                        <div className="skeleton skeleton-section-subtitle"></div>

                        <div className="skeleton skeleton-section-title"></div>

                        <div className="skeleton skeleton-section-text"></div>

                    </div>

                    <div className="skeleton skeleton-view-all"></div>

                </div>

                <div className="categories-section-grid">

                    {

                        [...Array(4)].map((_, index) => (

                            <CategorySkeleton
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

        <section className="categories-section">

            <div className="section-header">

                <div>

                    <span className="section-subtitle">

                        Categories

                    </span>

                    <h2>

                        Browse Categories

                    </h2>

                    <p>

                        Explore books from different genres and discover your next favorite read.

                    </p>

                </div>

                <Link
                    to="/CategoriesPage"
                    className="view-all-btn"
                >

                    View All

                    <FaArrowRight />

                </Link>

            </div>

            <div className="categories-section-grid">

                {
                    data.map(category => (

                        <Category

                            key={category.id}

                            category={category}

                        />

                    ))
                }

            </div>

        </section>

    );

}

export default CategoriesSection;