import React, { Component } from 'react';
import Navigation from './navbar/Navigation';
import KeywordMain from './keyword_page/keyword';
import Gifts from './gifts_page/giftspage';

const tabs=[
  {
    'name': '키워드',
    'body': KeywordMain, 
    'label': 'nav-keywords',
  },
  {
    'name': '추천 선물',
    'body': Gifts,
    'label': 'nav-gifts',
  },
   {
    'name': '친구들',
    'body': 'div',
    'label': 'nav-friends',
  },
  {
    'name': '친구에게',
    'body': 'div', 
    'label': 'nav-account',
  } 
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Navigation tabs={tabs}></Navigation>
      </div>
    );
  }
}

export default App;
