import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

function Header() {
	const [showMenu, setShowMenu] = useState(false);
	const handleMenu = (e) => {
		setShowMenu(!showMenu);
	};

	return (
		<header class="sticky top-0 z-50 bg-white shadow-md">
			<div class="container mx-auto px-4 py-4 flex justify-between items-center">
				<a
					href="#"
					className="text-xl md:text-2xl font-bold text-blue-600 flex items-center space-x-2"
				>
					<i class="fas fa-heartbeat text-blue-600"></i>
					<span>
						<span class="text-gray-800">ALBRAA</span> ALMASHWAKI
					</span>
				</a>
				<nav className={' hidden md:flex space-x-8'}>
					<a
						href="#about"
						class="nav-item text-gray-600 hover:text-blue-600 transition"
					>
						About
					</a>
					<a
						href="#experience"
						class="nav-item text-gray-600 hover:text-blue-600 transition"
					>
						Experience
					</a>
					<a
						href="#certificates"
						class="nav-item text-gray-600 hover:text-blue-600 transition"
					>
						Certificates
					</a>
					<a
						href="#contact"
						class="nav-item text-gray-600 hover:text-blue-600 transition"
					>
						Contact
					</a>
				</nav>
				<button
					class="md:hidden text-gray-600 focus:outline-none"
					id="menu-toggle"
				>
					<RxHamburgerMenu className="text-xl" onClick={handleMenu} />
				</button>
			</div>

			<div
				className={`md:hidden ${
					showMenu ? '' : 'hidden'
				} bg-white border-t border-gray-100`}
			>
				<div class="container mx-auto px-4 py-3 flex flex-col space-y-3">
					<a
						href="#about"
						class="text-gray-600 hover:text-blue-600 transition py-2 border-b border-gray-100"
					>
						About
					</a>
					<a
						href="#experience"
						class="text-gray-600 hover:text-blue-600 transition py-2 border-b border-gray-100"
					>
						Experience
					</a>
					<a
						href="#certificates"
						class="text-gray-600 hover:text-blue-600 transition py-2 border-b border-gray-100"
					>
						Certificates
					</a>
					<a
						href="#contact"
						class="text-gray-600 hover:text-blue-600 transition py-2"
					>
						Contact
					</a>
				</div>
			</div>
		</header>
	);
}

export default Header;
