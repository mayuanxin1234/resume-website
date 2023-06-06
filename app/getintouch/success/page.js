'use client'
import './page.css'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import profilephoto from '../../../public/profilephoto.jpg'
import Image from 'next/image'
import greencheck from '../../../public/greencheck.png'

export default function Getintouch() {
    return (
        <div>
            <Header/>
            <div className='main'>
                <div>
                <h1>Get In Touch</h1>
                <p className='getintouchdescription'>Send a general message or job opportunities you would like me 
                to be a part of and I will get back to you as soon as possible.</p>
                
                <div className='contact-form'>
                    <Image className = 'greenimage' src = {greencheck} alt = 'checkmark' width ={175} height ={200}/>
                 <p className='getintouchdescription'>Your message has been sent successfully! I will contact you within 3 working days.</p>
                    </div>
                </div>
            <div className='contactdetails'>
                <Image src = {profilephoto} alt = "profilephoto" width ={175} height ={225}/>
                <p>Name: Ma Yuanxin</p>
                <p>Email: <a href = 'mailto:mayuanxin@u.nus.edu'>mayuanxin@u.nus.edu</a></p>
                <a href = "https://drive.google.com/uc?export=download&id=1Lr8LW0R0hCYxSHGkCWZfDycvKArbJJk7">
                    <button class="button-getintouch" ><span>Download Resume </span></button>
                </a>
            </div>
            </div>
            <Footer/>
        </div>
    )
}