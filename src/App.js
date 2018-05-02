import React, { Component } from 'react';
import TagMain from './keyword_page/Tagging';
import './navbar/Navigation';
import Navigation from './navbar/Navigation';
import Gifts from './recommend_page/GiftViewer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Navigation></Navigation>
        <TagMain></TagMain>
        <Gifts></Gifts>
      </div>
    );
  }
}

export default App;
