import data from '../data/data.json';
import { FaUserMd, FaRunning, FaHospitalUser } from 'react-icons/fa';

function Experience() {
	const { experience } = data;
	return (
		<section
			id="experience"
			className="py-20 md:py-32 bg-gray-50 relative overflow-hidden"
		>
			<div className="absolute right-0 top-0 w-32 h-32 bg-blue-100 rounded-bl-full opacity-70"></div>
			<div className="absolute left-0 bottom-0 w-48 h-48 bg-blue-100 rounded-tr-full opacity-50"></div>

			<div className="container mx-auto px-4 relative">
				<h2
					data-aos="fade-up"
					data-aos-duration="1000"
					className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-800 animated-underline inline-block mx-auto"
				>
					{experience.title}
				</h2>

				<div className="max-w-3xl mx-auto relative pl-10 border-l-2 border-gray-200">
					{experience.items.map((item, index) => {
						const IconComponent = {
							FaUserMd: FaUserMd,
							FaRunning: FaRunning,
							FaHospitalUser: FaHospitalUser,
						}[item.icon];

						return (
							<div
								key={index}
								data-aos="fade-up"
								data-aos-duration="1000"
								data-aos-delay={index * 200}
								className="experience-item mb-16 ml-8"
							>
								<div className="bg-white p-8 rounded-xl shadow-lg transition-all hover:shadow-xl">
									<div className="flex justify-between items-start mb-6 ">
										<div className="flex items-center">
											<div className="bg-blue-100 p-3 rounded-lg mr-4">
												<IconComponent className="text-blue-600 text-xl" />
											</div>
											<h3 className="text-xl md:text-2xl font-bold text-gray-800">
												{item.title}
											</h3>
										</div>
										<span className="text-sm font-semibold px-4 py-2 bg-blue-100 text-blue-600 rounded-full">
											{item.date}
										</span>
									</div>
									<h4 className="text-lg font-semibold text-gray-600 mb-4 pl-14">
										{item.company}
									</h4>
									<p className="text-gray-600 mb-6 pl-14 leading-relaxed">
										{item.description}
									</p>
									<div className="mt-4 flex flex-wrap gap-3 pl-14">
										{item.tags.map((tag, tagIndex) => (
											<span
												key={tagIndex}
												className="px-4 py-2 bg-blue-50 text-blue-600 text-sm rounded-full transition-all hover:bg-blue-100"
											>
												{tag}
											</span>
										))}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Experience;
