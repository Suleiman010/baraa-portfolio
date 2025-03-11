import Header from './ui/Header';
import Hero from './Components/Hero';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './Components/About';
import Experience from './Components/Experience';
import Certificate from './Components/Certificate';

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
		</>
	);
}

export default App;
