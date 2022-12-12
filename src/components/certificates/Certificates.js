import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../../assets/img/color-sharp.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

import "./Certificates.css";
export const Certificates = () => {
	return (
		<section className="certificates" id="certificates">
			<Container className="container certificates-container">
				<TrackVisibility>
					{({ isVisible }) => (
						<div
							className={
								isVisible ? "animate__animated animate__lightSpeedInRight" : ""
							}
						>
							<h1 className="certificates-txt">Certificates</h1>
						</div>
					)}
				</TrackVisibility>

				<Row className="certificates certificates-1">
					<div className="certificates-img"></div>
					<Col className="certificates-info">
						<h1 className="name">University of Technology Sarawak, Malaysia</h1>
						<h3 className="position">
							Bachelor in Engineering Technology (HONS) in Electrical &
							Electronic
						</h3>
						<h4 className="certificates-txt">(Sep 2013 to Feb 2017)</h4>
						<a
							href="https://www.uts.edu.my/"
							className="contact-certificates"
							target="_blank"
							rel="noreferrer"
						>
							<span>Link</span>
						</a>
					</Col>
				</Row>
			</Container>
			<img className="background-image-left" src={colorSharp} />
		</section>
	);
};
