import React from 'react';
import './App.css';
import Home from './Home/Home';
import Header from './Header/Header';
import About from './About/About';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';


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
}

export default App;
