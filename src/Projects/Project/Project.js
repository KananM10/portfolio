import React from 'react';
import bmp from '../../assets/bmp.png';
import budget from '../../assets/budget.png';
import gameLife from '../../assets/gameLife.png';
import image from '../../assets/image.png';
import './Project.css';


const project  =  (props) => { 

	let img = null;
	let overview = null;
	
	switch(props.project.image){
		case 'bmp':
			img = <img src={bmp} alt="bmp" className="image" />
			overview = <div className="overview_text">The aim of this project is to have you create a program that will take a signature stored in
BMP format and modify it to “watermark” the signature. The new image will have some text in morse in some position and having anothe color, but this change will be barely visible, so that only
people who know it is there and where to look for it will find it.</div>
			break;
		
		case 'budget':
			img = <img src={budget} alt="budget" className="image"/>
			overview = <div className="overview_text">This project serves to help manage your budget. User can add new transactions, and easily see all transactions in simple table.<br/> Moreover, user can search for a definite transaction by using filter on the left side of the website.<br/> In addition, user can see the total income sum, expense sum.</div>
			break;
		
		case 'gameLife':
			img = <img src={gameLife} alt="gameLife" className="image"/>
			overview = <div className="overview_text">This project based on John Conway's Game of Life. It has 2 versions, which are written on C language.<br/> First version is played on terminal, second version is made by using SDL feature, and is played on external window.</div>
			break;
		
		case 'image':
			img = <img src={image} alt="image_processing" className="image"/>
			overview = <div className="overview_text">This project serves to create new images by transforming the input image, and creates 7 new images. <br /><strong>From left to right :</strong> The original image, gray-scale, negative, motion-blur. <br /><strong>On the lower row</strong>, threshold,
permute, composed and gradient.</div>
			break;
		default:
			img = null;
	}

	return (
		<div className="project">
		<div className="img_place">
			{img}
		</div>
			<div className="overview">
				<div className="name">{props.project.name}</div>
				{overview}
			</div>
			<div className="anchor"><a href={props.project.url} target='_blank' rel="noopener noreferrer">Visit the source code</a></div>
		</div>
	);
}

export default (project);

			// <button className="anchor" onClick={() => {click(props.project.url)}}>View source code</button>
			// <a href={props.project.url} className="anchor">View source code</a>