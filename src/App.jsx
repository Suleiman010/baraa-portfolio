import Header from './ui/Header';
import Hero from './Components/Hero';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './Components/About';

function App() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<Header />
			<Hero />
			<About />
		</>
	);
}

export default App;
