function About() {
	return (
		<section id="about" class="py-20 md:py-32 bg-white overflow-hidden">
			<div class="container mx-auto px-4">
				<div class="flex flex-col md:flex-row items-center gap-16">
					<div class="md:w-1/3" data-aos="fade-right" data-aos-duration="1000">
						<div class="relative">
							<div class="rounded-full overflow-hidden w-64 h-64 mx-auto shadow-xl relative z-10">
								<img
									src="/assets/japan-background-digital-art.jpg"
									alt="ALBRAA ALMASHWAKI"
									class="w-full h-full object-cover"
								/>
							</div>
							<div class="w-64 h-64 rounded-full bg-blue-100 absolute top-5 left-5 z-0"></div>
							<div class="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-full opacity-20"></div>
							<div class="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600 rounded-full opacity-10"></div>
						</div>
					</div>
					<div class="md:w-2/3" data-aos="fade-left" data-aos-duration="1000">
						<h2 class="text-3xl md:text-4xl font-bold mb-8 text-gray-800 animated-underline">
							About Me
						</h2>
						<p class="text-lg text-gray-600 mb-6 leading-relaxed">
							I am ALBRAA ALMASHWAKI, a seasoned physiotherapist with extensive
							experience in rehabilitation therapy and sports medicine. My
							practice focuses on evidence-based treatments tailored to each
							patient's unique needs, combining traditional physiotherapy
							techniques with modern approaches to achieve optimal results.
						</p>
						<p class="text-lg text-gray-600 mb-8 leading-relaxed">
							With expertise in manual therapy, exercise prescription, and
							functional rehabilitation, I help patients recover from injuries,
							manage chronic conditions, and improve their overall quality of
							life through personalized care plans and ongoing support.
						</p>
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
							<div class="bg-gray-50 p-6 rounded-xl shadow-sm transition-all hover:shadow-md">
								<div class="flex items-center mb-4">
									<div class="bg-blue-600 p-3 rounded-lg text-white mr-4">
										<i class="fas fa-medal"></i>
									</div>
									<h3 class="font-bold text-xl text-gray-800">
										Specializations
									</h3>
								</div>
								<ul class="text-gray-600 space-y-2">
									<li class="flex items-center">
										<i class="fas fa-check-circle text-blue-600 mr-2"></i>
										Sports Rehabilitation
									</li>
									<li class="flex items-center">
										<i class="fas fa-check-circle text-blue-600 mr-2"></i>
										Manual Therapy
									</li>
									<li class="flex items-center">
										<i class="fas fa-check-circle text-blue-600 mr-2"></i>
										Post-operative Rehabilitation
									</li>
									<li class="flex items-center">
										<i class="fas fa-check-circle text-blue-600 mr-2"></i>
										Chronic Pain Management
									</li>
								</ul>
							</div>
							<div class="bg-gray-50 p-6 rounded-xl shadow-sm transition-all hover:shadow-md">
								<div class="flex items-center mb-4">
									<div class="bg-blue-600 p-3 rounded-lg text-white mr-4">
										<i class="fas fa-graduation-cap"></i>
									</div>
									<h3 class="font-bold text-xl text-gray-800">Education</h3>
								</div>
								<ul class="text-gray-600 space-y-2">
									<li class="flex items-center">
										<i class="fas fa-check-circle text-blue-600 mr-2"></i>
										Bachelor of Physiotherapy
									</li>
									<li class="flex items-center">
										<i class="fas fa-check-circle text-blue-600 mr-2"></i>
										Master's in Sports Rehabilitation
									</li>
									<li class="flex items-center">
										<i class="fas fa-check-circle text-blue-600 mr-2"></i>
										Certified Orthopedic Specialist
									</li>
								</ul>
							</div>
						</div>
						<a
							href="/assets/Albaraa Almashwakhi CV.pdf"
							target="_blank"
							id="view-resume-2"
							class="inline-flex items-center btn-primary-effect bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition shadow-lg"
						>
							<i class="fas fa-file-pdf mr-2"></i> View Resume
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
