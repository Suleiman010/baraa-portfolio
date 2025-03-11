import { FaAngleDoubleDown } from 'react-icons/fa';
import ResumeButton from '../ui/ResumeButton';

function Hero() {
	return (
		<section className="hero-bg h-screen flex items-center justify-center text-white relative">
			<div className="container mx-auto px-4 text-center relative z-10">
				<h1
					data-aos="fade-down"
					data-aos-duration="1000"
					className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
				>
					ALBRAA ALMASHWAKI
				</h1>
				<p
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-delay="200"
					className="text-xl md:text-2xl mb-10 leading-relaxed"
				>
					Dedicated Physiotherapist & Rehabilitation Specialist
				</p>
				<div
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-delay="400"
					className="flex flex-col sm:flex-row justify-center gap-5"
				>
					<a
						href="#about"
						className="btn-primary-effect bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition shadow-lg"
					>
						Learn More
					</a>
					<ResumeButton />
				</div>
			</div>

			{/* Scroll Down Button */}
			<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center">
				<a href="#about" className="flex flex-col items-center">
					<span className="text-sm mb-2">Scroll Down</span>
					<FaAngleDoubleDown className="text-xl animate-bounce" />
				</a>
			</div>
		</section>
	);
}

export default Hero;
