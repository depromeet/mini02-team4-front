import React, {Component} from 'react';
import './keywordstyle.css';

class DdayInput extends Component {
    render() {
        return (
            <div id='input-dday'>
                <div className='btn-outline-primary' style={{display:'inline-block'}}>
                    여자
                </div>
                <div className='btn-outline-secondary' style={{display:'inline-block'}}>
                    남자
                </div>
            </div>
        );
    }
}
class KeywordCloud extends Component{


    render() {
        return (
            <div className=''>
                <DdayInput></DdayInput>
            </div>
        );
    }
}

export default KeywordCloud;