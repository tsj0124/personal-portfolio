import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/header-img.svg";
import "./Banner.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState("");
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const toRotate = ["Wilson Ting Siong Jie."];
	const period = 2000;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
	}, [text]);

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setDelta(period);
		} else if (isDeleting && updatedText === "") {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setDelta(500);
		}
	};

	return (
		<section className="banner" id="home">
			<Container>
				<Row className="align-items-center">
					<Col xs={12} md={6} xl={7}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? "animate__animated animate__fadeIn" : ""
									}
								>
									<span className="tagline">Welcome to my PortFolio</span>
									<h1>
										{`Hi I'm `}
										<span className="wrap">{text}</span>
									</h1>
									<p>
										I am Wilson Ting Siong Jie from Sibu Sarawak Malaysia.
										Graduate from University of Technology Sarawak which located
										at my home town and major in electrical and electronic
										engineering. I have been working as a test development
										engineer at electronic industry at Penang Malaysia for 4
										years plus. Furthermore, I am a self learning for the coding
										skill and have passion on the coding side. Finally, wish to
										find a job at IT field to enchance my knowledge for front
										end or either back end skills.
									</p>
								</div>
							)}
						</TrackVisibility>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<img src={headerImg} alt="Header Img" />
					</Col>
				</Row>
			</Container>
		</section>
	);
};
