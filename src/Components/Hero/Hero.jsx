import React from 'react'
import hero from './hero.module.css'
import { homeData } from '../../Api/Api'
const Hero = () => {
  return (
    <div className={hero.hero}>
        <div className={hero.container}>
            <div className={hero.content}>
                <h2>{homeData.hero.title}</h2>
                <h3>{homeData.hero.subtitle}</h3>
                <div className={hero.btnflex}>
                    <button>{homeData.hero.primaryBtn}</button>
                    <button>{homeData.hero.secondaryBtn}</button>
                </div>
               

            </div>
            <div className={hero.contentb}>
              <h3>Stats</h3>
               <div className={hero.stat}>
                  <h3>totalTools: {homeData.stats.totalTools}</h3>
                  <h4>categories: {homeData.stats.categories}</h4>
                  <h4>monthlyVisitors: {homeData.stats.monthlyVisitors}</h4>
                  <h4>activeUsers{homeData.stats.activeUsers}</h4>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Hero 