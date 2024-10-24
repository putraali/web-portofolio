import "../styles/About.css";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiCoreldraw } from "react-icons/si";
import { SiFigma } from "react-icons/si";
function About() {
	return (
		<section id="about">
			<div className="wrapper">
				<h3>About</h3>
				<p>
					Hallo saya Putra Ali Perdana, Sekarang saya sedang menempuh pendidikan
					strata satu saya disebuah sekolah tinggi di kota bandung, untuk
					program studi saya Teknik Informatika. Pengalaman saya di bidang
					desain lumayan cukup banyak, dimana saya tiga tahun pekerja di bidang
					desain. Untuk saat ini saya sedang menjalani studi independent di
					Infinite Learning sebagai Web Development & UI UX Design.
				</p>
				<h4>Keahlian & Tools </h4>
				<div className="skills">
					<SiAdobeillustrator />
					<SiAdobephotoshop />
					<SiCoreldraw />
					<SiFigma />
				</div>
			</div>
		</section>
	);
}

export default About;
