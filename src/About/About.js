import React from 'react';
import Data from '../Data/Data';
import './about.css';
import Me from '../assets/mika.jpg';


const About = () => {

	const pr_languages = [
		{name: 'C', skill: 75},
		{name: 'JavaScript', skill: 75},
		{name: 'React.js', skill: 75},
		{name: 'Java', skill: 50},
		{name: 'Python', skill: 50},
		{name: 'HTML', skill: 80},
		{name: 'CSS', skill: 70},
		{name: 'PHP', skill: 60},
		{name: 'Git', skill: 60},
		{name: 'MySQL', skill: 50}
	];

	const languages = [
		{name: 'Azerbaijani', skill: 100},
		{name: 'Russian', skill: 100},
		{name: 'English', skill: 70},
		{name: 'French', skill: 50}
	];



  return (

	<div id="about">
		<div className="story">
            <figure className="story__shape">
                <img className="story__img" 
                							sizes="(max-width:900px) 28vw,(max-width:600px) 38vw, 300px"
                							alt="Mika" 
                							src={Me} />
            </figure>
            <div className="story__text">
                <h4 className="">Kanan Mikayilov</h4>
                <p>Highly motivated 4<sup>th</sup> year Computer Science student at Azerbaijani-French University.</p>
            </div>
        </div>
        <div className="skills">
	        <div className="skills_header">Skills</div>
    		<Data data={pr_languages} type="programming_languages" />
    		<Data data={languages} type="social_languages" />
		</div>
	</div>

  );
}

export default About;
