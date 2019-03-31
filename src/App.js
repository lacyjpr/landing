import React, { Component } from 'react';
import './App.css';
import './styles/styles.scss';
import Header from './components/header';
import Home from './components/home';
import Features from './components/features';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Home />
        <Features />
      </div>
    );
  }
}

export default App;
