import React from 'react'
import './HomePage.css'
import Hero from '../../components/Hero/Hero'
import AuthorsSection from '../../components/AuthorsSection/AuthorsSection'
import BooksSection from '../../components/BooksSection/BooksSection'
import CategoriesSection from '../../components/CategoriesSection/CategoriesSection'
import NewsletterSection from '../../components/NewsletterSection/NewsletterSection'

function HomePage() {
  return (
    <>
      <Hero/>
      <CategoriesSection/>
      <BooksSection/>
      <AuthorsSection/>
      <NewsletterSection/>
    </>
  )
}

export default HomePage