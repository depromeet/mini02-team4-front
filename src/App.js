import React, { Component } from 'react';
import Navigation from './navbar/Navigation';
/* import Navigation from './navbar/ScrollNavigation'; */
import KeywordMain from './keyword_page/keyword';
import Gifts from './gifts_page/giftspage';
import Friends from './friends/friends';
import Main from './mainpage/Main';
import './include/bootstrap';

const tabs=[
  {
    'name': 'ABOUT',
    'body': Main,
    'label': 'nav-main',
  },
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
    'body': Friends,
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
      <Navigation tabs={tabs}></Navigation>
    );
  }
}

export default App;
