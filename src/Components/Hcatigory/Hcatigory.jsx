import React from 'react'
import cati from './cati.module.css'
import { homeData } from '../../Api/Api'
const Hcatigory = () => {
  return (
    <div className={cati.cati}>
      <div className={cati.container}>
        <h3>Catigory</h3>
        <div className={cati.content}>
            {homeData.categories.map((category)=>(
                <div className={cati.flexb} key={category.id}>
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                    <h4>{category.icon}</h4>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Hcatigory
