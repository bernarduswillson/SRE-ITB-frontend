import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Details from '@src/contexts/Article/Details'
import Footer from '@src/components/Navigation/Footer'

import Founder from '@src/assets/Images/Article/Booklet/Founder.jpg'
import NaufalRiyandi from '@src/assets/Images/Article/Profiles/Founder/NaufalRiyandi.jpeg'

const FounderPage = (): JSX.Element => {
  const contents = [
    {
      image: NaufalRiyandi,
      source: 'Naufal Riyandi',
      position: 'Founder of PT Bintang Terbarukan Indonesia',
      paragraph: 'Naufal Riyandi is a graduate of Bachelor\'s degree in Physics from Unpad and pursued his Master\'s degree in Mechanical Engineering at ITB. He is a founder at PT Bintang Terbarukan Indonesia (BTI) and also serves as the PhD Student Researcher at Trinity College Dublin. In this article, we will take a look at the process of establishing a company or startup in the renewable energy sector and how Naufal manages his time. \n\nAlongside his master’s degree, Naufal participated in the pitching competition at SBM ITB but failed to proceed to the next stage. Not long after that failure, Naufal and his friend met the other founders that already competed in the other pitching competition and got several funds from New Energy Nexus Indonesia. Then, they founded PT BTI, an engineering, procurement, and Construction (EPC) company for renewable energy projects focusing on solar PV. But, nowadays, BTI is exploring another renewable energy sources and trying to handle consultation projects. The establishment of this company is based on their idealism to bring about change in Indonesia because, according to him, the potential for renewable energy in Indonesia is huge but underutilized. Some things to consider in establishing this besides the company model are vision-mission and funding. According to Naufal, alignment of vision-mission among the founders is crucial as it will determine the direction of the company in the future. In addition, funding is also necessary for establishing legal entities (PT), operational capital, and so on. In his daily life as a founder, Naufal no longer deals much with technical matters but rather monitors progress and helps in making decisions in his company. That\'s one reason why Naufal also serves as PhD Student Researcher in developing fish-friendly hydropower at Trinity College Dublin, besides strengthening his knowledge, experiences, and economic needs. \n\nAccording to Naufal, the skills needed to become a founder include domain knowledge of the company being built, soft skills, managerial skills, leadership, and finance. Preparations that can be made from the student phase include gaining experience in academics, organizations, internships, and competitions. In addition, certifications such as water turbine certification, rooftop solar PV installation, energy audits, etc., are also needed for solar PV and hydropower, and other energy sectors. Some of these certifications can be prepared during college to suit the desired needs. \n\nAs a founder, Naufal\'s view on recruitment in his company is that he looks more at the applicant’s experience and willingness to learn. GPA is generally used for a standard threshold in screening the applicants. Especially for higher positions, experience is prioritized. At BTI itself, the principle is to grow together with the staff, participating with each other. In essence, everyone can build a company or startup, even from the student phase, but there are certainly various long and complex processes as explained above.'
    }
  ]

  const section = {
    header: Founder,
    title: 'Founder'
  }

  return (
    <SEO title="SRE ITB | Founder">
      <Navbar />
      <Details section={section} contents={contents} />
      <Footer />
    </SEO>
  )
}

export default FounderPage
