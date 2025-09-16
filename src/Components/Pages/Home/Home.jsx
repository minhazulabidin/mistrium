import React from 'react'
import Banner from './Banner'
import TrustedClint from './TrustedClint'
import Collection from './Collection'
import Products from './Products'

const Home = () => {
  return (
    <div>
      <Banner />
      <TrustedClint />
      <Collection />
      <Products/>
    </div>
  )
}

export default Home