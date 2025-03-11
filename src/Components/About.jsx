import data from '../data/data.json';
import {
	FaMedal,
	FaGraduationCap,
	FaCheckCircle,
	FaFilePdf,
} from 'react-icons/fa';
function About() {
	const { about } = data;
	return (
		<section id="about" className="py-20 md:py-32 bg-white overflow-hidden">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row items-center gap-16">
					{/* Image Section */}
					<div
						className="md:w-1/3"
						data-aos="fade-right"
						data-aos-duration="1000"
					>
						<div className="relative">
							<div className="rounded-full overflow-hidden w-64 h-64 mx-auto shadow-xl relative z-10">
								<img
									src="/assets/japan-background-digital-art.jpg"
									alt="ALBRAA ALMASHWAKI"
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="w-64 h-64 rounded-full bg-blue-100 absolute top-5 left-5 z-0"></div>
							<div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-full opacity-20"></div>
							<div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600 rounded-full opacity-10"></div>
						</div>
					</div>

					{/* Content Section */}
					<div
						className="md:w-2/3"
						data-aos="fade-left"
						data-aos-duration="1000"
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 animated-underline">
							{about.title}
						</h2>
						{about.description.map((paragraph, index) => (
							<p
								key={index}
								className="text-lg text-gray-600 mb-6 leading-relaxed"
							>
								{paragraph}
							</p>
						))}

						{/* Specializations and Education Grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
							{/* Specializations Card */}
							<div className="bg-gray-50 p-6 rounded-xl shadow-sm transition-all hover:shadow-md">
								<div className="flex items-center mb-4">
									<div className="bg-blue-600 p-3 rounded-lg text-white mr-4">
										<FaMedal className="text-xl" />
									</div>
									<h3 className="font-bold text-xl text-gray-800">
										{about.specializations.title}
									</h3>
								</div>
								<ul className="text-gray-600 space-y-2">
									{about.specializations.items.map((item, index) => (
										<li key={index} className="flex items-center">
											<FaCheckCircle className="text-blue-600 mr-2" />
											{item}
										</li>
									))}
								</ul>
							</div>

							{/* Education Card */}
							<div className="bg-gray-50 p-6 rounded-xl shadow-sm transition-all hover:shadow-md">
								<div className="flex items-center mb-4">
									<div className="bg-blue-600 p-3 rounded-lg text-white mr-4">
										<FaGraduationCap className="text-xl" />
									</div>
									<h3 className="font-bold text-xl text-gray-800">
										{about.education.title}
									</h3>
								</div>
								<ul className="text-gray-600 space-y-2">
									{about.education.items.map((item, index) => (
										<li key={index} className="flex items-center">
											<FaCheckCircle className="text-blue-600 mr-2" />
											{item}
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Resume Button */}
						<a
							href="/assets/Albaraa Almashwakhi CV.pdf"
							target="_blank"
							id="view-resume-2"
							className="inline-flex items-center btn-primary-effect bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition shadow-lg"
						>
							<FaFilePdf className="mr-2" />
							{about.resumeButton}
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
