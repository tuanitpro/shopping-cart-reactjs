import React, { Component } from 'react';
import axios from 'axios';
import Footer from './components/Footer';
import Header from './components/Header';
import './scss/style.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
