import "./BookDetailsSkeleton.css";

function BookDetailsSkeleton() {

    return (

        <section className="book-details-page">

            <div className="back-skeleton skeleton"></div>

            <div className="book-details-wrapper">

                <div className="book-details-image">

                    <div className="image-skeleton skeleton"></div>

                </div>

                <div className="book-details-content">

                    <div className="book-details-categories">

                        <span className="category-skeleton skeleton"></span>

                        <span className="category-skeleton skeleton"></span>

                    </div>

                    <div className="title-skeleton skeleton"></div>

                    <div className="author-skeleton skeleton"></div>

                    <div className="price-skeleton skeleton"></div>

                    <div className="text-skeleton skeleton"></div>
                    <div className="text-skeleton skeleton"></div>
                    <div className="text-skeleton short skeleton"></div>

                    <div className="buttons-skeleton">

                        <div className="cart-btn-skeleton skeleton"></div>

                        <div className="heart-btn-skeleton skeleton"></div>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default BookDetailsSkeleton;