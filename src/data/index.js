
import portfolio from '../assets/portfolio.png';
import pokemon from '../assets/pokemonDash.png';
import project2 from '../assets/project2.png';
import antd from '../assets/antd.png';
import material from '../assets/material.png';
import html from '../assets/html.png';
import reactLogo from '../assets/react.png';
import newTail from '../assets/newTail.png';
import css from '../assets/css.png';
import jslog from '../assets/jslogo.png';
import vscode from '../assets/vscode.png';
import gitlogo from '../assets/gitlogo.png';
import boot from '../assets/boot.png';
import api from '../assets/api.png';
import screens from '../assets/screens.png';

export const timelineData = [
  {
    id: 1,
    workplace: 'Frontend developer at OPSPL',
    time: '2022 - 2024'
  },
  {
    id: 2,
    workplace: 'Executive at Siemens',
    time: '2017 - 2020'
  },
  {
    id: 3,
    workplace: "Bachelor's Degree in Electronics & Telecommunication Engineering",
    time: '2014 - 2017'
  }
]

export const projectData = [
  {
    id: 1,
    title: 'Pokemon - info',
    description: 'An application that fetches and displays Pokémon data from the PokeAPI, featuring search and filter options, evolution chains, and detailed Pokémon information.',
    highlight: 'Use of React, Material-UI (MUI), and integration with external APIs.',
    projectLink: 'https://pokemons-roan.vercel.app/',
    repoLink: 'https://github.com/Roopali-02/pokemon-info',
    image: pokemon
  },
  {
    id: 2,
    title: 'Fitness - dashboard',
    description: 'A fitness dashboard that visualizes exercise data with various charts and allows theme toggling (light and dark modes).',
    highlight: 'Use of React, Material-UI (MUI), Tailwind CSS, Nivo charts, and feature like theme switching.',
    projectLink: 'https://fitness-dashboard-lake.vercel.app/',
    repoLink: 'https://github.com/Roopali-02/fitness-dashboard',
    image: project2
  },
  {
    id: 3,
    title: 'Personal - portfolio',
    description: 'My personal portfolio showcasing skills, projects, and experience, built using React,MUI and Tailwind CSS.',
    highlight: 'Modern layout and interactive elements.',
    projectLink: 'https://portfolio-website-obsidian.vercel.app/',
    repoLink: '',
    image: portfolio,
  }
];

export const skillsData = [
  { category: 'Languages', skills: [{ tech: 'HTML5', src: html }, { tech: 'CSS', src: css }, { tech: 'JavaScript', src: jslog }] },
  { category: 'Frameworks & Libraries', skills: [{ tech: 'React', src: reactLogo }, { tech: 'Tailwind CSS', src: newTail }, { tech: 'Material-UI', src: material }, { tech: 'Antd', src: antd }, { tech: 'Bootstrap', src: boot }] },
  { category: 'Tools & Platforms', skills: [{ tech: 'VSCode', src: vscode }, { tech: 'Git', src: gitlogo }] },
  { category: 'Other', skills: [{ tech: 'Responsive Design', src: screens }, { tech: 'API Integration', src: api }] },
];

export const proficiencyData = [
  {
    technology: 'React',
    percent: 70,
    icon: reactLogo
  },
  {
    technology: 'Javascript',
    percent: 65,
    icon: jslog
  },
  {
    technology: 'HTML5',
    percent: 80,
    icon: html
  },
  {
    technology: 'CSS3',
    percent: 70,
    icon: css
  }
]

export const softSkills = [
  'Problem-Solving',
  'Adaptability',
  'Time Management',
  'Critical Thinking',
  'Work Ethic',
  'Creativity',
  'Flexibility'
];