import Header from './ui/Header';
import Hero from './Components/Hero';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './Components/About';
import Experience from './Components/Experience';
import Certificate from './Components/Certificate';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<Header />
			<Hero />
			<About />
			<Experience />
			<Certificate />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
