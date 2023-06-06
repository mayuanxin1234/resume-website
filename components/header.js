import "bootstrap/dist/css/bootstrap.min.css";
import './header.css'
import Image from 'next/image'
import logo from '../public/Ma_Yuanxin.png'
import Head from "next/head";

export default function Header() {
    return (
        <div className="header">
        <Head>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          
        </Head>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
              <a href="/resume-website" className="logo">
                <Image src = {logo} alt = 'Ma Yuanxin logo' width = {150} height={50}/>
              </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
          <div className="header-items">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
            <a href="/resume-website">Home</a>
            </li>
            <li className="nav-item">
              <a href="/resume-website/portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
            <a href="/resume-website/about">About</a>
            </li>
            <li className="nav-item">
            <a className="active" href="/resume-website/getintouch">Get In Touch</a>
            </li>
          </ul>
          </div>
         </div>
      </nav>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
      </div>
    )
  }