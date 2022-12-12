import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/img/WT_Logo.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import "./NavBar.css";

export const NavBar = () => {
	const [activeLink, setActiveLink] = useState("home");
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	};

	return (
		<Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
			<Container>
				<Navbar.Brand href="#home">
					<img src={logo} alt="Logo" className="nav-logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav">
					<span className="navbar-toggler-icon"></span>
				</Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link
							href="#home"
							className={
								activeLink === "home" ? "active navbar-link" : "navbar-link"
							}
							onClick={() => onUpdateActiveLink("home")}
						>
							Home
						</Nav.Link>
						<Nav.Link
							href="#skills"
							className={
								activeLink === "skills" ? "active navbar-link" : "navbar-link"
							}
							onClick={() => onUpdateActiveLink("skills")}
						>
							Skills
						</Nav.Link>
						<Nav.Link
							href="#experiences"
							className={
								activeLink === "experiences"
									? "active navbar-link"
									: "navbar-link"
							}
							onClick={() => onUpdateActiveLink("experiences")}
						>
							Experiences
						</Nav.Link>
						<Nav.Link
							href="#certificates"
							className={
								activeLink === "certificates"
									? "active navbar-link"
									: "navbar-link"
							}
							onClick={() => onUpdateActiveLink("certificates")}
						>
							Certificates
						</Nav.Link>
						<Nav.Link
							href="#projects"
							className={
								activeLink === "projects" ? "active navbar-link" : "navbar-link"
							}
							onClick={() => onUpdateActiveLink("projects")}
						>
							Projects
						</Nav.Link>
						<Nav.Link
							href="#contact"
							className={
								activeLink === "contact" ? "active navbar-link" : "navbar-link"
							}
							onClick={() => onUpdateActiveLink("contact")}
						>
							Contact
						</Nav.Link>
					</Nav>
					<span className="navbar-text">
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
						</div>
					</span>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
