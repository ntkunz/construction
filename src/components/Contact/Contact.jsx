import "./Contact.scss";

export default function Contact() {
	return (
		<nav className="contact">
			<a href="https://github.com/ntkunz/" className="contact__link" target="_blank">
				Github
			</a>

			<a href="https://www.linkedin.com/in/nich-kunz/" className="contact__link" target="_blank">
				LinkedIn
			</a>

			<a
				href="mailto:mrnicholaskunz@gmail.com?subject=Connecting from NicholasKunz.com"
				className="contact__link"
			>
				Email
			</a>

			<a href="./Nicholas_Kunz_Resume.pdf" className="contact__link" download>
				Resume
			</a>
		</nav>
	);
}
