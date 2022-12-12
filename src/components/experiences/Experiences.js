import { Col, Container, Row } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

import "./Experiences.css";

export const Experiences = () => {
	return (
		<section className="experiences" id="experiences">
			<div id="stars"></div>
			<div id="stars2"></div>
			<div id="stars3"></div>

			<Container className="container experiences-container">
				<TrackVisibility>
					{({ isVisible }) => (
						<div
							className={
								isVisible ? "animate__animated animate__bounceInDown" : ""
							}
						>
							<h1 className="experiences-txt">Experiences</h1>
						</div>
					)}
				</TrackVisibility>
				<Row className="experiences experiences-1">
					<div className="experiences-img"></div>
					<Col className="experiences-info">
						<h1 className="name">Keysight Technologies Malaysia Sdn Bhd</h1>
						<h3 className="position">
							Test and Measurement Engineer(Intermediate)
						</h3>
						<h4 className="about">
							<ul>
								<li>
									Define, develop, deploy and maintain test system from new
									product introduction stage till product end of support stage.
								</li>
								<li>
									Solo develop the test by using SDLC concept. Example: Do
									analysis for the test process, design, implementation and
									debug the code, buyoff the test, deployment, go live and
									maintenance for the RF product (attenuators, calkit and power
									sensor).
								</li>
								<li>
									Improvement project for obsolete the old platform (VB6) and
									migrate to the new platform (C#) for better test performance
									in terms of quality, test time and cost.
								</li>
								<li>Optimization and test process standardization.</li>
								<li>
									Automate the test solutions using Keysight test executive’s
									platforms to support NPI development.
								</li>
								<li>
									Write C# and VB.net test script by using Window Forms App for
									automated the process that required by the product engineer
									for the evaluation purposed.
								</li>
							</ul>
						</h4>
					</Col>
				</Row>

				<Row className="experiences experiences-2">
					<div className="experiences-img"></div>
					<Col className="experiences-info">
						<h1 className="name">Robert Bosch Malaysia Sdn Bhd</h1>
						<h3 className="position">Senior Test Development Engineer</h3>
						<h4 className="about">
							<ul>
								<li>
									Major in AOI testing solutions for products car multimedia
									player monitor (display) checking and cosmetic checking.
								</li>
								<li>
									Responsible of test yields improvement, equipment maintenance
									and breakdown causes.
								</li>
								<li>
									Study the image processing tools and define a new testing
									method to meet customer requirements.
								</li>
								<li>
									Study the data collection and create new test script for the
									yield enhancement and test method stability.
								</li>
								<li>
									Using the C to write the test script for the machine to run by
									using the internal test platforms.
								</li>
							</ul>
						</h4>
					</Col>
				</Row>

				<Row className="experiences experiences-3">
					<div className="experiences-img"></div>
					<Col className="experiences-info">
						<h1 className="name">Jabil Circuit Sdn Bhd</h1>
						<h3 className="position">Test Engineer I</h3>
						<h4 className="about">
							<ul>
								<li>
									Responsible of test yields improvement and test equipment
									maintenance.
								</li>
								<li>Tester development, improvements and safety.</li>
								<li>
									Ensure the product capacity meet the maximized & sufficient.
								</li>
								<li>
									Conduct data analysis (Examples: GR&R) and verification on the
									performance tester.
								</li>
							</ul>
						</h4>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
