import React, { Component } from 'react';
import './App.css';
import './styles/styles.scss';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
      </div>
    );
  }
}

export default App;
