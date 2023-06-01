'use client'
import './page.css'
import Header from '../../components/header'
import Footer from '../../components/footer'
import profilephoto from '../../public/profilephoto.jpg'
import Image from 'next/image'
import javascript from '../../public/JavaScript-logo.png'
import html from '../../public/HTML5_logo_and_wordmark.svg.png'
import css from '../../public/CSS.png'
import next from '../../public/next.svg'
import python from '../../public/python.png'
import java from '../../public/java.png'
import c from '../../public/C.png'
import numpy from '../../public/numpy.png'
import pytorch from '../../public/pytorch.png'
import tensorflow from '../../public/tensorflow.jpg'
import r from '../../public/R.svg'

export default function About() {
  return (
    <div>
      <Header/>
      <div>
        <h2>About Ma Yuanxin</h2>
      </div>
      <div className='main'>
        <div className='profilephoto'>
        <Image src = {profilephoto} alt = "profilephoto" width ={100} height ={125}/>
        <p>I am Yuanxin and I enjoy creating solutions to solve everyday issues. My interest in Computer Science began back in 2017, when I explored many online courses and fell in love with programming.</p>
        </div>   
        <p>Today, I am a Year 3 Computer Science student in the National University of Singapore, aiming to focus on Software Engineering.
        I work to make a better web; one that is fast, easy to use, beautiful, accessible to all, and frustration-free.
        </p>
        <div>
          <h2>Techinical Skills</h2>
          <ul>
            <li><Image src = {javascript} alt = 'javascript' width = {50} height ={50}/>JavaScript</li>
            <li><Image src = {html} alt = 'html' width = {50} height ={50}/>HTML</li>
            <li><Image src = {css} alt = 'css' width = {50} height ={50}/>CSS</li>
            <li><Image src = {next} alt = 'next.js' width = {50} height ={50}/>Next.Js</li>
            <li><Image src = {python} alt = 'python' width = {50} height ={50}/>Python</li>
            <li><Image src = {java} alt = 'java' width = {50} height ={50}/>Java</li>
            <li><Image src = {c} alt = 'C' width = {50} height ={50}/>C</li>
            <li><Image src = {numpy} alt = 'numpy' width = {50} height ={50}/>Numpy</li>
            <li><Image src = {pytorch} alt = 'pytorch' width = {50} height ={50}/>Pytorch</li>
            <li><Image src = {tensorflow} alt = 'tensorflow' width = {50} height ={50}/>Tensorflow</li>
            <li><Image src = {r} alt = 'r' width = {50} height ={50}/>R</li>
          </ul>
        </div>
        <h2>Work Experience</h2>
        <p>1. <b>M S CNC Manufacture Pte. Ltd. </b></p>
        <p>M S CNC is a precision engineering company with a focus on Computer Numeric Control (CNC) machinery.</p>
        <p>Role: <b>Software Developer </b>(Apr 2022 - Present)</p>
        <ul>
          <li>Re-built the company website using React, JavaScript, CSS & HTML. The previous website was built with a website builder and did not meet their business needs</li>
           <li>Created Java application to improve a daily process that involved manual, and error-prone copying and pasting of CNC machine code</li>
        </ul>
        <p>Role: <b>Assistant Accountant </b> (Feb 2021 - Aug 2021)</p>
        <ul>
          <li>Sorted out invoices and keyed invoices into accounting software (WHIZIT). Assisted with monthly accounting duties</li>
          <li>Leveraging Siemens Unigraphics software to generate machine code to run on CNC machines and helped with manufacturing of items</li>
        </ul>
        <div>
        <h2>Projects</h2>
        <p>1. <b>TikTok Youth Camp </b></p>
        <p>Role: Participant (May 2022 - Jun 2022)</p>
        <ul>
          <li>4 weeks camp teaching basics of HTML, CSS, JavaScript, Web Animation, Android Development</li>
          <li>Embarked on a Front End development project creating a HangMan game</li>
        </ul>
        <p>2. <b>Amazon Web Services Early Careers Innovation Program </b></p>
        <p>Role: Participant (May 2022 - Jun 2022)</p>
        <ul>
          <li>5 weeks camp with seminars from industry experts on Amazon Web Services</li>
          <li>Embarked on a CASE competition with presenting sample business proposal</li>
        </ul>
      </div>
      <div>
        <h2>Coursework</h2>
        <ul>
          <li>CS2040S Data structures and algorithms - Java</li>
          <li>CS2103T Software Engineering - Java</li>
          <li>CS2030S Programming Methodology II - Java</li>
          <li>CS2106 Introduction to Operating Systems - C</li>
          <li>CS2100 Computer Organisation - C</li>
          <li>CS1101S Programming Methodology I - Source (JavaScript)</li>
          <li>CS2105 Introduction to computer networks - Python</li>
          <li>CS2109S Introduction to AI and machine learning - Python (numpy, pytorch, tensorflow)</li>
        </ul>
      </div>
      </div>      
      <Footer/>
    </div>
  )
}