import Project from './Project/Project';
import React from 'react';
import '../App.css';
import './projects.css';
// import ColoredLine from '../ColoredLine';

const Projects = () => {

	const projects = [ 
		{name: 'Game of Life', image: 'gameLife', url: 'https://github.com/KananM10/Game_Of_Life'},
		{name: 'Budget Manager', image: 'budget', url: 'https://github.com/KananM10/budget_manager'},
		{name: 'Image Processing', image: 'image', url: 'https://github.com/KananM10/Data-Structures-and-Algorithms/tree/master/image_processing'},
		{name: 'BitMap Processing', image: 'bmp', url: 'https://github.com/KananM10/Data-Structures-and-Algorithms/tree/master/bmp_project'},
		{name: 'Spotify App', image: 'spotify', url: 'https://github.com/KananM10/spotify_app'}
	];

	return (
		<div id="projects">
			<div className="proj_header">Projects</div>
			<div className="my_projects">
				{	
					projects.map(project => (
						<Project key={project.name} project={project} />
					))
				}
			</div>
		</div>
	);
}

export default Projects;
