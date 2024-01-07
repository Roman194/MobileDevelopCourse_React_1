import companyLogo from './assets/firmLogo.svg'
import headIllustration from './assets/header Illustration.svg'
import search from './assets/Search.svg'
import micsture from './assets/Micsture.svg'
import phone from './assets/Phone.svg'
import list from './assets/List.svg'
import help from './assets/Help.svg'
import report from './assets/Report.svg'
import article1 from './assets/article1.svg'
import article2 from './assets/article2.svg'
import article3 from './assets/article3.svg'
import dots from './assets/dots.svg'
import './App.module.css'
import Services from './Components/MainComponents/ServicesComponents/Services'
import ArticleCard from './Components/MainComponents/ArticleComponents/ArticleCard'
import Footer from './Components/MainComponents/FooterComponents/Footer'
import appearance from './App.module.css'
import HealthCareProvider from './Components/MainComponents/HealthCareProviderComponents/HealthCareProvider'
import MobileApps from './Components/MainComponents/MobileAppsComponents/MobileApps'
import SliderCard from './Components/MainComponents/SliderComponents/SliderCard'
import Divider from './Components/ViewComponents/Divider'
import Button from './Components/ViewComponents/Button'
import PrimaryOnlyBorderButton from './Components/ViewComponents/PrimaryOnlyBorderButton'

function App() {
  const services = [
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
    },
  ]

  const articles = [
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

  const footFunctions = [
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
    },
  ]

  return (
    <>
      <div className={appearance.topContainer}>
        <header className={appearance.menu}>
          <img src={companyLogo} alt="Health care" width="183" />
          <nav className={appearance.column}>
            <ul>
              <li><a href="#" className={appearance.currentSection}>Home</a></li>
              <li><a href="#">Find a doctor</a></li>
              <li><a href="#">Apps</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">About us</a></li>
            </ul> 
          </nav>
        </header>
        <div className={appearance.hero}>
          <div className={appearance.heroContent}>
            <img src={dots} className={appearance.dots} />
            <div className={appearance.greetingTextContainer}>
                <h1>Virtual healthcare for you</h1>
                <span class={appearance.greetingText}>Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone</span>
            </div>
            <Button primary>Consult today</Button>
          </div>

          <img src={headIllustration} alt="Virtual healthcare for you" className={appearance.greetingImage} />
        </div>
      </div>
      <main className={appearance.column}>
        <Services cards={services}/>
        
        <HealthCareProvider />
        <MobileApps />
        <SliderCard />

        <div className={appearance.artColumn}>
          <h1>Check out our latest article</h1>
          <Divider />
          <ArticleCard arrt={articles}/>
          <PrimaryOnlyBorderButton text={"View all"}/>
        </div>
      </main>
      <Footer footFunctions={footFunctions}/>
    </>
  )
}

export default App
