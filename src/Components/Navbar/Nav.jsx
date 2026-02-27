import React from 'react'
import nav from './Nav.module.css'
import { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoIosMenu, IoMdClose } from 'react-icons/io'
import { Link, Links } from 'react-router-dom'

const Nav = () => {
    const [close, setclose] = useState(false)
    const [search, setsearch] = useState ('')

    const handbug = () =>{
        setclose(!close)
    }
  return (
    <div className={nav.nav}>
        <div className={nav.container}>
            <div className={nav.content}>
                <div className={nav.logo}>
                    <h3>Deeper Tools</h3>
                </div>
                <div className={nav.menu}>
                    <ul   className={`${nav.menub} ${close ? nav.active : ''}`} >
                        <li><Link to="/ ">Home</Link></li>
                        <li><Link to="/tool ">TOOlS</Link></li>
                        <li><Link to="/about ">ABOUT</Link></li>
                        <li><Link to="/contact ">CONTACT</Link></li>
                        <li className={nav.tap}><CiSearch /> <input type="search"  name="" onChange={(e) => setsearch(e.target.value)} id="" /> </li>
                    </ul>
                    <div className={nav.bugger} onClick={handbug}>
                        {!close ? <IoIosMenu className={nav.iconI} /> : <IoMdClose className={nav.iconI}/>}
                        
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Nav
