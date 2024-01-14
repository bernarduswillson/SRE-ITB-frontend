import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Comingsoon from '@src/contexts/ComingSoon/ComingSoon'

const SummitPage = (): JSX.Element => {
  return (
    <SEO title="SRE ITB | Summit">
      <Navbar />
      <Comingsoon />
    </SEO>
  )
}

export default SummitPage
