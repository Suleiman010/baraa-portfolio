import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import data from '../data/data.json';
function Footer() {
	const { footer } = data;
	const currentYear = new Date().getFullYear(); // Get current year

	// Replace {year} with the current year
	const copyrightText = footer.copyright.text.replace('{year}', currentYear);
	return (
		<footer className="bg-gray-800 text-white py-12">
			<div className="container mx-auto px-4">
				<div className="text-center mb-8">
					<h3 className="text-2xl font-bold mb-4">{footer.title}</h3>
					<p className="text-gray-400">{footer.tagline}</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
					{/* Quick Links */}
					<div>
						<h4 className="text-lg font-bold mb-4">
							{footer.sections.links.title}
						</h4>
						<ul className="space-y-2">
							{footer.sections.links.items.map((link, index) => (
								<li key={index}>
									<a
										href={link.href}
										className="text-gray-400 hover:text-white transition"
									>
										{link.text}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className="text-lg font-bold mb-4">
							{footer.sections.contact.title}
						</h4>
						<ul className="space-y-2 text-gray-400">
							{footer.sections.contact.items.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</div>

					{/* Social Links */}
					<div>
						<h4 className="text-lg font-bold mb-4">
							{footer.sections.social.title}
						</h4>
						<div className="flex justify-center md:justify-start space-x-4">
							{footer.sections.social.icons.map((social, index) => {
								const IconComponent = {
									FaLinkedin: FaLinkedin,
									FaTwitter: FaTwitter,
									FaInstagram: FaInstagram,
								}[social.icon];

								return (
									<a
										key={index}
										href={social.href}
										className="text-white hover:text-blue-400 transition"
									>
										<IconComponent className="text-2xl" />
									</a>
								);
							})}
						</div>
					</div>
				</div>

				<div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
					<p>{copyrightText}</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
