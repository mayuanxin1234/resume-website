'use client'
import './page.css'
import Header from '../../components/header'
import Footer from '../../components/footer'

export default function Getintouch() {
    return (
        <div>
            <Header/>
            <div className='main'>
                <h1>Get In Touch</h1>
                <p className='getintouchdescription'>Send a general message or details you would like me 
                to be a part of and I will get back to you as soon as possible.</p>
            <div className='contactdetails'>
                <p>Name: Ma Yuanxin</p>
                <p>Email: <a href = 'mailto:mayuanxin@u.nus.edu'>mayuanxin@u.nus.edu</a></p>
            </div>
            </div>
            <Footer/>
        </div>
    )
}