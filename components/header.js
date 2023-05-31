import './header.css'
import Image from 'next/image'
import logo from '../public/Ma_Yuanxin.png'

export default function Header() {
    return (
        <div class="header">
        <a href="#default" class="logo">
          <Image src = {logo} alt = 'Ma Yuanxin logo' width = {150} height={50}/>
          </a>
        <div class="header-right">
          <a href="/">Home</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/about">About</a>
          <a class="active" href="/getintouch">Get In Touch</a>
        </div>
      </div>
    )
  }