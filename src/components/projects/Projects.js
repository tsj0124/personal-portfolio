import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import contactImg from "../../assets/img/contact-img.svg";
import "./Projects.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
	return (
		<section className="project" id="projects">
			<Container>
				<Row>
					<Col md={6}>
						<img
							className="background-image"
							src={contactImg}
							alt="Contact Us"
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? "animate__animated animate__slideInUp" : ""
									}
								>
									<h2>Projects</h2>
								</div>
							)}
						</TrackVisibility>
						<Tab.Container id="projects-tab" defaultActiveKey="first">
							<Nav
								variant="pills"
								className="nav-pills mb-5 justify-content-center align-items-center"
								id="pills-tab"
							>
								<Nav.Item>
									<Nav.Link eventKey="first">Tab One</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second">Tab Two</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="third">Tab Three</Nav.Link>
								</Nav.Item>
							</Nav>
							<Tab.Content>
								<Tab.Pane eventKey="first">
									<h2>Final Year Project</h2>
									<h5>
										Embedded Surveillance Using Arduino and Android Interface
									</h5>
									<p>
										The project is based on using ARDUINO device, android
										technology and Wi-Fi module. In details, use the PIR sensor
										to install in our house to detect the human motions. When
										the sensor detects human motion in the security area, it
										will active the buzzer in home area and sends the signal to
										alert us that someone is in our house. Beside this, also
										install the light bulb, DC fans and DC door actuator to act
										as home appliance which controlled by the android phone.
									</p>
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<h2>Robert Bosch (M) Sdn Bhd</h2>
									<h5>Test Coverage Checker Application Tool</h5>
									<p>
										TThe project is based on using Java Language to develop the
										GUI and source code. In details, fetch the data from oracle
										using SQL developer language and grab data from excel format
										file to do the comparison in order not to miss up any test
										and track the test sequence when modify the test scripts.
									</p>
								</Tab.Pane>
								<Tab.Pane eventKey="third">
									<h2>Keysight Technologies Sdn Bhd</h2>
									<h5>Exe Application Window Form App (.net Framework)</h5>
									<p>
										Design the test script by using the C# and VB.net. Use the
										Keysight equipment (PNA, Spectrum Analyzer, DCPA, Signal
										Generator, Switch Driver and DMM) to develop the test
										process by supporting the attenuators project for
										S-Parameter measurement, current and resistance measurement.
										Export the data to txt or csv format and store the result
										inside the local drive.
									</p>
								</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
					</Col>
				</Row>
			</Container>
			<img className="background-image-right" src={colorSharp2} />
		</section>
	);
};
