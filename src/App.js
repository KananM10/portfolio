import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper.scss";

const App = () => {
	return (
		<React.Fragment>
			<Home />
			<Header />
			<About />
			<Projects />
			<Footer />
		</React.Fragment>
	);
};

export default App;
