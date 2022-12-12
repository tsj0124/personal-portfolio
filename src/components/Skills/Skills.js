import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import C from "../../assets/img/c.svg";
import C_Sharp from "../../assets/img/c_sharp.svg";
import Java from "../../assets/img/java.svg";
import Html from "../../assets/img/html.svg";
import Css from "../../assets/img/css.svg";
import Javascript from "../../assets/img/javascript.svg";
import React from "../../assets/img/react.svg";
import GitHub from "../../assets/img/github.svg";
import MySQL from "../../assets/img/mysql.svg";
import "./Skills.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Skills = () => {
	const languages = [
		{ name: "C", src: C },
		{ name: "C#", src: C_Sharp },
		{ name: "Java", src: Java },
		{ name: "HTML", src: Html },
		{ name: "CSS", src: Css },
		{ name: "Javascript", src: Javascript },
		{ name: "React", src: React },
		{ name: "GIT", src: GitHub },
		{ name: "MySQL", src: MySQL },
	];

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<section className="skill" id="skills">
			<TrackVisibility>
				{({ isVisible }) => (
					<div
						className={
							isVisible ? "animate__animated animate__slideInDown" : ""
						}
					>
						<Container>
							<Row>
								<Col>
									<div className="skill-box">
										<h2>Skills & Technologies</h2>
										<Carousel
											responsive={responsive}
											infinite={true}
											className="skill-slider"
										>
											{languages.map((language, index) => {
												return (
													<div className="item" key={index}>
														<img src={language.src} alt="image" />
														<h5>{language.name}</h5>
													</div>
												);
											})}
										</Carousel>
									</div>
								</Col>
							</Row>
						</Container>
						{/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
					</div>
				)}
			</TrackVisibility>
		</section>
	);
};
