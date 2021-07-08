import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, EffectFade } from "swiper";
import Project from "./Project/Project";

import { projects } from "helpers/data";

import "./projects.scss";

SwiperCore.use([Pagination, Navigation, EffectFade]);

const Projects = () => {
	return (
		<div id="projects">
			<div className="proj_header">Projects</div>
			<div className="my_projects">
				<Swiper
					spaceBetween={50}
					slidesPerView={3}
					// navigation
					// pagination
					id="projects-swiper"
					// onInit={(swiper) => console.log("Init: ", swiper)}
					// onSlideChange={(swiper) => console.log("Slide change index: ", swiper.activeIndex)}
				>
					{projects.map((project) => (
						<SwiperSlide key={project.name} tag="li">
							<Project project={project} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Projects;
