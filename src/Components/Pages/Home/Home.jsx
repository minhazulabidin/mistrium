import Banner from './Banner'
import TrustedClint from './TrustedClint'
import Collection from './Collection'
import Products from './Products'
import Carousel from '../../Utilities/Carousel'
import News from './News'
import Footer from '../../Utilities/Footer'


const Home = () => {
  return (
    <div>
      <Banner />
      <TrustedClint />
      <Collection />
      <Products />
      <Carousel />
      <News />
      <Footer/>
    </div>
  )
}

export default Home