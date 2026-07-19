import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooksApi } from "../../features/getBooksApi/getBooksApiSlice";
import BookCard from "../../components/BookCard/BookCard";
import "./BooksPage.css";
import BookSkeleton from "../../components/SkeletonLoading/BookSkeleton/BookSkeleton";
import Error from "../../components/Error/Error";

function BooksPage() {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const pageSize = 8;

    const { data, ispayload, error, meta } = useSelector(
        state => state.books
    );

    // تم نقل الـ useEffect للأعلى ليعمل دائماً بشكل صحيح عند تغيير الصفحة
    useEffect(() => {
        dispatch(
            getBooksApi({
                page,
                pageSize
            })
        );
    }, [page, dispatch]); // إضافة dispatch لمصفوفة الاعتماديات كأفضل ممارسة

    // إذا كان هناك خطأ، يمكنك عرض رسالة خطأ (اختياري ولكنه أفضل تجربة مستخدم)
    if (error) {
        return <Error/>
    }

    return (
        <section className="books-page">
            <div className="page-header">
                <span className="section-subtitle">Books</span>
                <h1>Explore Our Book Collection</h1>
                <p>
                    Browse our carefully selected collection of books across different genres.
                    Find your next favorite read and discover inspiring stories from talented authors.
                </p>
            </div>

            <div className="books-grid">
                {ispayload
                    ? // 1. إذا كان يتم التحميل الآن، اعرض الـ Skeletons
                    [...Array(pageSize)].map((_, index) => (
                        <BookSkeleton key={index} />
                    ))
                    : // 2. إذا انتهى التحميل، اعرض الكتب الفعلية القادمة من الـ API
                    data?.map(book => (
                        <BookCard
                            key={book.id}
                            book={book}
                        />
                    ))
                }
            </div>

            {/* أزرار التنقل تبقى ظاهرة دائماً لتجربة مستخدم أفضل */}
            <div className="pagination">
                {[...Array(meta?.pagination?.pageCount || 0)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setPage(index + 1)}
                        className={page === index + 1 ? "active-page" : ""}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </section>
    );
}

export default BooksPage;