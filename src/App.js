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
import React from "react"

import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Footer from "./components/Footer/Footer"

import "./App.scss"

import "bootstrap/dist/css/bootstrap.min.css"
import "swiper/swiper.scss"

const App = () => {
	return (
		<div className="App">
			<Home />
			<Header />
			<About />
			<Projects />
			<Footer />
		</div>
	)
}

export default App
