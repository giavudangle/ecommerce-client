import React from 'react';
import ProductList from '../../layouts/ProductList';
import WithLayout from '../../layouts/WithLayout'
import Feature from '../../layouts/Feature';
import Header from '../../layouts/Header';
import Banner from '../../layouts/Banner';
import Footer from '../../layouts/Footer';
import Loading from '../../components/Loading';



const Home = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Feature/>
        <Footer/>
    </div>

  )
}

export default Home;