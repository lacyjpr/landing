import React, { Component } from 'react';
import './App.css';
import './styles/styles.scss';
import Header from './components/header';
import Home from './components/home';
import Features from './components/features';
import Advantages from './components/advantages';
import Testimonials from './components/testimonials';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Home />
        <Features />
        <Advantages />
        <Testimonials />
      </div>
    );
  }
}

export default App;
