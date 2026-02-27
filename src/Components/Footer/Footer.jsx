import React from 'react'
import footer from './footer.module.css'
// import Image from 'next/image'

import {AiFillFacebook,AiFillCopyrightCircle,AiFillLinkedin,AiFillInstagram,AiFillTwitterCircle}from'react-icons/ai'

const Footer = () => {
  return (
    <div className={footer.footer}>
        <div className={footer.container}>
            <div className={footer.content}>
                <div className={footer.footer1}>
                  {/* <div className={footer.footer2}>
                  <div className={footer.over}>
                    <h3>Start your career with us</h3>
                    <p>Join over 500+ people already with a successful career job</p>
                    </div>
                    <div>
                        <button>Get Started </button>
                    </div>
                  </div> */}
                </div>
                <div className={footer.footer3}>
                    <div className={footer.footer4}>
                        <div className={footer.col}>
                            <h3>Deeper</h3>
                            {/* <img src={logo} alt="" /> */}
                            <p>A new way to make the payments easy, reliable and secure.</p>
                        </div>
                        <div className={footer.col1}>
                            <li><a href=""><strong>Hire a developer</strong></a></li>
                            <li><a href="">Apply for job</a></li>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">About Us </a></li>
                            <li><a href="">Vision Proposition</a></li>
                        </div>
                        <div className={footer.col2}>
                            <li><a href=""><strong>Socials</strong></a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Reviews </a></li>
                            <li><a href="">Vision Proposition</a></li>
                        </div>
                        <div className={footer.col3}>
                            <li><a href=""><strong>Job</strong></a></li>
                            <li><a href="">Job Categories</a></li>
                            <li><a href="">Vision Proposition</a></li>
                        </div>
                    </div>
                </div>
                <div className={footer.footer5}>
                    <div className={footer.copy}>
                        <AiFillCopyrightCircle className='iconb'  size={25}/>
                        <h3>Copyright Ⓒ 2025 VatoBank. All Rights Reserved.</h3>
                    </div>
                    <div className={footer.icons}>
                        <a href="" target='_blank'>

                        <AiFillFacebook className={footer.iconb}/>
                        </a>
                        <a href="" target='_blank'>

                        <AiFillLinkedin className={footer.iconb}/>
                        </a>
                        <a href="" target='_blank'>

                        <AiFillInstagram className={footer.iconb}/>
                        </a>
                        <a href="" target='_blank'>

                        <AiFillTwitterCircle className={footer.iconb}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer