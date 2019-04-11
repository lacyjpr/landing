import React, { Component } from 'react';
import './App.css';
import './styles/styles.scss';
import Header from './components/header';
import Home from './components/home';
import Features from './components/features';
import Advantages from './components/advantages';
import Testimonials from './components/testimonials';
import Parting from './components/parting';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Home />
        <Features />
        <Advantages />
        <Testimonials />
        <Parting />
      </div>
    );
  }
}

export default App;
