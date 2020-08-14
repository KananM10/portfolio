import React, {Component} from 'react';
import './Header.css';
// import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import { Link } from "react-scroll";

// var classes = [];

class Header extends Component {
    
    state = {
        isSticky: false
    }

    handleScroll = (event) => {
        (window.scrollY >  0) ? this.setState({ isSticky: true }) : this.setState( { isSticky: false } );
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }



    render(){
    
        return (

            <div id="header" className={this.state.isSticky ? "sticky" : ""}>
        		<img src={Logo} alt="logo" className="logo_header" />
            	<ul className="nav_items" >
            		<li className="nav_item">
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={900}
                        >Home</Link>

                   </li>
            		<li className="nav_item">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={900}
                        >About</Link>
                    </li>

            		<li className="nav_item">
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={900}
                        >Projects</Link>
                    </li>
            	</ul>
            </div>
        );
    }
}

export default Header;
