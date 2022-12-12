import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/WT_Logo.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import "./Footer.css";
import { Contact } from "../contact/Contact";

export const Footer = () => {
	return (
		<footer className="footer">
			<Contact />
			<Container>
				<Row className="align-item-center">
					<Col size={12} sm={6}>
						<img src={logo} alt="Logo" className="footer-logo" />
					</Col>
					<Col size={12} sm={6} className="text-center text-sm-end">
						<div className="social-icon">
							<a
								href="https://linkedin.com/in/siong-jie-wilson-ting-4186ab142"
								target="_blank"
								rel="noreferrer"
							>
								<img src={navIcon1} alt="LinkedIn Logo" />
							</a>
							<a
								href="https://github.com/tsj0124"
								target="_blank"
								rel="noreferrer"
							>
								<img src={navIcon2} alt="LinkedIn Logo" />
							</a>
							<p>&copy; CopyRight 2022. Site By Wilson Ting.</p>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
