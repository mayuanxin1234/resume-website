import './footer.css'
import profilephoto from '../public/profilephoto.jpg'
import Image from 'next/image'
import { motion } from 'framer-motion';
import github from '../public/github-mark-white.png'
import linkedin from '../public/linkedinlogo.png'

function getMonth(month) {
    if (month == 0) {
        return "JAN"
    }
    if (month == 1) {
        return "FEB"
    }
    if (month == 2) {
        return "MAR"
    }
    if (month == 3) {
        return "APR"
    }
    if (month == 4) {
        return "MAY"
    }
    if (month == 5) {
        return "JUNE";
    }
    if (month == 6) {
        return "JULY"
    }
    if (month == 7) {
        return 'AUG'
    }
    if (month == 8) {
        return 'SEPT'
    }
    if (month == 9) {
        return 'OCT'
    }
    if (month == 10) {
        return 'NOV'
    }
    if (month == 11) {
        return 'DEC'
    }

}
export default function Footer() {
    const today = new Date();
    var month = today.getMonth();
    month = getMonth(month);
    const year = today.getFullYear();
    return(

        <footer className='footer'>
            <div>
            <div className='footerleft'>
                <Image src = {profilephoto} alt = "profilephoto" width ={100} height ={125}/>
                <p className='profiledescription'>I am a year 3 NUS computer science student with <br/> 
                 a passion in front-end development and experience <br/>
                 in working back-end. I am always looking for new <br/>
                 learning experiences. </p>
            </div>
            <p className='interndescription'>Software Engineer Intern.</p>
            <motion.div
              whileHover={{
                scale: 1.04,
                transition: { duration: 1 },
              }}
            >
            <a href = '/resume-website/getintouch' className='hirenowa'>
                <p className='hirenow'>AVAILABLE {month} {year}. HIRE NOW {'>'}</p>
            </a>
            </motion.div>
            <a href = "https://drive.google.com/uc?export=download&id=1Lr8LW0R0hCYxSHGkCWZfDycvKArbJJk7">
                    <button class="button" ><span>Download Resume </span></button>
                </a>
            </div>
            <div className='footersocials'>
                <a href = 'https://github.com/mayuanxin1234' target="_blank" >
                <Image src = {github} alt = 'githublogo' width = {30} height = {30}/>
                <h4 className='githubtitle'>GITHUB</h4>
                </a>
                <p>Follow to see more of my side projects!</p>
                <a href = 'https://www.linkedin.com/in/ma-yuanxin-93064b148/' target="_blank">
                <Image src = {linkedin} alt = 'linkedinlogo' width = {30} height = {30}/>
                <h4 className='githubtitle'>LINKEDIN</h4>
                </a>
                <p>Let us connect on linkedin!</p>
            </div>
            <div className='sitemap'>
            <a href = '/resume-website/portfolio' >
                <h4 className='githubtitle'>PORTFOLIO</h4>
                </a>
                <p>View my previous works.</p>
            <a href = '/resume-website/about' >
                <h4 className='githubtitle'>ABOUT</h4>
                </a>
                <p>Learn more about my skills <br/>
                and workflow.</p>    
                <a href = '/resume-website/getintouch' >
                <h4 className='githubtitle'>GET IN TOUCH</h4>
                </a>
                <p>Send a message to me.</p>
            </div>
        </footer>

    )
}