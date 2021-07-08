import React from "react";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";

import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper.scss";
import "./App.scss";

const App = () => {
	return (
		<div className="App">
			<Home />
			<Header />
			<About />
			<Skills />
			<Projects />
			<Footer />
		</div>
	);
};

export default App;
