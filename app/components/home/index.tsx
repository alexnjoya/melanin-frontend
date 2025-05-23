import React from 'react'
import HeroSection from "./component/Herosection"
import StatsSection from './component/StatsSection'
import BusinessServices from './component/businessService'
import Projects from './component/projects'
import ClientReviews from './component/reviewSection'
import Team from "../common/team"
import Soludtion from "./component/solution"
import TipsAdvice from "./component/news"
import Partners from '../common/partners'
import Contacts  from "./component/contact"
import Downloads  from "./component/download"


const Index: React.FC = () => {

  

  return ( 
   <section className="relative text-black bg-white overflow-hidden">
   <div className="px-4 sm:px-6 lg:px-8 py-12">
      <HeroSection />
      
      <StatsSection />
      <BusinessServices />
      <Projects />
      <ClientReviews />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Team />
      <Soludtion  />
      <TipsAdvice />
      <Contacts />  
      <Downloads />
      <Partners />
      </div>
      </div>
    
  </section>
  )
}

export default Index