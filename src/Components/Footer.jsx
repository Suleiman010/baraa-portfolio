import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import data from '../data/data.json';

const SocialIcon = ({ type, href }) => {
	const icons = {
		FaLinkedin: FaLinkedin,
		FaTwitter: FaTwitter,
		FaInstagram: FaInstagram,
	};

	const IconComponent = icons[type];
	if (!IconComponent) return null;

	return (
		<a
			href={href}
			className="text-white hover:text-blue-400 transition-colors duration-300"
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`Visit our ${type.replace('Fa', '')}`}
		>
			<IconComponent className="text-2xl" />
		</a>
	);
};

function Footer() {
	const { footer } = data;
	const currentYear = new Date().getFullYear();
	const copyrightText = footer.copyright.text.replace('{year}', currentYear);

	return (
		<footer className="bg-gray-800 text-white py-12 overflow-hidden">
			<div className="container mx-auto px-4 max-w-6xl">
				<div className="text-center mb-8">
					<h2 className="text-2xl font-bold mb-4">{footer.title}</h2>
					<p className="text-gray-300">{footer.tagline}</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
					{/* Quick Links */}
					<div className="text-center md:text-left">
						<h3 className="text-lg font-bold mb-4 text-white">
							{footer.sections.links.title}
						</h3>
						<nav aria-label="Footer Navigation">
							<ul className="space-y-3">
								{footer.sections.links.items.map((link, index) => (
									<li key={`link-${index}`}>
										<a
											href={link.href}
											className="text-gray-300 hover:text-white hover:underline transition-colors duration-300"
										>
											{link.text}
										</a>
									</li>
								))}
							</ul>
						</nav>
					</div>

					{/* Contact Info */}
					<div className="text-center md:text-left">
						<h3 className="text-lg font-bold mb-4 text-white">
							{footer.sections.contact.title}
						</h3>
						<address className="not-italic">
							<ul className="space-y-3 text-gray-300">
								{footer.sections.contact.items.map((item, index) => (
									<li key={`contact-${index}`}>{item}</li>
								))}
							</ul>
						</address>
					</div>

					{/* Social Links */}
					<div className="text-center md:text-left">
						<h3 className="text-lg font-bold mb-4 text-white">
							{footer.sections.social.title}
						</h3>
						<div className="flex justify-center md:justify-start space-x-5">
							{footer.sections.social.icons.map((social, index) => (
								<SocialIcon
									key={`social-${index}`}
									type={social.icon}
									href={social.href}
								/>
							))}
						</div>
					</div>
				</div>

				<div className="border-t border-gray-700 pt-6 text-center">
					<p className="text-gray-400 text-sm">{copyrightText}</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
