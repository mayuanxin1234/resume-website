'use client'
import './page.css'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import Image from 'next/image'
import mscncdesktop from '../../../public/mscncdesktop.png'
import mscncmobile from '../../../public/mscncmobile.png'

export default function Mscnc() {
    return(
        <div>
           <Header/>
           <div className='mainpage'>
            <div className='leftpage'>
                <a href = "https://mscnc.org/">
           <button class="button-viewwebsite" ><span>View Website </span></button>
           </a>
           <div className='responsibilities'>
            <h2>RESPONSIBILITIES</h2>
            <ul>
                <li>Javascript</li>
                <li>React/Redux</li>
                <li>SEO</li>
                <li>Browser Testing</li>
                <li>Mobile View</li>
                <li>Deployment of website</li>
            </ul>
           </div>
           </div>
           <div>
            <h1>M S CNC</h1>
            <p>Working with M S CNC over 2 years, from initial idea to <br/>
            now a company with leads coming from the website. </p>
            <div className='descriptiontext'>
            <p>I was the designer and front-end developer for the revamped M S CNC websie in 2021 and <br/>
            worked closely with the company. By end 2022, M S CNC has received many leads from their new website.</p>
            </div>
            <div className='mscncimage'>
            <Image src = {mscncdesktop} alt = 'mscncdesktop'
            width = {800} height = {450} className='mscncdesktop'/>
            <Image src = {mscncmobile} alt = 'mscncmobile'
            width = {250} height = {450} className='mscncmobile' />
            </div>
            <div>
                <p>The technologies used were ReactJS, CSS. HTML and Javascript.</p>
            </div>
            <div>
                <h2>Struggles Faced</h2>
                <p>The main difficulty faced by the company was to present their products in a clear and succint <br/>
                manner. Hence, I incorporated various design elements to highlight their products in every possible <br/>
                image as shown in the home landing page. 
                </p>
            </div>
           </div>
           </div>
           <Footer/>
        </div>

    )
}