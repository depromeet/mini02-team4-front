import React, { Component } from 'react';
import './tagpage.css';

function TargetInfo(props) {
    return (
        <h1>사람 정보 입력 부분</h1>
    );
}

class TagMain extends Component {
    render() {
        return (
            <div className='tagmain'>
                <h1> Test page </h1>
                <TargetInfo></TargetInfo>
            </div>
        );
    }
}

export default TagMain;