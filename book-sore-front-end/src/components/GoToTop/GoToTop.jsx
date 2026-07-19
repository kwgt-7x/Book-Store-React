import "./GoToTop.css";

import { useEffect, useState } from "react";

import { FaArrowUp } from "react-icons/fa";

function GoToTop() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            setShowButton(window.scrollY > 400);

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    const scrollToTop = () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    };

    return (

        <button

            className={`go-top ${showButton ? "show-top" : ""}`}

            onClick={scrollToTop}

        >

            <FaArrowUp />

        </button>

    );

}

export default GoToTop;