
import { Fragment } from 'react'
import Hero from '../components/Hero.jsx'
import LatestCollection from '../components/LatestCollection.jsx'
import BestSellers from '../components/BestSellers.jsx'
import OurPolicy from '../components/OurPolicy.jsx'
import NewsletterBox from '../components/NewsletterBox.jsx'
const Home = () => {
  return (
    <Fragment>
      <Hero/>
      <LatestCollection/>
      <BestSellers/>
      <OurPolicy/>
      <NewsletterBox/>
    </Fragment>
  )
}

export default Home