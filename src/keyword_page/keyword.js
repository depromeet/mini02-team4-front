import React, { Component } from 'react';
import '../include/bootstrap';
import './keywordstyle.css';
import KeywordCategory from './category';

function Person(propts) {
    return (
        <div id='personal-info' className='text-center h2'>
            여기는 사진 ! <br/>
            이름은: 전해성, 나이는: 27살
        </div>
    );
}
function Birthday(props) {
    return (
        //props.birthday
        <div id='birthday' className ='text-center h3'>
            2017년 8월 8일
        </div>
    );
}

function TargetInfo(props) {
    return (
        <div id='target-info' className='text-center h1'>
            <Person></Person>
            <Birthday></Birthday>
        </div>
    );
}

function KeywordCloud (props) {
    return (
        <button id='keyword-cloud' 
        className='btn btn-primary text-center col-xs-4 col-sm-3 col-md-2' 
        data-toggle='modal'
        data-target={'#keyword-modal-' + props.idx}>
            {props.keyword}
        </button>
    );
}

function CategoryModal(props) {
    return (
        <div class='modal fade' 
        id={'keyword-modal-' + props.idx} 
        role='dialog' 
        tabindex='1' 
        aria-lebelledby={'keyword-modal-label' + props.idx}
        aria-hidden='true'>
            <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                    <div class='modal-header'>
                        <h5 class="modal-title">
                            {props.keywordData.key}
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">
                        저장하기</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">닫기</button>
                    </div> 
                </div>
            </div>
        </div>
    );
}
class Category extends Component{
    render() {
        return (
            <div id='keyword-category' className=''>
                <h2>카테고리</h2>
                <div className="container-fluid">
                    <div class='row'>
                        {KeywordCategory.map((val,idx,arr) => {
                            return (
                                <KeywordCloud keyword={val.key} 
                                idx={idx}></KeywordCloud>
                            );
                        })}
                    </div>
                </div>
                {KeywordCategory.map((val, idx, arr) => {
                    return (
                        <CategoryModal idx={idx} 
                            keywordData={val}>
                            </CategoryModal>
                    )
                })}
            </div>
        );
    }
}
class KeywordMain extends Component {
    render() {
        return (
            <div className='tagmain'>
                <TargetInfo></TargetInfo>
                <Category></Category>
            </div>
        );
    }
}

export default KeywordMain;