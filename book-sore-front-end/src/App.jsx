import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import BooksPage from "./pages/BooksPage/BooksPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import AuthorsPage from "./pages/ِAuthorsPage/AuthorsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import BookDetailsPage from "./pages/BookDetailsPage/BookDetailsPage";
import HomePage from "./pages/HomePage/HomePage";
import CategoryBooksPage from "./pages/CategoryBooksPage/CategoryBooksPage";
import AuthorDetailsPage from "./pages/AuthorDetailsPage/AuthorDetailsPage";
import WishlistPage from "./pages/WishlistPage/WishlistPage";
import CartPage from "./pages/CartPage/CartPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import GoToTop from "./components/GoToTop/GoToTop";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import AOS from "aos";

function App() {

  useEffect(() => {

    AOS.init({

      duration: 1000,
      easing: "ease",
      once: true,
      offset: 120,

    })

  }, []);

  return (

    <BrowserRouter>

      <Toaster

        position="top-right"

        reverseOrder={false}

        toastOptions={{

          duration: 2000,

          style: {

            background: "#1f2937",

            color: "#fff",

            borderRadius: "12px",

            padding: "14px 18px",

            fontSize: "15px",

            boxShadow: "0 8px 20px rgba(0,0,0,.2)"

          },

          success: {

            iconTheme: {

              primary: "#22c55e",

              secondary: "#fff"

            }

          },

          error: {

            iconTheme: {

              primary: "#ef4444",

              secondary: "#fff"

            }

          }

        }}

      />

      <ScrollToTop />

      <Navbar />

      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/BooksPage" element={<BooksPage />} />
        <Route path="/CategoriesPage" element={<CategoriesPage />} />
        <Route path="/AuthorsPage" element={<AuthorsPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/BookDetails/:id" element={<BookDetailsPage />} />
        <Route path="/Categories/:documentId" element={<CategoryBooksPage />} />
        <Route path="/Authors/:id" element={<AuthorDetailsPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/Search" element={<SearchPage />} />

      </Routes>

      <GoToTop />

      <Footer />

    </BrowserRouter>

  );

}

export default App;