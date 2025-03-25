import { useState } from 'react';
import { FaHeartbeat } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import data from '../data/data.json'; // Adjust import path as needed

function Header() {
	const [showMenu, setShowMenu] = useState(false);

	const handleMenu = () => {
		setShowMenu((prev) => !prev);
	};

	return (
		<header className="sticky top-0 z-50 bg-white shadow-md">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<a
					href="#"
					className="text-xl md:text-2xl font-bold text-blue-600 flex items-center space-x-2"
					aria-label="Home"
				>
					<FaHeartbeat className="text-blue-600" />
					<span>
						<span className="text-gray-800">{data.header.name.prefix}</span>{' '}
						{data.header.name.suffix}
					</span>
				</a>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex space-x-8" aria-label="Main navigation">
					{data.header.navLinks.map((link) => (
						<a
							key={link.id}
							href={link.href}
							className="nav-item text-gray-600 hover:text-blue-600 transition-colors duration-200"
						>
							{link.title}
						</a>
					))}
				</nav>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
					onClick={handleMenu}
					aria-label="Toggle navigation menu"
					aria-expanded={showMenu}
				>
					<RxHamburgerMenu className="text-2xl" />
				</button>
			</div>

			{/* Mobile Navigation */}
			<div
				className={`md:hidden overflow-hidden transition-all duration-300 ease-linear ${
					showMenu ? 'max-h-96' : 'max-h-0'
				}`}
				aria-hidden={!showMenu}
			>
				<div className="container mx-auto px-4 py-3 bg-white border-t border-gray-100">
					{data.header.navLinks.map((link) => (
						<a
							key={link.id}
							href={link.href}
							className="block py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 border-b border-gray-100 last:border-0"
							onClick={() => setShowMenu(false)}
						>
							{link.title}
						</a>
					))}
				</div>
			</div>
		</header>
	);
}

export default Header;
