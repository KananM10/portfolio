import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./Footer.scss";

const Footer = () => {
	return (
		<div className="footer d-flex flex-column justify-content-center align-items-center">
			<div className="get_In_touch">Get in touch</div>
			<div className="contact d-flex flex-row justify-content-center align-items-center">
				<div className="fb">
					<a href="https://www.facebook.com/profile.php?id=100007399969441">
						<FontAwesomeIcon icon={faFacebook} />
					</a>
				</div>
				<div className="lin">
					<a href="https://www.linkedin.com/in/kananmikayilov/">
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
				</div>
				<div className="git">
					<a href="https://github.com/kmikayilov">
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
