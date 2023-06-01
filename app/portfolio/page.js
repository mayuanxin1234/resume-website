'use client'
import Image from 'next/image'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { motion } from 'framer-motion';
import './page.css'
import mscnc from '../../public/mscnc.jpg'
import mscncdesktop from '../../public/mscncdesktop.png'
import mscncmobile from '../../public/mscncmobile.png'

export default function Portfolio() {
  return (
    <div>
      <Header/>
        <div className='experience'>
          <h1>Front-end Development Portfolio</h1>
          <p className='portfoliodescription'>Succeed online with a website that is fast, easy to use, and <br/>
          built with best practices and a passion for design. <br/>
          Click on each portfolio to find out more!</p>
          <div className='mscnc'>
            <div>
            <motion.div
              whileHover={{
                scale: 1.04,
                transition: { duration: 1 },
              }}
            >
          <a href = '/portfolio/mscnc'>
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
          <a href = '/portfolio/mscnc'>
            <Image src = {mscncdesktop} alt = 'mscncdesktop'
            width = {800} height = {450} className='mscncdesktop'/>
            </a>
          </div>
          <div>
          <a href = '/portfolio/mscnc'>
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