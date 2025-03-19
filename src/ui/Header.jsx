import { useState } from 'react';
import { FaHeartbeat } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';

function Header() {
	const [showMenu, setShowMenu] = useState(false);
	const handleMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<header className="sticky top-0 z-50 bg-white shadow-md">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<a
					href="#"
					className="text-xl md:text-2xl font-bold text-blue-600 flex items-center space-x-2"
				>
					<FaHeartbeat className="text-blue-600" />
					<span>
						<span className="text-gray-800">ALBRAA</span> ALMASHWAKI
					</span>
				</a>
				<nav className={'hidden md:flex space-x-8'}>
					<a
						href="#about"
						className="nav-item text-gray-600 hover:text-blue-600 transition"
					>
						About
					</a>
					<a
						href="#experience"
						className="nav-item text-gray-600 hover:text-blue-600 transition"
					>
						Experience
					</a>
					<a
						href="#certificates"
						className="nav-item text-gray-600 hover:text-blue-600 transition"
					>
						Certificates
					</a>
					<a
						href="#contact"
						className="nav-item text-gray-600 hover:text-blue-600 transition"
					>
						Contact
					</a>
				</nav>
				<button
					className="md:hidden text-gray-600 focus:outline-none"
					id="menu-toggle"
					onClick={handleMenu}
				>
					<RxHamburgerMenu className="text-xl" />
				</button>
			</div>

			<div
				className={`md:hidden ${
					showMenu ? '' : 'hidden'
				} bg-white border-t border-gray-100`}
			>
				<div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
					<a
						href="#about"
						className="text-gray-600 hover:text-blue-600 transition py-2 border-b border-gray-100"
					>
						About
					</a>
					<a
						href="#experience"
						className="text-gray-600 hover:text-blue-600 transition py-2 border-b border-gray-100"
					>
						Experience
					</a>
					<a
						href="#certificates"
						className="text-gray-600 hover:text-blue-600 transition py-2 border-b border-gray-100"
					>
						Certificates
					</a>
					<a
						href="#contact"
						className="text-gray-600 hover:text-blue-600 transition py-2"
					>
						Contact
					</a>
				</div>
			</div>
		</header>
	);
}

export default Header;
