import React, { useState, useEffect } from 'react';
import { Box, IconButton, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
	const aboveMobileScreen = useMediaQuery('(min-width:768px)');
	const [scroll, setScroll] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu visibility
	const menus = [
		{ key: 'Home', href: '#home' },
		{ key: 'Skills', href: '#skills' },
		{ key: 'Projects', href: '#projects' },
		{ key: 'About', href: '#about' },
		{ key: 'Contact', href: '#contact' }
	];

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScroll(true);
			} else {
				setScroll(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scroll ? 'bg-black shadow-md' : ''}`}>
			<Box className={`py-5 px-10 flex ${aboveMobileScreen ? 'justify-start' :'justify-between'}  items-center gap-x-10`}>
				<Box className="flex items-center">
					<div className={`w-10 h-10 bg-black flex items-center justify-center transform rotate-45 ${scroll ? 'bg-white' : ''}`}>
						<div className={`transform -rotate-90 font-bold text-lg ${scroll ? 'text-black' : 'text-slate-100'}`}>
							RP
						</div>
					</div>
				</Box>

				{aboveMobileScreen ? (
					<Box className="space-x-8">
						{menus.map((menu) => (
							<AnchorLink
								key={menu.key}
								href={menu.href}
								className={`font-bold hover:px-3 hover:py-1 uppercase tracking-wider ${scroll ? 'hover:bg-slate-100 hover:text-black text-slate-100' : 'hover:bg-black hover:text-slate-100'}`}
							>
								{menu.key}
							</AnchorLink>
						))}
					</Box>
				) : (
					<>
						<IconButton
							onClick={() => setMenuOpen(!menuOpen)}
							className="block md:hidden"
						>
								{menuOpen ? <CloseIcon /> : <MenuIcon sx={{ color:'#7393B3',fontWeight:'bold',fontSize:'35px'}} />}
						</IconButton>
						{menuOpen && (
							<Box
								className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center py-4"
								sx={{ display: 'flex', flexDirection: 'column' }}
							>
								{menus.map((menu) => (
									<AnchorLink
										key={menu.key}
										href={menu.href}
										className="py-2 font-bold uppercase hover:bg-slate-700"
										onClick={() => setMenuOpen(false)}
									>
										{menu.key}
									</AnchorLink>
								))}
							</Box>
						)}
					</>
				)}
			</Box>
		</nav>
	);
};

export default Navbar;
