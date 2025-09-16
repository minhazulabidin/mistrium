import React from 'react'
import Banner from './Banner'
import TrustedClint from './TrustedClint'
import Collection from './Collection'
import Products from './Products'
import Carousel from '../../Utilities/Carousel'

const Home = () => {
  return (
    <div>
      <Banner />
      <TrustedClint />
      <Collection />
      <Products/>
      <Carousel/>
    </div>
  )
}

export default Home