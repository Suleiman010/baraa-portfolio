import {
	FaMapMarkerAlt,
	FaEnvelope,
	FaPhone,
	FaUser,
	FaCommentDots,
	FaLinkedin,
	FaTwitter,
	FaInstagram,
} from 'react-icons/fa';
import data from '../data/data.json';
function Contact() {
	const { contact } = data;
	return (
		<section id="contact" className="py-20 md:py-32 bg-gray-50">
			<div className="container mx-auto px-4">
				<h2
					data-aos="fade-up"
					data-aos-duration="1000"
					className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-800 animated-underline inline-block mx-auto"
				>
					{contact.title}
				</h2>

				<div className="max-w-4xl mx-auto">
					<div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{/* Contact Info */}
							<div
								className="space-y-6"
								data-aos="fade-right"
								data-aos-duration="1000"
							>
								<div className="flex items-center space-x-4">
									<div className="bg-blue-100 p-3 rounded-lg">
										<FaMapMarkerAlt className="text-blue-600" />
									</div>
									<div>
										<h3 className="font-bold text-lg">
											{contact.info.location.title}
										</h3>
										<p className="text-gray-600">
											{contact.info.location.value}
										</p>
									</div>
								</div>

								<div className="flex items-center space-x-4">
									<div className="bg-blue-100 p-3 rounded-lg">
										<FaEnvelope className="text-blue-600" />
									</div>
									<div>
										<h3 className="font-bold text-lg">
											{contact.info.email.title}
										</h3>
										<p className="text-gray-600">{contact.info.email.value}</p>
									</div>
								</div>

								<div className="flex items-center space-x-4">
									<div className="bg-blue-100 p-3 rounded-lg">
										<FaPhone className="text-blue-600" />
									</div>
									<div>
										<h3 className="font-bold text-lg">
											{contact.info.phone.title}
										</h3>
										<p className="text-gray-600">{contact.info.phone.value}</p>
									</div>
								</div>

								<div className="pt-6">
									<h3 className="text-lg font-bold mb-4">
										{contact.info.social.title}
									</h3>
									<div className="flex space-x-4">
										{contact.info.social.links.map((link, index) => {
											const IconComponent = {
												FaLinkedin: FaLinkedin,
												FaTwitter: FaTwitter,
												FaInstagram: FaInstagram,
											}[link.icon];

											return (
												<a
													key={index}
													href={link.url}
													rel="noreferrer"
													target="_blank"
													className="text-blue-600 hover:text-blue-800 transition"
												>
													<IconComponent className="text-2xl" />
												</a>
											);
										})}
									</div>
								</div>
							</div>

							{/* Contact Form */}
							<form
								className="space-y-6"
								data-aos="fade-left"
								data-aos-duration="1000"
								action="https://formspree.io/f/mwplkqqg"
								method="POST"
							>
								<div>
									<label className="block text-gray-700 mb-2">
										{contact.form.name.label}
									</label>
									<div className="relative">
										<input
											type="text"
											name="name"
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
											placeholder={contact.form.name.placeholder}
										/>
										<FaUser className="absolute right-4 top-4 text-gray-400" />
									</div>
								</div>

								<div>
									<label className="block text-gray-700 mb-2">
										{contact.form.email.label}
									</label>
									<div className="relative">
										<input
											type="email"
											name="_replyto"
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
											placeholder={contact.form.email.placeholder}
										/>
										<FaEnvelope className="absolute right-4 top-4 text-gray-400" />
									</div>
								</div>

								<div>
									<label className="block text-gray-700 mb-2">
										{contact.form.message.label}
									</label>
									<div className="relative">
										<textarea
											name="message"
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
											placeholder={contact.form.message.placeholder}
										></textarea>
										<FaCommentDots className="absolute right-4 top-4 text-gray-400" />
									</div>
								</div>

								<button
									type="submit"
									className="btn-primary-effect w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition shadow-lg"
								>
									{contact.form.submit}
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
