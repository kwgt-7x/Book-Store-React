import "./Navbar.css";
import { ThemeContext } from '../../context/ThemeContext'

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaBars,
    FaTimes,
    FaMoon,
    FaSun,
    FaSearch,
    FaHeart,
    FaShoppingCart
} from "react-icons/fa";

import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { links } from "../../data/links";

function Navbar() {

    const [openMenu, setOpenMenu] = useState(false);

    const { theme, toggleTheme } = useContext(ThemeContext)

    const navigate = useNavigate();

    const [quary, setquary] = useState("");

    const [wishlistCount, setWishlistCount] = useState(0);

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {

        const updateCounts = () => {

            const wishlist =

                JSON.parse(

                    localStorage.getItem("wishlist")

                ) || [];

            const cart =

                JSON.parse(

                    localStorage.getItem("cart")

                ) || [];

            setWishlistCount(

                wishlist.length

            );

            setCartCount(

                cart.length

            );

        };

        updateCounts();

        window.addEventListener(

            "wishlistUpdated",

            updateCounts

        );

        window.addEventListener(

            "cartUpdated",

            updateCounts

        );

        return () => {

            window.removeEventListener(

                "wishlistUpdated",

                updateCounts

            );

            window.removeEventListener(

                "cartUpdated",

                updateCounts

            );

        };

    }, []);

    useEffect(() => {

        const trimQuery = quary.trim();

        const timeout = setTimeout(() => {

            if (trimQuery) {

                navigate(`/Search?q=${trimQuery}`);

            }

        }, 500);

        return () => clearTimeout(timeout);

    }, [quary, navigate]);

    return (
        <>
            <header>

                {/* TOP BAR */}

                <div className="top-navbar">

                    <div className="social-icons">

                        <Link ><FaFacebookF /></Link>

                        <Link><FaInstagram /></Link>

                        <Link><FaTwitter /></Link>

                    </div>


                    <button className="theme-btn" onClick={toggleTheme}>
                        {theme === "light" ? <FaMoon /> : <FaSun />}
                    </button>


                    {
                        console.log(theme)
                    }

                </div>

                {/* BOTTOM */}

                <div className="bottom-navbar">

                    <div className="logo">

                        <span>B</span>ook

                    </div>

                    <div className="search-box">

                        <FaSearch />

                        <input
                            type="text"
                            placeholder="Search books..."
                            value={quary}
                            onChange={(e) => {

                                const value = e.target.value;

                                setquary(value);

                                if (value.trim() === "") {

                                    navigate("/");

                                }

                            }}
                        />

                    </div>

                    <div className="navbar-actions">

                        <Link
                            to="/wishlist"
                            className="nav-icon"
                        >

                            <div className="nav-icon">

                                <FaHeart />

                                {

                                    wishlistCount > 0 &&

                                    <span>

                                        {wishlistCount}

                                    </span>

                                }

                            </div>
                        </Link>

                        <Link
                            to="/cart"
                            className="nav-icon"
                        >

                            <div className="nav-icon">

                                <FaShoppingCart />

                                {

                                    cartCount > 0 &&

                                    <span>

                                        {cartCount}

                                    </span>

                                }

                            </div>

                        </Link>

                    </div>

                    <nav className="desktop-links">

                        {
                            links.map(link => (
                                <Link to={link.url} key={link.id}>{link.name}</Link>
                            ))
                        }

                    </nav>

                    <button
                        className="menu-btn"
                        onClick={() => setOpenMenu(true)}
                    >
                        <FaBars />
                    </button>

                </div>

            </header>

            {/* Overlay */}

            <div
                className={`overlay ${openMenu ? "show-overlay" : ""}`}
                onClick={() => setOpenMenu(false)}
            />

            {/* Mobile Menu */}

            <aside className={`mobile-menu ${openMenu ? "show-menu" : ""}`}>

                <div className="mobile-header">

                    <div className="logo">
                        <span>B</span>ook
                    </div>

                    <button
                        className="close-btn"
                        onClick={() => setOpenMenu(false)}
                    >
                        <FaTimes />
                    </button>

                </div>

                <nav className="mobile-links">

                    {
                        links.map(link => (
                            <Link to={link.url} key={link.id}>{link.name}</Link>
                        ))
                    }

                </nav>

                <div className="mobile-actions">

                    <Link to="/wishlist">

                        <FaHeart />

                        Wishlist

                    </Link>

                    <Link to="/cart">

                        <FaShoppingCart />

                        Cart

                    </Link>

                </div>

                <button
                    className="mobile-theme-btn"
                    onClick={toggleTheme}
                >

                    {

                        theme === "light"

                            ?

                            <>

                                <FaMoon />

                                Dark Mode

                            </>

                            :

                            <>

                                <FaSun />

                                Light Mode

                            </>

                    }

                </button>

                <div className="mobile-social">

                    <a href="#"><FaFacebookF /></a>

                    <a href="#"><FaInstagram /></a>

                    <a href="#"><FaTwitter /></a>

                </div>

            </aside>

        </>
    );

}

export default Navbar;