import './BookSkeleton.css'

function BookSkeleton() {

    return (

        <div className="book-card skeleton-card">

            <div className="skeleton skeleton-image"></div>

            <div className="book-content">

                <div className="skeleton skeleton-title"></div>

                <div className="skeleton skeleton-price"></div>

                <div className="skeleton skeleton-btn"></div>

            </div>

        </div>

    );

}

export default BookSkeleton;