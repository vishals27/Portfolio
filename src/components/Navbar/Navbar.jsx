import React from "react";
import "./Navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";
import { motion } from "framer-motion";

const Nav = () => {
	const [activeNav, setActiveNav] = useState("#");
	return (
		<motion.nav
			initial={{ width: "5%" }}
			animate={{ width: "max-content" }}
			transition={{ duration: 0.6, delay: 0.6 }}>
			<a
				href="mailto:vishal.ppp.9721@gmail.com"
				onClick={() => setActiveNav("#experience")}
				className={activeNav === "#experience" ? "active" : ""}>
				<AiOutlineMail />
			</a>
			<a href="#header" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}>
				{" "}
				<AiOutlineHome />
			</a>
			<a
				href="#portfolio"
				onClick={() => setActiveNav("#portfolio")}
				className={activeNav === "#portfolio" ? "active" : ""}>
				<RiServiceLine />
			</a>
			
		</motion.nav>
	);
};

export default Nav;
