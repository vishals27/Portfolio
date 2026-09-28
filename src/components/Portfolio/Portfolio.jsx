import React, { useEffect, useRef } from "react";
import "./Portfolio.css";
import { AiFillGithub } from "react-icons/ai";
import { PiMonitor } from "react-icons/pi";
import { motion, useInView, useAnimation } from "framer-motion";

import builderAiImg from "../../assets/builder-login.png";
import bookstackImg from "../../assets/bookstore.png";
import spaceTourismImg from "../../assets/spacetourism.png";
import ticTacToeImg from "../../assets/tic-toe.png";

const data = [
	
	{
		id: 1,
		weburl: "https://book-store-two-sable.vercel.app/",
		title: "BookStack",
		date: "May 26 - June 26",
		techStack: "ReactJs, NodeJs, ExpressJs, MongoDB",
		desc: `BookStore is an online bookstore where users can browse, purchase, and manage books effortlessly. It includes secure user authentication, theme toggling (light/dark mode), and a responsive interface for an enhanced user experience.`,
		url: bookstackImg,
		github: "",
	},
	{
		id: 2,
		weburl: "https://space-tourism-kappa-taupe.vercel.app/",
		title: "Space Tourism",
		date: "January 26- January 26",
		techStack: "ReactJs, TailwindCss ",
		desc: `Space Tourism is a modern, interactive web application that takes users on a virtual journey through the cosmos. Built with React and styled with Tailwind CSS, it features a dynamic and responsive interface that allows exploration of different planets, their unique environments, and fascinating details about space travel.`,
		url: spaceTourismImg,
		github: "https://github.com/vishals27/SpaceTourism",
	},
	{
		id: 3,
		weburl: "https://tictoe-pi.vercel.app/",
		title: "Tic Tac Toe",
		date: "Nvember 25 - November 25",
		techStack: "JavaScript, TypeScript, CSS",
		desc: `Tic Tac Toe is a classic two-player game played on a 3x3 grid. The game involves marking cells with either 'X' or 'O', with the goal of getting three of your marks in a row—either horizontally, vertically, or diagonally.`,
		url: ticTacToeImg,
		github: "https://github.com/vishals27/TicTacToe",
	},
];

const Portfolio = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const mainControls = useAnimation();
	useEffect(() => {
		mainControls.start(isInView && "visible");
	}, [isInView, mainControls]);

	return (
		<section id="portfolio" className="portfolio">
			<h1>Portfolio</h1>
			<h5>My Recent Works</h5>
			<div ref={ref} className="portfolio__container">
				{data.map(({ id, url, title, github, weburl, desc, date, techStack }) => {
					return (
						<motion.article
							variants={{
								hidden: { opacity: 0, translateY: 30 },
								visible: { opacity: 1, translateY: 0 },
							}}
							key={id}
							initial="hidden"
							animate={mainControls}
							transition={{
								duration: 1,
								delay: 0.2,
							}}
							className="portfolio__item">
							<div className="portfolio__item-image">
								<img src={url} alt={title}></img>
							</div>
							<div className="details">
								<div className="projectDetails">
									<h3>{title}</h3>
									<p className="date">{date}</p>
									<p className="techStack">{techStack}</p>
								</div>

								<p className="desc">{desc}</p>
								<div className="button-flex">
									<div className="portfolio__item-cta">
										<a
											href={github}
											className="btn btn-primary ctaBtn"
											target="_blank"
											rel="noreferrer">
											<AiFillGithub fontSize={24} />
											Github
										</a>
									</div>
									<div className="portfolio__item-cta">
										<a
											href={weburl}
											className="btn btn-primary ctaBtn"
											target="_blank"
											rel="noreferrer">
											<PiMonitor fontSize={24} />
										</a>
									</div>
								</div>
							</div>
						</motion.article>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
