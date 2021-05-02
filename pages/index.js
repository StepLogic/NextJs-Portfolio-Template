import Head from 'next/head'

import HeaderSection from "../components/sections/HeaderSection";
import AboutSection from "../components/sections/AboutSection";
import ServiceSection from "../components/sections/ServiceSection";
import CallbackSection from "../components/sections/CallbackSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import FooterSection from "../components/sections/FooterSection";
export default function Home() {
  return (
   <>
       <seo/>
       <HeaderSection/>
       <AboutSection/>
       <ServiceSection/>
       <CallbackSection/>
       <PortfolioSection/>
       <FooterSection/>
   </>
  )
}
