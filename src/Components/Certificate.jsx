import { FaCertificate, FaArrowRight, FaTimes } from 'react-icons/fa';
import data from '../data/data.json';
import { useState } from 'react';

function Certificate() {
	const { certificates } = data;

	const [selectedCertificate, setSelectedCertificate] = useState(null);

	return (
		<section id="certificates" className="py-20 md:py-32 bg-white relative">
			{/* Details Overlay */}
			<div
				className={`fixed inset-0 z-50 transition-all duration-300 ${
					selectedCertificate ? 'visible' : 'invisible'
				}`}
			>
				{/* Background Overlay */}
				<div
					className={`absolute inset-0 bg-black/50 transition-opacity ${
						selectedCertificate ? 'opacity-100' : 'opacity-0'
					}`}
					onClick={() => setSelectedCertificate(null)}
				></div>

				{/* Details Panel */}
				<div
					className={`absolute right-0 top-0 h-full w-full md:w-1/2 bg-white shadow-2xl transform transition-transform duration-300 ${
						selectedCertificate ? 'translate-x-0' : 'translate-x-full'
					}`}
				>
					{selectedCertificate && (
						<div className="p-8 h-full overflow-y-auto">
							<button
								onClick={() => setSelectedCertificate(null)}
								className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
							>
								<FaTimes className="text-2xl" />
							</button>

							<div className="space-y-6">
								<h2 className="text-3xl font-bold text-gray-800">
									{selectedCertificate.title}
								</h2>

								<div className="space-y-4">
									<div className="flex items-center gap-2">
										<span className="font-semibold">Year:</span>
										<span className="text-blue-600">
											{selectedCertificate.year}
										</span>
									</div>

									<div className="flex items-center gap-2">
										<span className="font-semibold">Level:</span>
										<span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
											{selectedCertificate.level}
										</span>
									</div>

									<div className="flex items-center gap-2">
										<span className="font-semibold">Issuer:</span>
										<span className="text-gray-600">
											{selectedCertificate.issuer}
										</span>
									</div>
								</div>

								<div className="pt-4 border-t border-gray-200">
									<h3 className="text-xl font-semibold mb-3">Description</h3>
									<p className="text-gray-600 leading-relaxed">
										{selectedCertificate.description}
									</p>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>

			{/* Certificates Grid */}
			<div className="container mx-auto px-4 relative">
				<h2
					data-aos="fade-up"
					data-aos-duration="1000"
					className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-800 animated-underline inline-block mx-auto"
				>
					{certificates.title}
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{certificates.items.map((certificate, index) => (
						<div
							key={index}
							data-aos="zoom-in"
							data-aos-duration="1000"
							data-aos-delay={index * 100}
							className="certificate-card bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
						>
							{/* Image Container */}
							<div className="h-56 w-full relative overflow-hidden">
								{certificate.image ? (
									<img
										src={certificate.image}
										alt={`Certificate ${index + 1}`}
										className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-300"
									/>
								) : (
									<div className="w-full h-full flex items-center justify-center bg-gray-100">
										<FaCertificate className="text-gray-400 text-5xl" />
									</div>
								)}
							</div>

							{/* Card Content */}
							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-800 mb-2">
									{certificate.title}
								</h3>
								<p className="text-gray-600 mb-4 text-sm">
									{certificate.issuer}
								</p>
								<div className="flex justify-between items-center">
									<span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs">
										{certificate.year} • {certificate.level}
									</span>
									<button
										onClick={() => setSelectedCertificate(certificate)}
										className="text-blue-600 hover:text-blue-800 transition flex items-center gap-2 text-sm font-medium group"
									>
										View Details
										<FaArrowRight className="transition-transform group-hover:translate-x-1" />
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Certificate;
