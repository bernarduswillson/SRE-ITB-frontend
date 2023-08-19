import SEO from '@src/components/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Jumbotron from '@src/contexts/Home/Jumbotron'
import Description from '@src/contexts/Home/Description'
import Carousel from '@src/contexts/Home/Activity'
import Youtube from '@src/contexts/Home/Youtube'
import Footer from '@src/components/Navigation/Footer'

const Landing: React.FC = () => {
  return (
    <SEO title="SRE ITB">
      <Navbar />
      <Jumbotron />
      <Description />
      <Carousel />
      <Youtube />
      <Footer />
    </SEO>
  )
}

export default Landing
