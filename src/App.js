import React, { Component } from 'react';
import Navigation from './navbar/Navigation';
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
    'name': '생일 등록',
    'body': KeywordMain, 
    'label': 'nav-keywords',
  },
  {
    'name': '키워드 등록',
    'body': Gifts,
    'label': 'nav-gifts',
  },
   {
    'name': '선물 추천',
    'body': Friends,
    'label': 'nav-friends',
  },
  {
    'name': '참여자 정보',
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
