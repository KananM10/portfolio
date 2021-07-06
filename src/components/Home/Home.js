import React from "react"
import { Link } from "react-scroll"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./Home.scss"

const Home = () => {
	return (
		<div id="home">
			<div className="salutation">Hi, I'm Kanan. I'm a Web Developer.</div>
			<div className="click">
				<div>Learn more about what I do</div>
				<Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>
					<FontAwesomeIcon icon={faCaretDown} />
				</Link>
			</div>
		</div>
	)
}

export default Home
