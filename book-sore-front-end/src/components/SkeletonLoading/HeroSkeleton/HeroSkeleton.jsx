import "./HeroSkeleton.css";

function HeroSkeleton() {

    return (

        <section className="hero">

            <div className="hero-content">

                <div className="hero-left">

                    <div className="skeleton skeleton-subtitle"></div>

                    <div className="skeleton skeleton-title"></div>

                    <div className="skeleton skeleton-title short"></div>

                    <div className="skeleton skeleton-text"></div>

                    <div className="skeleton skeleton-text"></div>

                    <div className="skeleton skeleton-text small"></div>

                    <div className="hero-buttons">

                        <div className="skeleton skeleton-button"></div>

                        <div className="skeleton skeleton-button"></div>

                    </div>

                </div>

                <div className="hero-right">

                    <div className="skeleton skeleton-hero-image"></div>

                </div>

            </div>

        </section>

    );

}

export default HeroSkeleton;