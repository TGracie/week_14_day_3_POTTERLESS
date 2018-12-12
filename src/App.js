import React, { Component } from 'react';
import Page from './containers/Page.js';

import './App.css';

class App extends Component {
  render() {
    const categories = [
      {name: "All", url: "http://hp-api.herokuapp.com/api/characters"},
      {name: "Students", url: "http://hp-api.herokuapp.com/api/characters/students"},
      {name: "Staff", url: "http://hp-api.herokuapp.com/api/characters/staff"}
    ]
    return (
      <Page categories={categories}/>
    );
  }
}

export default App;
