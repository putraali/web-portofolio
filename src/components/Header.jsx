import Ali from "../assets/Ali.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "../styles/Header.css";
function Header() {
	return (
		<header id="home">
			<div className="header-jumbotron">
				<img src={Ali} />
				<h3>Putra Ali Perdana</h3>
				<p>Design Grafis - UI UX Design - Design Mockup</p>
				<div className="socialMedia">
					<a href="https://www.instagram.com/putraaliperdana_22/">
						<FaInstagram />
					</a>
					<a href="https://www.linkedin.com/in/putra-ali-perdana-37166330a/">
						<FaLinkedin />
					</a>
				</div>
			</div>
		</header>
	);
}

export default Header;
