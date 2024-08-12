import React from 'react';
import { Box, Typography, Grid, Paper, useMediaQuery } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import itsme from '../assets/me.jpg';
import { timelineData } from '../data/index';

const AboutMe = () => {
	const aboveMobileScreen = useMediaQuery('(min-width:768px)');
	return (
		<Box id="about" className={`${aboveMobileScreen?'px-24':'px-8'} py-12 bg-slate-100`}>
			<Box className="font-bold text-4xl mb-8 flex gap-x-2">About Me</Box>
			<Grid container spacing={4}>
				<Grid item xs={12} md={4} className="flex justify-center items-center">
					<img alt="me" src={itsme} className="w-full h-auto" />
				</Grid>
				<Grid item xs={12} md={8}>
					<Box className={`font-bold text-2xl mb-5`}>About Myself</Box>
					<Box className="font-semibold mb-1 flex gap-1 text-neutral-500">Hello, I am<Box component='span' className='text-lg' sx={{ color: '#ff5e62' }}>Roopali...</Box></Box>
					<Box className="mb-3 text-neutral-600">
						I'm a frontend developer specializing in React and Material-UI. I enjoy creating beautiful and functional user interfaces.
						I have a passion for learning new technologies and continuously improving my skills.
						My journey in web development started 4 years ago, and I've been honing my skills in React,
						JavaScript, and modern web technologies ever since.
					</Box>
					<Box className={`font-bold text-2xl mb-5`}>My Journey</Box>
					<Timeline position='alternate'>
					{
						timelineData.map((el,index)=>(
							<TimelineItem key={el.id}>
								<TimelineSeparator>
									<TimelineDot color='secondary' />
									<TimelineConnector />
									{index === timelineData.length - 1 && <TimelineDot color='secondary' />}
								</TimelineSeparator>
								<TimelineContent>
									<Paper elevation={2} className="p-4">
										<Typography variant='subtitle2' className='mb-2'>{el.workplace}</Typography>
										<Typography variant='caption' sx={{ color: '#909090',fontSize:'13px' }}>{el.time}</Typography>
									</Paper>
								</TimelineContent>
							</TimelineItem>
						))
					}
					</Timeline>
				</Grid>
			</Grid>
		</Box>
	);
};

export default AboutMe;
