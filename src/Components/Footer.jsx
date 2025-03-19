import React, { memo, useState } from 'react';
import {
	FaLinkedin,
	FaTwitter,
	FaInstagram,
	FaEnvelope,
	FaArrowUp,
} from 'react-icons/fa';
import data from '../data/data.json';

const SocialIcon = memo(({ type, href, label }) => {
	const icons = {
		FaLinkedin: FaLinkedin,
		FaTwitter: FaTwitter,
		FaInstagram: FaInstagram,
		// Add more icons as needed
	};

	const IconComponent = icons[type];
	if (!IconComponent) return null;

	return (
		<a
			href={href}
			className="text-white hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
			target="_blank"
			rel="noopener noreferrer"
			aria-label={label || `Visit our ${type.replace('Fa', '')}`}
		>
			<IconComponent className="text-2xl" />
		</a>
	);
});

SocialIcon.displayName = 'SocialIcon';

const FooterSection = memo(({ title, children }) => (
	<div className="text-center md:text-left">
		<h3 className="text-lg font-bold mb-4 text-white inline-block border-b-2 border-blue-400 pb-1">
			{title}
		</h3>
		{children}
	</div>
));

FooterSection.displayName = 'FooterSection';

function Footer() {
	const { footer } = data;
	const currentYear = new Date().getFullYear();
	const copyrightText = footer.copyright.text.replace('{year}', currentYear);
	const [showScrollTop, setShowScrollTop] = useState(false);

	// Handle scroll to top button visibility
	React.useEffect(() => {
		const handleScroll = () => {
			setShowScrollTop(window.scrollY > 300);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 relative">
			{/* Scroll to top button */}
			<button
				onClick={scrollToTop}
				className={`fixed right-8 bottom-8 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transform transition-all duration-300 ${
					showScrollTop
						? 'opacity-100 translate-y-0'
						: 'opacity-0 translate-y-10 pointer-events-none'
				}`}
				aria-label="Scroll to top"
			>
				<FaArrowUp />
			</button>

			<div className="container mx-auto px-4 max-w-6xl">
				{/* Newsletter Subscription (New Feature) */}
				<div className="mb-12 text-center">
					<h2 className="text-2xl font-bold mb-4">{footer.title}</h2>
					<p className="text-gray-300 mb-6 max-w-2xl mx-auto">
						{footer.tagline}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
					{/* Quick Links */}
					<FooterSection title={footer.sections.links.title}>
						<nav aria-label="Footer Navigation">
							<ul className="space-y-3">
								{footer.sections.links.items.map((link, index) => (
									<li key={`link-${index}`}>
										<a
											href={link.href}
											className="text-gray-300 hover:text-white hover:underline transition-colors duration-300 flex items-center group"
										>
											<span className="transform group-hover:translate-x-1 transition-transform duration-200">
												{link.text}
											</span>
										</a>
									</li>
								))}
							</ul>
						</nav>
					</FooterSection>

					{/* Contact Info */}
					<FooterSection title={footer.sections.contact.title}>
						<address className="not-italic">
							<ul className="space-y-3 text-gray-300">
								{footer.sections.contact.items.map((item, index) => (
									<li key={`contact-${index}`} className="flex items-start">
										<span className="mr-2 mt-1 text-blue-400">•</span>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</address>
					</FooterSection>

					{/* Social Links */}
					<FooterSection title={footer.sections.social.title}>
						<div className="flex justify-center md:justify-start space-x-5 mb-6">
							{footer.sections.social.icons.map((social, index) => (
								<SocialIcon
									key={`social-${index}`}
									type={social.icon}
									href={social.href}
									label={social.label}
								/>
							))}
						</div>
					</FooterSection>
				</div>

				{/* Bottom section with logos and copyright */}
				<div className="border-t border-gray-700 pt-8 text-center">
					<p className="text-gray-400 text-sm mb-2">{copyrightText}</p>
				</div>
			</div>
		</footer>
	);
}

export default memo(Footer);
