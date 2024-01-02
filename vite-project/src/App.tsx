import companyLogo from './assets/firmLogo.svg'
import headIllustration from './assets/header Illustration.svg'
import search from './assets/Search.svg'
import micsture from './assets/Micsture.svg'
import phone from './assets/Phone.svg'
import list from './assets/List.svg'
import help from './assets/Help.svg'
import report from './assets/Report.svg'
import customer from './assets/customer.svg'
import article1 from './assets/article1.svg'
import article2 from './assets/article2.svg'
import article3 from './assets/article3.svg'
import './App.module.css'
import Services from './Services'
import ArticleCard from './ArticleCard'
import Footer from './Footer'
import appearence from './App.module.css'
import GreetingText from './GreetingText'
import HealthCareProvider from './HealthCareProvider'
import MobileApps from './MobileApps'
import SliderCard from './SliderCard'
import Divider from './Divider'

function App() {

  const services=[
    {
      title: 'Search doctor',
      subtitle: 'Choose your doctor from thousands of specialist, general, and trusted hospitals',
      serviceLogo: search
    },
    {
      title: 'Online pharmacy',
      subtitle: 'Buy  your medicines with our mobile application with a simple delivery system',
      serviceLogo: micsture
    },
    {
      title: 'Consultation',
      subtitle: 'Free consultation with our trusted doctors and get the best recomendations',
      serviceLogo: phone
    },
    {
      title: 'Details info',
      subtitle: 'Free consultation with our trusted doctors and get the best recomendations',
      serviceLogo: list
    },
    {
      title: 'Emergency care',
      subtitle: 'You can get 24/7 urgent care for yourself or your children and your lovely family',
      serviceLogo: help
    },
    {
      title: 'Tracking',
      subtitle: 'Track and save your medical history and health data',
      serviceLogo: report
    }

  ]

  const articles=[
    {
      title: 'Disease detection, check up in the laboratory',
      subtitle: 'In this case, the role of the health laboratory is very important to do a disease detection...',
      image: article1
    },
    {
      title: 'Herbal medicines that are safe for consumption',
      subtitle: 'Herbal medicine is very widely used at this time because of its very good for your health...',
      image: article2
    },
    {
      title: 'Natural care for healthy facial skin',
      subtitle: 'A healthy lifestyle should start from now and also for your skin health. There are some...',
      image: article3
    },
  ]

  const footFunctions=[
    {
      chapterName: 'Company',
      elements: ['About', 'Testimontials', 'Find a doctor', 'Apps']
    },
    {
      chapterName: 'Region',
      elements: ['Indonesia', 'Singapore', 'HongKong', 'Canada']
    },
    {
      chapterName: 'Help',
      elements: ['Help center', 'Contact support', 'Instructions', 'How it works']
    }
  ]

  return (
    <>
      <header>
        <div className={appearence.headerRow}>
        <img src={companyLogo} alt="Hearth care"/>
          <div className={appearence.column}>
            <ul>
              
              <a href="">Home</a>
              <a href=''>Find a doctor</a>
              <a href=''>Apps</a>
              <a href=''>Testimonials</a>
              <a href=''>About us</a>
              
            </ul> 
            
          </div>
        </div>
        <div className={appearence.headerRow}>
            <GreetingText />
            <div className='Greeting image'>
                <img src={headIllustration} alt="Virtual healthcare for you"/>
            </div>
        </div>
      </header>
      <body>
        
        <div className={appearence.column}>

        <Services cards={services}/>
        
        <div className='HealthCare Provider'>
          <HealthCareProvider />
        </div>

        <div className='Mobile app'>
          <MobileApps />
        </div>

        <div className='Slider'>
            <SliderCard />

        </div>

        <div className={appearence.column}>
            <h1>Check out our latest article</h1>
            <Divider />
            <ArticleCard arrt={articles}/>
        </div>

      </div>
      </body>
      <footer>
        <Footer footFunctions={footFunctions}/>
      </footer>
    </>
  )
}

export default App
