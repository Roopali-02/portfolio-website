import React from 'react';
import { Box, Divider, Grid, Button, Paper, useMediaQuery } from '@mui/material';
import { projectData } from '../data/index';
const Projects = () => {
  const aboveSmallScreen = useMediaQuery('(min-width:768px)');
  return (
    <Box id="projects" className="min-h-screen px-24 py-12 bg-slate-100">
      <Box className="font-bold text-4xl mb-8">Projects</Box>
      <Grid container spacing={4}>
        {projectData.map(project => (
          <Grid item xs={12} sm={6} md={3} lg={3} key={project.id}>
            <Paper elevation={3} className='flex flex-col h-full p-1'>
              <Box className="p-1" sx={{ background: '#739072' }}>
                <img src={project.image}  alt="project" className="w-full h-full object-cover"/></Box>
              <Box className="p-3 relative" sx={{ flexGrow: 1 }}>
                <Box className='text-sm mt-2 uppercase text-cyan-700 font-bold text-center'>{project.title}</Box>
                <Divider sx={{ margin: '10px 0' }} />
                <Box className='mb-4 mt-2'>
                <Box sx={{ fontSize: '13px' }} className='font-bold uppercase'>Description</Box>
                <Box component='span' className='text-neutral-400 font-medium' sx={{fontSize:'15px'}}>{project.description}</Box>
                </Box>
                <Box className='mt-4 mb-24'>
                <Box sx={{ fontSize: '13px' }} className='font-bold uppercase'>Highlights</Box>
                <Box component='span' className='text-neutral-400 font-medium' sx={{ fontSize: '15px' }}>{project.highlight}</Box>
                </Box>
                <Box className={`mt-4 flex ${aboveSmallScreen ? 'flex-row justify-between gap-1' :'flex-col justify-start gap-2'}  w-full absolute bottom-4 left-0 right-0 p-3`}>
                  <Button variant='contained' href={project.projectLink} target="_blank" rel="noopener noreferrer" sx={{ textTransform: 'none',background: '#739072'}}>
                    View Project
                  </Button>
                  <Button
                    variant='contained'
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textTransform: 'none', background: '#739072' }}
                  >
                    View Code
                  </Button>
                </Box>
              </Box>
          </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
