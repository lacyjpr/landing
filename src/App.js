import React, { Component } from 'react';
import './App.css';
import './styles/styles.scss';
import Header from './components/header';
import Home from './components/home';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
