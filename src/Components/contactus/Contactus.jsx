import React, { useState } from 'react'
import con from './cons.module.css'
import { db } from '../../config/firebase'
import { collection ,addDoc } from 'firebase/firestore'
import emailjs from "@emailjs/browser";
const Contactus = () => {

    const [email, setemail] = useState('')
    const [name, setname] = useState('')
    const [message, setmessage] = useState('')
    
    const sendMasssges = collection(db , 'messages')
    const send = async() => {
        try{
            await addDoc (sendMasssges ,{
                name:name,
                email:email,
                message:message

            
            })
        }catch(err){
            console.error(err)
        }
        try{
         await emailjs.send(
    'service_16ak0qi',
    'template_6kb865e',
    {
        name: name,
        email: email,
        message: message
    },
    'RgtRRDYA9srQ_lplx'
)
        }catch(err){
            console.error(err)
        }
    }
  return (
    <div className={con.con}>
      <div className={con.container}>
         <div className={con.flex}>
                <h2>Contact Us</h2>
                <p>contact use on any assistant u need </p>
            </div>
        <div className={con.content}>
          
            <div className={con.flexii}>
                <form action="#">
                    <div className={con.name}>
                        <label htmlFor="">Your Name</label>
                        <input type="text" onChange={(e) => setname(e.target.value)} placeholder='Enter Your Name' required />
                    </div>
                    <div className={con.name}>
                        <label htmlFor="">Email</label>
                        <input type="text" onChange={(e) => setemail(e.target.value)} placeholder='Enter Your Email' required/>
                    </div>
                    <div className={con.mass}>
                        <label htmlFor="">Your Name</label>
                        <textarea name="" id="" onChange={(e) => setmessage(e.target.value)} placeholder='Message' required></textarea>
                    </div>
                    <button type="button" onClick={send}>Send Message</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contactus
