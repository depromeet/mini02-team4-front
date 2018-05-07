import React, { Component } from 'react';
import '../include/bootstrap';
import './keywordpagestyle.css';
import KeywordCategory from './category';
import '../keyword_cloud/keyword-cloud';
import 'react-dates/initialize';
import ImagesUplodaer from 'react-images-uploader';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';


class DdayInput extends Component {
    render() {
        return (
            <div id='input-dday'>
                <form >
                    <input type='file' name='profile' />
                    <input type='text' name='name' placeholder='생일 주인공 이름' />
                    <input type='date' name='birthday' placeholder='생일 날짜' />
                    <button className='btn btn-outline-primary' style={{display:'inline-block'}}>
                        여자
                    </button>
                    <button className='btn btn-outline-secondary' style={{display:'inline-block'}}>
                        남자
                    </button>
                </form>
            </div>
        );
    }
}
class KeywordMain extends Component {
    render() {
        return (
            <div className='tagmain'>
                <DdayInput></DdayInput>
            </div>
        );
    }
}

export default KeywordMain;