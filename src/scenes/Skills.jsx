import React from 'react';
import { Box, Grid, Chip, LinearProgress, useMediaQuery, Paper, Avatar } from '@mui/material';
import { skillsData, proficiencyData, softSkills } from '../data/index';
const Skills = () => {
	const aboveMobileScreen = useMediaQuery('(min-width:600px)');

	return (
		<Box id="skills" className={`${aboveMobileScreen ?' px-24':'px-8'} bg-slate-50`}>
			<Box className="font-bold text-4xl mb-5">Technical Skills</Box>
			<Grid container spacing={4}>
				{skillsData.map((category) => (
					<Grid item xs={12} sm={6} md={4} lg={3}  key={category.category}>
						<Paper className={`px-6 py-3 h-48 overflow-auto`} sx={{ background:'#F5F7FA'}}>
							<Box className="font-semibold mb-4 mt-2 text-lg bg-slate-100" sx={{ color:'#0083B0'}}>{category.category}</Box>
							<Box className="flex flex-wrap gap-2">
								{category.skills.map((skill) => (
									<Chip key={skill.tech} label={skill.tech} className="" avatar={<Avatar src={skill.src} />} 
										sx={{
											background: 'linear-gradient(to right, #ece9e6, #ffffff)',
											color: '#606c88', 
											'& .MuiChip-avatar': {
												width: '25px',
												height: '25px',
											},
											'& .MuiChip-label': {
												fontWeight: '600',
											},
										}}
									/>
								))}
							</Box>
						</Paper>
					</Grid>
				))}
			</Grid>
			<Box class='w-full my-6 flex gap-x-2'>
				<Box className='basis-2/4'>
					<Box className={`font-bold ${aboveMobileScreen ?'text-4xl':'text-2xl'} mb-5`}>Proficiency</Box>
					{
							proficiencyData.map((tech)=>(
								<Box className={`w-full mb-2`} key={tech.icon}>
									<Box className="mb-1 flex items-center gap-x-3">
										<Box><img src={tech.icon} className='h-11 w-11' alt='icon'/></Box>
										<Box className="font-bold text-base tracking-wider uppercase" sx={{ color: '#507882' }}>{tech.technology}</Box>
									</Box>
									<Box className='flex justify-between items-center gap-x-3 w-full'>
										<Box className='w-full'>
											<LinearProgress 
												variant="determinate" value={tech.percent} className='w-full' 
												sx={{
													height: '6px', 
													backgroundColor: '#dcdcdc', // Background color of the track
													'& .MuiLinearProgress-bar': {
														backgroundColor: '#AFB3CE', // Color of the filled bar
													},
												}} 
											/>
											</Box>
										<Box className='font-semibold text-lg' sx={{ color: '#507882' }}>{`${tech.percent}%`}</Box>
									</Box>
								</Box>
							))
					}
				</Box>
				<Box className="basis-2/4">
					<Box className={`font-bold ${aboveMobileScreen ? 'text-4xl' : 'text-2xl'} mb-5`}>Soft Skills</Box>
					<Box className="flex flex-wrap justify-start items-start gap-5 mt-10 p-4">
					{
						softSkills.map((skill,index)=>(
							<Chip key={index} label={skill} 
							sx={{
								background: '#A9CDD7',
								color: '#606060', 
								'& .MuiChip-label': {
									fontWeight: '600',
								},
								}}/>
							))
					}
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default Skills