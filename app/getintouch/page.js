'use client'
import './page.css'
import Header from '../../components/header'
import Footer from '../../components/footer'
import profilephoto from '../../public/profilephoto.jpg'
import Image from 'next/image'

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
                    
                    <form className="was-validated" method = "post" action = "https://forms.un-static.com/forms/d5776aa03c5887fba5053cb07ca2507fa2873cce">
                    <div class="form-group">
                        <label for="Name">Your Name</label>
                        <input name = "Name" type="text" class="form-control" id="Name" placeholder="Enter name" required/>
                        <small id="emailHelp" class="form-text text-muted"> Required</small>
                    </div>
                    <div class="form-group">
                        <label for="Email1">Email address</label>
                        <input name = "Email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                        <small id="emailHelp" class="form-text text-muted"> Required</small>
                    </div>
                    <div class="form-group">
                        <label for="ContactNumber">Contact Number</label>
                        <input name = "Number" type="number" class="form-control" id="ContactNumber" aria-describedby="emailHelp" placeholder="Your Number"/>
                    </div>
                    <div class="form-group">
                        <label for="Company-name">Company Name</label>
                        <input name = "Company name" type="text" class="form-control" id="Company-name" placeholder="Company Name" required/>
                        <small id="emailHelp" class="form-text text-muted"> Required</small>
                    </div>
                    <div class="form-group">
                        <label for="Website">Your website</label>
                        <input name = "Website" type="text" class="form-control" id="Website" placeholder="Website"/>
                    </div>
                    <div class="form-group">
                        <label  for="Message">General Message</label>
                        <textarea  name = "Message" class="form-control" id="Message" rows="3"></textarea>
                    </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        
                    </form>
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