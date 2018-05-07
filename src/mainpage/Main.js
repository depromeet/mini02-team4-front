import React, {Component} from 'react';
import './main.css';
import logo from '../logo.svg';
import cakeimage from '../images/cake.png';
import inputimage from '../images/imput.png';
import giftimage from '../images/gift.png';
import buttonimage from '../images/button.png';

const menucardItems = [
    {
        'name':'D-Day 정보 등록',
        'icon': cakeimage,
        'desc': ['생일인 주인공의 정보와 날짜를', '등록해주세요'],
        'style': {'margin-left':'297px', 'margin-top':'29px'},
        'substyle': {'margin-top':'24px'},
    },
    {
        'name':'관심 키워드 입력',
        'icon': inputimage,
        'desc': ['생일 주인공의 관심 키워드를', '태그해주세요'],
        'style': {'margin-left':'154px', 'margin-top':'26px'},
        'substyle': {'margin-top':'18px'},
    },
    {
        'name':'관련 선물 추천',
        'icon': giftimage,
        'desc': ['키워드와 관련된 선물을 카테고리 별로', '추천해 드릴게요'],
        'style': {'margin-left':'132px', 'margin-top':'25px'},
        'substyle': {'margin-top':'22px'},
    },
];
class MenuCard extends Component {
    render() {
        const item = this.props.item;
        const img = item.icon;
        const title = item.name;
        const desc = item.desc;

        return (
            <div className='menucard' style={item.style}>
                <img src={img} alt='menu img'
                style={{display:'inline-block'}}>
                </img>
                <p class='desc-title' style={item.substyle}>{title}</p>
                <p class='desc-txt'>{desc.map((val, idx, arr) => {
                    return (
                        <span>
                            {idx!==0?<br />:''}
                            {val}
                        </span>
                    );
                })}</p>
            </div>
        );
    }
}
class MainDesc extends Component {
    render() {
        return (
            <React.Fragment>
                {menucardItems.map((val,idx,arr) => (
                    <MenuCard item={val}></MenuCard>
                ))}
            </React.Fragment>
        );
    }
}
class MainJumbotron extends Component {
    render() {
        return (
            <div id='main-jumbotron' className='jumbotron-fluid'>
                <div id='jumbo-text'>
                    <div id='tify-plan' className=''>
                        다가오는<br/>
                        그의 생일,<br/>
                        아직도 선물때문에<br/>
                        고민하니?<br/>
                    </div>
                    <div className='hr-custom'></div>
                    <p id='tify-desc'>신개념 맞춤형 선물 추천 서비스
                    <br/><strong>t</strong>his <strong>i</strong>s <strong>f</strong>or <strong>y</strong>ou, <strong>tify</strong></p>
                </div>
                <div id='jumbo-link' style={{'background-image':'url(' + buttonimage + ')'}}>
                    <a id='d-day-btn' className='btn' href='#'
                        role='button' style={{color:'white'}}>
                        D-Day 등록하기
                    </a>
                </div>
            </div>
        );
    }
}
class Main extends Component {
    render() {
        return (
            <div id='main-page'>
                <MainJumbotron> </MainJumbotron>
                <MainDesc></MainDesc>
            </div>
        );
    }
}

export default Main;