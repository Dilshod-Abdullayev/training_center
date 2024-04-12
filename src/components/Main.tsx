import React from 'react'
import Header from './header/Header'
import VideoSection from './Videos/VideoSection'
import Statistics from './statistics/Statistics'
import InfoSection from './Info/InfoSection'
import InfoStudent from './Info/InfoStudent'
import SwiperProjects from './Info/SwiperProjects'
import Faq from './Info/Faq'

export default function Main() {
  return (
    <div>
      <Header />
      <Statistics />
      <VideoSection />
      <InfoSection />
      <InfoStudent />
      <SwiperProjects />
      <Faq />
    </div>
  )
}
