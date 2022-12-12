import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/navbar/NavBar";
import { Banner } from "./components/banner/Banner";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/projects/Projects";
import { Footer } from "./components/footer/Footer";
import { Experiences } from "./components/experiences/Experiences";
import { Certificates } from "./components/certificates/Certificates";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Banner />
			<Skills />
			<Experiences />
			<Certificates />
			<Projects />
			<Footer />
		</div>
	);
}

export default App;
