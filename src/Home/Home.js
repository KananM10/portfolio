import React from 'react';
import './home.css';
import Logo from '../assets/logo.svg';
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="Home" id="home">
    	<div className="logo"><img src={Logo} alt="logo" className="logo_img" /></div>
    	<div className="salutation">Hi, I'm Kanan. I'm a Web Developer.</div>
    	<div className="click">
    		<div>Learn more about what I do</div>
    		<Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500} >
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi link bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
        </Link>
    	</div>
    </div>
  );
}

export default Home;
