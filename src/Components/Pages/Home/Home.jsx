import Banner from './Banner'
import TrustedClint from './TrustedClint'
import Collection from './Collection'
import Products from './Products'
import Carousel from '../../Utilities/Carousel'
import News from './News'

const Home = () => {
  return (
    <div>
      <Banner />
      <TrustedClint />
      <Collection />
      <Products/>
      <Carousel/>
      <News/>
    </div>
  )
}

export default Home