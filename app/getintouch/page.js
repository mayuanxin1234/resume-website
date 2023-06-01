'use client'
import './page.css'
import Header from '../../components/header'
import Footer from '../../components/footer'

export default function Getintouch() {
    return (
        <div>
            <Header/>
            <div className='main'>
            <div className='form'>
            <form action = '/api/form' method = 'post'>
              <label htmlFor="name">Your Name</label>
              <span class="req" title="required">*</span>
              <input type="text" id="name" name="name" placeholder="eg, Ma Yuanxin" required/>

              <label htmlFor="lname">Email</label>
              <span class="req" title="required">*</span>
              <input type="text" id="email" name="email" placeholder="mayuanxin@u.nus.edu" required/>

              <label htmlFor="website">Your website</label>
              <input type="text" id="website" name="website" placeholder="https://mayuanxin1234.github.io/resume-website/"/>

              <label htmlFor="companyname">Company Name</label>
              <input type="text" id="companyname" name="companyname" placeholder="eg, Apple Inc."/>
              
              <div className='messagefield'>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="6" required=""></textarea>
              </div>

              <input type="submit" value="Submit"/>
            </form>
            </div>
            <div>
                <h1>About me</h1>
            </div>
            </div>
            <Footer/>
        </div>
    )
}