import React from "react"
import About from "./About"
import Banner from "./Banner"
import Contact from "./Contact"
import Feature from "./Feature"
import Footer from "./Footer"
import Header from "./Header"
import ProductList from "./ProductList"
import Socials from "./Social"

export default function AppContainer() {
  return (
    <>
      <Header />
      <div className="hero_area">
        <Banner />
        <Socials />
      </div>
      <ProductList />
      <About />
      <Feature />
      <Contact />
      <Footer />
    </>
  )
}
