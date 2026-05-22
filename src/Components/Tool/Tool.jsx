import React from 'react'
import fea from './fea.module.css'
import { homeData } from '../../Api/Api'
const Tool= () => {
  return (
    <div className={fea.fea}>
      <div className={fea.container}>
          <h2>featuredTools</h2>
        <div className={fea.content}>
          
            {homeData.featuredTools.map((featuredTool) => (
              <div className={fea.toolsflex} key={featuredTool.slug}>
              <h3>{featuredTool.name}</h3>
              <h4>{featuredTool.slug}</h4>
              <p>{featuredTool.category}</p>
              <img src={featuredTool.image} alt="loading" />
              </div>
            ))}
          
        </div>
      </div>
    </div>
  )
}

export default Tool
