import React, { Component } from 'react';
import Page from './containers/Page.js';

import './App.css';

class App extends Component {
  render() {
    const categories = [
      {name: "All", url: "http://hp-api.herokuapp.com/api/characters"}
    ]
    return (
      <Page categories={categories}/>
    );
  }
}

export default App;
