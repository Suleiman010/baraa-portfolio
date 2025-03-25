import data from '../data/data.json';
import {
	FaRunning,
	FaLungs,
	FaBrain,
	FaChild,
	FaShoePrints,
	FaHandsHelping,
	FaCrutch,
	FaUserMd,
	FaHeartbeat,
	FaProcedures,
} from 'react-icons/fa';

function Experience() {
	const { experience } = data;
	return (
		<section
			id="experience"
			className="py-12 md:py-24 bg-gray-50 relative overflow-hidden"
		>
			{/* Decorative elements */}
			<div className="hidden md:block absolute right-0 top-0 w-32 h-32 bg-blue-100 rounded-bl-full opacity-70"></div>
			<div className="hidden md:block absolute left-0 bottom-0 w-48 h-48 bg-blue-100 rounded-tr-full opacity-50"></div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
				<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-gray-800">
					{experience.title}
				</h2>

				<div className="max-w-3xl mx-auto relative pl-2 sm:pl-6 md:pl-10 border-l-2 border-gray-200">
					{experience.items.map((item, index) => {
						const IconComponent = {
							FaRunning,
							FaLungs,
							FaBrain,
							FaChild,
							FaShoePrints,
							FaHandsHelping,
							FaCrutch,
							FaUserMd,
							FaHeartbeat,
							FaProcedures,
						}[item.icon];

						return (
							<div key={index} className="mb-8 md:mb-12 ml-4 sm:ml-6 md:ml-8">
								<div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
									{/* Title & Date Row */}
									<div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
										<div className="flex items-center">
											<div className="bg-blue-100 p-2 md:p-3 rounded-lg mr-3">
												<IconComponent className="text-blue-600 text-lg md:text-xl" />
											</div>
											<h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
												{item.title}
											</h3>
										</div>
										<span className="text-xs sm:text-sm font-semibold px-3 py-1.5 bg-blue-100 text-blue-600 rounded-full shrink-0">
											{item.date}
										</span>
									</div>

									{/* Company */}
									<h4 className="text-base md:text-lg font-medium text-gray-600 mb-3 sm:mb-4 pl-0 sm:pl-11">
										{item.company}
									</h4>

									{/* Description */}
									<p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed pl-0 sm:pl-11">
										{item.description}
									</p>

									{/* Tags */}
									<div className="mt-2 flex flex-wrap gap-2 pl-0 sm:pl-11">
										{item.tags.map((tag, tagIndex) => (
											<span
												key={tagIndex}
												className="px-3 py-1.5 bg-blue-50 text-blue-600 text-xs sm:text-sm rounded-full hover:bg-blue-100"
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
