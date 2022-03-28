import "./Footer.css";

const date = new Date();
const currentYear = date.getFullYear();
const Footer = () => (
	<>
		<p>&copy; Dimitrios Mageiras 2021 - {currentYear}</p>
	</>
);

export default Footer;
