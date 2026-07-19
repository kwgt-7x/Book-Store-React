import "./CategoriesPage.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { getCategoriesApi } from "../../features/getCategoriesApi/getCategoriesApiSlice";
import CategorySkeleton from "../../components/SkeletonLoading/CategorySkeleton/CategorySkeleton";
import Error from '../../components/Error/Error';

function CategoriesPage() {
    const dispatch = useDispatch();

    const { data, ispayload, error } = useSelector(
        state => state.categories
    );

    useEffect(() => {
        dispatch(
            getCategoriesApi({
                pagesize: 100
            })
        );
    }, [dispatch]);

    if (error) {
        return <Error />;
    }

    return (
        <section className="categories-page">
            <div className="page-header">
                <span className="section-subtitle">Categories</span>
                <h1>Browse Categories</h1>
                <p>
                    Explore books organized by category and discover your next favorite read.
                </p>
            </div>

            <div className="categories-page-grid">
                {ispayload
                    ? // هنا قمنا بتغيير الرقم إلى 8 لعرض 8 كروت Skeleton أثناء التحميل
                    [...Array(8)].map((_, index) => (
                        <CategorySkeleton key={index} />
                    ))
                    : // عرض الكروت الحقيقية بعد انتهاء التحميل
                    data?.map(category => (
                        <CategoryCard
                            key={category.id}
                            category={category}
                        />
                    ))
                }
            </div>
        </section>
    );
}

export default CategoriesPage;