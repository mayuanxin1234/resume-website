import './header.css'
import Image from 'next/image'
import logo from '../public/Ma_Yuanxin.png'

export default function Header() {
    return (
        <div className="header">
        <a href="/resume-website" className="logo">
          <Image src = {logo} alt = 'Ma Yuanxin logo' width = {150} height={50}/>
          </a>
        <div className="header-right">
          <a href="/resume-website">Home</a>
          <a href="/resume-website/portfolio">Portfolio</a>
          <a href="/resume-website/about">About</a>
          <a className="active" href="/resume-website/getintouch">Get In Touch</a>
        </div>
      </div>
    )
  }