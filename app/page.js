'use client'
import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'
import { motion } from 'framer-motion';
import './page.css'
import frontend from '../public/frontenddevelopment.jpg'
import wordpress from '../public/WordPress.png'
import next from '../public/next.svg'
import mscnc from '../public/mscnc.jpg'
import mscncdesktop from '../public/mscncdesktop.png'
import mscncmobile from '../public/mscncmobile.png'

export default function Home() {
  return (
    <div>
      <Header/>
      <div className='description'>
        <h1 className='descriptionheading'>Computer Science student at <br/>
        National University of Singapore</h1>
        <p className = 'descriptionparagraph'>Hi. I&apos;m Yuanxin, a Year 3 computer science student with a passion in <br/>
        Front-End Development and Artifical Intelligence.</p>
      </div>
      <div className ='description2'>
        <div>
        <Image src = {frontend} alt = 'frontend' 
        className='frontendimage' width = {280} height = {280}/>
        <h3>Front-end development</h3>
        <p>Responsive websites built for an <br/>
        optimal user experience that <br/>
        achieves your business goals.</p>
        </div>
        
        <div>
        <Image src = {wordpress} alt = 'wordpress' 
        className='wordpress' width = {280} height = {280}/>
        <h3>WordPress websites</h3>
        <p>Manage your website using the <br/>
        web&apos;s most popular content <br/>
        management system.</p>
        </div>
        <div>
        <Image src = {next} alt = 'nextjs' 
        className='nextjs' width = {280} height = {280}/>
        <h3>Next.js websites</h3>
        <p>Manage your website using the <br/>
        latest web development <br/>
        framework. <br/></p>
        </div>
        </div>
        <hr/>
        <div className='experience'>
          <h1>Experience</h1>
          <div className='mscnc'>
            <div>
            <motion.div
              whileHover={{
                scale: 1.04,
                transition: { duration: 1 },
              }}
            >
          <a href = '/resume-website/portfolio/mscnc'>
          <Image src = {mscnc} alt = 'mscnclogo'
          width ={200} height = {200} />
          
          <h3>
          {'>'} M S CNC Manufacture Pte. Ltd.
          </h3>
          </a>
          </motion.div>
          <p>
            I was the designer and front-end developer
            for the M S CNC website in 2021. I made a major
            overhaul of their website using technologies such as react.
          </p>
          </div>
          <div>
          <a href = '/resume-website/portfolio/mscnc'>
            <Image src = {mscncdesktop} alt = 'mscncdesktop'
            width = {800} height = {450} className='mscncdesktop'/>
            </a>
          </div>
          <div>
          <a href = '/resume-website/portfolio/mscnc'>
          <Image src = {mscncmobile} alt = 'mscncmobile'
            width = {250} height = {450} className='mscncmobile' />
            </a>
          </div>
          </div>
        </div>
        <Footer/>
    </div>
    
  )
}
