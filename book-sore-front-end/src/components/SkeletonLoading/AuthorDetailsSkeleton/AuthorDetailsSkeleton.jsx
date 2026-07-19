import "./AuthorDetailsSkeleton.css";

function AuthorDetailsSkeleton() {

    return (

        <section className="author-details">

            <div className="author-info">

                <div className="skeleton skeleton-author-details-image"></div>

                <div className="author-content">

                    <div className="skeleton skeleton-author-field"></div>

                    <div className="skeleton skeleton-author-name"></div>

                    <div className="skeleton skeleton-author-line"></div>

                    <div className="skeleton skeleton-author-line"></div>

                    <div className="skeleton skeleton-author-line short"></div>

                    <div className="author-social">

                        <div className="skeleton skeleton-social"></div>

                        <div className="skeleton skeleton-social"></div>

                        <div className="skeleton skeleton-social"></div>

                    </div>

                </div>

            </div>

            <div className="author-books">

                <div className="page-header">

                    <div className="skeleton skeleton-section-subtitle"></div>

                    <div className="skeleton skeleton-section-title"></div>

                    <div className="skeleton skeleton-section-text"></div>

                </div>

                <div className="books-grid">

                    {

                        [...Array(4)].map((_, index) => (

                            <div

                                key={index}

                                className="book-card"

                            >

                                <div className="skeleton skeleton-image"></div>

                                <div className="book-content">

                                    <div className="skeleton skeleton-title"></div>

                                    <div className="skeleton skeleton-price"></div>

                                    <div className="skeleton skeleton-btn"></div>

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default AuthorDetailsSkeleton;