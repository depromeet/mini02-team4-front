import React, { Component } from 'react';
import Navigation from './navbar/Navigation';
import KeywordMain from './keyword_page/keyword';
import Gifts from './recommend_page/GiftViewer';

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
/*   {
    'name': '친구들',
    'body': (<div> 친구들 페이지 입니다. </div>),
    'label': 'nav-friends',
  },
  {
    'name': '친구에게',
    'body': (<div> 친구에게 릴레이 소설/편지를 쓰거나, 공동 계좌번호를 적는 칸입니다.</div>),
    'label': 'nav-account',
  } */
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
