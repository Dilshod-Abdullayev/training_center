import React from 'react'
import Header from './header/Header'
import VideoSection from './Videos/VideoSection'
import Statistics from './statistics/Statistics'

export default function Main() {
  return (
    <div>
      <Header />
      <Statistics />
      <VideoSection />
    </div>
  )
}
