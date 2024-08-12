import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import itsme from '../assets/itsme.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Home = () => {
	const aboveMobileScreen = useMediaQuery('(min-width:768px)');
	const isWithinRange = useMediaQuery('(min-width:768px) and (max-width:1024px)');

	return (
		<Box id="home" className=" px-8 z-40 pt-28 pb-10">
			<Box className={`flex ${aboveMobileScreen ? 'justify-center items-center' :'items-start'}  bg-slate-100 p-6 ${aboveMobileScreen?'flex-row':'flex-col'}`}>
				<Box className='flex flex-col basis-1/2 gap-3 pr-3'>
					<h1 className={`${aboveMobileScreen?'text-5xl':'text-3xl'} font-bold text-gray-900`}>Hi, I'm Roopali</h1>
					<h2 className="text-2xl text-gray-700 ">Frontend Developer</h2>
					<p className={`mb-2 text-neutral-600 ${aboveMobileScreen?'w-4/5':'w-full'}`}>
						Crafting beautiful and functional user experiences is my passion.
						With a strong foundation in React and a knack for creating
						user-friendly designs, I strive to build applications that are not only
						visually appealing but also highly intuitive. 
						I am always eager to learn and innovate in the world of web development.
					</p>
					<AnchorLink href="#contact"><Box component='button' className='bg-black text-white w-28 p-1.5'>Contact Me</Box></AnchorLink>	
				</Box>
				{
					aboveMobileScreen ?
						<Box className="flex justify-center items-center">
						<Box className={`relative z-0 before:absolute before:-top-6 before:-left-8 before:w-full ${isWithinRange ? 'before:max-w-[370px]' : 'before:max-w-[420px]'}  before:h-full before:border-4 before:border-slate-200  before:z-[-1] before:bg-black basis-1/2 flex-grow mt-5 ml-12`}>
								<img src={itsme} alt='pic' className={`${isWithinRange ? 'max-w-[480px] max-h-[480px]' :'max-w-[580px] max-h-[550px]'} object-contain`}></img>
						</Box>
						</Box>
						:
						<Box className='mt-4 flex justify-center items-center'><img src={itsme} alt='pic' className={`w-full h-auto max-w-full max-h-full object-contain`}></img></Box>
				}
			</Box>
		</Box>
	)
}

export default Home