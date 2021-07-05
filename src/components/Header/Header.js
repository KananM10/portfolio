import React, { Component } from "react";
import "./Header.scss";
import Logo from "../../assets/icons/logo.svg";
import { Link } from "react-scroll";

class Header extends Component {
	state = {
		isSticky: false,
	};

	handleScroll = () => {
		window.scrollY > 0 ? this.setState({ isSticky: true }) : this.setState({ isSticky: false });
	};

	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
	}

	render() {
		return (
			<div id="header" className={this.state.isSticky ? "sticky" : null}>
				<img src={Logo} alt="logo" className="logo_header" />
				<ul className="nav_items">
					<li className="nav_item">
						<Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={900}>
							Home
						</Link>
					</li>
					<li className="nav_item">
						<Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={900}>
							About
						</Link>
					</li>

					<li className="nav_item">
						<Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={900}>
							Projects
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default Header;