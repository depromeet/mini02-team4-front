import React, {Component} from 'react';
import './giftspage.css';
import logo from '../logo.svg';


function Keyword(props) {
    return (
        <button className='btn bt-info mr-4 mt-2'>
            Keyword
        </button>
    );
}
class KeywordCloud extends Component{
    render() {
        return (
            <div className='mb-5'>
                <Keyword></Keyword>
                <Keyword></Keyword>
                <Keyword></Keyword>
                <Keyword></Keyword>
                <Keyword></Keyword>
            </div>
        );
    }
}

const pbColors = [
    '', 'success', 'info', 'warning', 'danger'
]
class ReviewGrade extends Component{
    render() {
        return (
            <div className='progress progress-bar-vertical'>
                <div className={'progress-bar progress-bar-striped progress-bar-animated bg-' + pbColors[this.props.index]}
                role='progressbar'
                aria-valuemax='100' aria-valuemin='0'
                aria-valuenow='75' style={{height:'75%'}}>
                    {this.props.keyword}
                </div>
            </div>
        );
    }
}

var ReviewItems = [
    '가격', '배송', '품질', '취저'
];
class Reviews extends Component{
    render() {
        return (
            <div className=''>
                {ReviewItems.map((val, idx, arr) => {
                    return (
                        <ReviewGrade
                        keyword={val} index={idx}>
                        </ReviewGrade>
                    );
                })}
            </div>
        );
    }
}
class GiftCard extends Component {
    render() {
        return ( 
            <div className='card mr-3 d-inline-block' style={{'width': '18rem'}}>
                <div className='card-header'>
                    card title header
                </div>
                <img className='card-img-top' src={logo} alt='gift card' />
                <div className='card-body'>
                    <h5 className='card-title'>Gift card title</h5>
                    <h6 className='card-subtitle mb-2 text-muted'>
                        keyword
                    </h6>
                    <div class='mb-5'>
                        <Reviews></Reviews>
                        <p className='card-text'>
                            This is description of the gift.
                        </p>
                    </div>
                    <a href='#' className='btn btn-primary mr-3'>
                        Go to item page
                    </a>
                    <a href='#' className='card-link'>리뷰 보기</a>
                </div>
            </div>
        );
    }
}
class GiftsRecommend extends Component {
    render() {
        return (
            <div>
                <GiftCard></GiftCard>
                <GiftCard></GiftCard>
            </div>
        );
    }
}
class Gifts extends Component {
    render() {
        return (
            <div>
                This is Gift page.
                <KeywordCloud></KeywordCloud>
                <GiftsRecommend></GiftsRecommend>
            </div>
        );
    }
}

export default Gifts;