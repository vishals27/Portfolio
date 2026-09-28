import React from "react";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram, BsGithub } from "react-icons/bs";
const footer = () => {
	return (
		<footer>
			<div className="footer__copyright">
				<div className="footer__socials">
					<a href="https://github.com/vishals27/">
						<BsGithub />
					</a>
					{/* <a href="https://www.instagram.com/namrataaa00000/">
						<BsInstagram />
					</a> */}
					<a href="https://www.linkedin.com/in/vishal-pandey-46551b1b9/">
						<BsLinkedin />
					</a>
				</div>
				<small>&copy;Vishal Pandey. ALL rights reserved</small>
			</div>
		</footer>
	);
};

export default footer;
