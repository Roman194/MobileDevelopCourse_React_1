import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import companyLogo from './assets/firmLogo.svg'
import headIllustration from './assets/header Illustration.svg'
import search from './assets/Search.svg'
import micsture from './assets/Micsture.svg'
import phone from './assets/Phone.svg'
import list from './assets/List.svg'
import help from './assets/Help.svg'
import report from './assets/Report.svg'
import providerIllustration from './assets/healthCareProviderIllustration.svg'
import appIllustration from './assets/mobileAppIllustration.svg'
import customer from './assets/customer.svg'
import article1 from './assets/article1.svg'
import article2 from './assets/article2.svg'
import article3 from './assets/article3.svg'
import './App.css'
import ServiceCard from './ServiceCard'
import ArticleCard from './ArticleCard'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

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
        <div>
          <nav className='page menu'>
            <ul>
              <img src={companyLogo} alt="Hearth care"/>
              <a href="">Home</a>
              <a href=''>Find a doctor</a>
              <a href=''>Apps</a>
              <a href=''>Testimonials</a>
              <a href=''>About us</a>
            </ul> 
            
          </nav>
        </div>
        <div className='Greeting text'>
            <h1>Virtual healthcare for you</h1>
            <h2>Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone</h2>
            <button className='Primary button'>Consult today</button>
            <div className='Greeting image'>
                <img src={headIllustration} alt="Virtual healthcare for you"/>
            </div>
        </div>
      </header>
      <body>

        <div className = 'Services'>
          <h1>Our services</h1>
          <h2>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</h2>
          <ServiceCard cards={services}/>
          <button className='BorderButton'>Learn more</button>
        </div>

        <div className='HealthCare Provider'>
          <img src={providerIllustration} alt='Leading healthcare providers'/>
          <h1>Leading healthcare providers</h1>
          <h2>We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver</h2>
          
          <button className='BorderButton'>Learn more</button> {/* reuse!  */}
        </div>

        <div className='Mobile app'>
          <h1>Download our mobile apps</h1>
          <h2>Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</h2>
          
          <button className='BorderButton'>Download  🠗</button>

          <img src={appIllustration} alt='Download our mobile apps'/>
        </div>

        <div className='Slider'>
            <h1>What our customer are saying</h1>
            <img src={customer} alt='Customer logo'/>
            <h2>Edward Newgate</h2>
            <h3>Founder Circle</h3>
            <h2>“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”</h2>
            <button className='Arrow'>➜</button>
            <button className='Arrow'>➜</button>

        </div>

        <div className='Articles'>
            <h1>Check out our latest article</h1>
            <ArticleCard arrt={articles}/>
        </div>


      </body>
      <footer>
        <Footer footFunctions={footFunctions}/>
      </footer>
    </>
  )
}

export default App
