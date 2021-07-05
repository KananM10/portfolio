import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Project from "./Project/Project";

import { projects } from "helpers/data";

import "./projects.css";

const Projects = () => {
	return (
		<div id="projects">
			<div className="proj_header">Projects</div>
			<div className="my_projects">
				<Swiper
					spaceBetween={50}
					slidesPerView={1}
					onSlideChange={() => console.log("slide change")}
					onSwiper={(swiper) => console.log(swiper)}
				>
					{projects.map((project, i) => (
						<SwiperSlide key={project.name}>
							<Project project={project} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Projects;
