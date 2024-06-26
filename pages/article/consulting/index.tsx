import SEO from '@src/components/SEO/SEO'
import Navbar from '@src/components/Navigation/Navbar'
import Details from '@src/contexts/Article/Details'
import Footer from '@src/components/Navigation/Footer'

import Consulting from '@src/assets/Images/Article/Booklet/Consulting.jpg'
import AufarSatria from '@src/assets/Images/Article/Profiles/Consulting/AufarSatria.jpg'
import JesslynJie from '@src/assets/Images/Article/Profiles/Consulting/JesslynJie.jpg'

const ConsultingPage = (): JSX.Element => {
  const contents = [
    {
      image: AufarSatria,
      source: 'Aufar Satria',
      position: 'Ex-Consultant at BCG',
      paragraph: 'Aufar Satria earned a mechanical engineering degree from Institut Teknologi Bandung, a master of business administration from University of Cambridge, and is currently pursuing a master of public administration at Harvard University. He was very into engineering and got practical experience as an operations maintenance technician at the CCPP power plant. As a person who enjoys trying new things, he believes that practical experience, such as day-to-day maintenance, lacks of innovation and boring. He thought the job was less challenging, especially for someone who enjoys problem-solving. After completing an internship at Gojek, Aufar developed an interest in consulting, particularly on climate solutions. \n\nAufar believed that if he became a consultant, he could collaborate on any topic. Aufar was assigned to a team as a consultant to help corporations handle their challenges. Starting with profit, technology, and firms looking to reach new markets. Becoming a mechanical engineering graduate and working as a consultant was not in pointless. The fundamentals of engineering may be applied anywhere, specifically when it comes to providing data and fact-based solutions. Engineers think logically and structurally, while also possessing strong learning ability. Consulting companies will supply libraries, resources, and expertise to assist consultants with their work. Furthermore, each consultant will be required to attend meetings, create slides, use Excel, and perform other tasks on a daily basis. \n\nAn open recruitment phase for fresh graduates to become consultants lasts around one to two months. It varies on each company\'s timeline. Usually consists of two or three steps. The first stage will be a CV screening or written test. When reviewing CVs, selectors look for analytical skills, organizational skills, and cleanliness. Analytical capabilities are commonly observed in GPA, project analysis, and academic skills such as software proficiency. Everything will be thoroughly assessed with the goal of determining how applicants might collaborate in the future. While organizational skills review is designed to assess applicants\' ability to manage conflict. Cleanliness refers to how applicants branding themselves, CV\'s neatness, and the grammar they choose. \n\nThe second stage consists of an interview. Interviewers can be from project leader\'s team or others, depending on their availability. During the case interview, you will be given a prompt. Questions will be broad and open-ended, to generate the answer of the prompt. This case interview format is really specific. Do more mock interviews to improve your ability to do case interviews. \n\nAufar Satria wanted to expand his knowledge and thought consulting was a good fit. If you want to work as a consultant, you must first determine your own life priorities. Understand your own priorities and values before becoming a consultant. Decide if you are willing to accept the sacrifices. Working as a consultant can be stressful, particularly when dealing with demanding clients. But consulting is a place where you can learn something new every day!'
    },
    {
      image: JesslynJie,
      source: 'Jesslyn Jie',
      position: 'Ex-Environmental Consultant at Jaccobs Group Indonesia',
      paragraph: 'Jesslyn Jie was a consultant specialized in environmental geology at Jacobs Group Indonesia. Jesslyn graduated from the Bandung Institute of Technology with a background in Geological Engineering. Her career began with an internship at the same company while she was still in college, and she chose to continue her career in the same field. From her perspective, the position filled both the sense of problem-solving and engineering that she is passionate about. She is willing to share her experiences while being an environmental consultant at Jacobs. \n\nIn general, environmental consultants assess sites owned by clients, especially in checking land contamination boundaries and proposing remediation plans for those sites. Environmental consultants also serve as intermediaries between clients and the Ministry of Environment and Forestry (KLHK) in terms of reporting remediation proposals by clients. Other than geological engineering, the work in this field also requires knowledge relevant to chemical, civil, and environmental engineering to ensure the remediation process, infrastructure needed, and the HSE (Health, Safety, and Environment) aspects. \n\nThe standard to apply as an intern varies between companies. At Jacobs, general knowledge related to the job is valued. After acceptance, the company will provide support in training for relevant technical skills and obtaining certifications. Working at Jacobs also fosters a culture of work-life balance. In Jesslyn\'s case, the work commonly depends on client’s demand, affording her the option to work from either the office or home while also providing opportunities to travel to various locations depending on client sites. The salary received is fair for living expenses, and there is no overtime work. \n\nJesslyn has set her dream company since her second year of college. She recommends narrowing down the search to the following steps: the desired sector, the potential companies, and the top-ranked companies. Sorting for potential companies can be done by reading information from platforms such as LinkedIn or Glassdoor. \n\n"Be strategic and allocate your energy in the right aspects," Jesslyn said when asked what steps students can take now to stand out as job applicants later. It is suggested to gain the desired output for the positions you are targeting while developing yourself in college, as it will help effectively allocate the efforts in securing the position. The recruitment process varies for each company. At Jacobs, this process consists of three stages: document screening, user interview, and HR interview. \n\nThe CV is the first tool in document screening to showcase our capabilities. Highlight your academic responsibilities by maintaining good records or collaborating on papers. It\'s also recommended to participate in activities such as conferences involving your dream company to learn more about it and expand your network. Once you pass the document screening stage, the interview is the time to showcase your personality and work ethic. Relevant soft skills such as communication will be evaluated during this step. The interviewer will assess interest based on how well you can follow the conversation flow, so it\'s important to understand technical terms and topics in the field you\'re entering. \n\nJacobs\' recruitment process timeline does not formally follow a specific timeframe, so it\'s important to be updated about information regarding open positions in the company. Finally, Jesslyn encourages people to pursue careers in green jobs, as to sustain economic growth, we need to first sustain the environment.'
    }
  ]

  const section = {
    header: Consulting,
    title: 'Consulting'
  }

  return (
    <SEO title="SRE ITB | Consulting">
      <Navbar />
      <Details section={section} contents={contents} />
      <Footer />
    </SEO>
  )
}

export default ConsultingPage
