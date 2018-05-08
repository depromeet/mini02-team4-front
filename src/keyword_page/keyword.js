import React, { Component } from 'react';
import '../include/bootstrap';
import './keywordpagestyle.css';
import KeywordCategory from './category';
import '../keyword_cloud/keyword-cloud';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import profile_img from '../images/profile_ic.png';
import camera_ic from '../images/camera_ic.png';
import register_bg from '../images/register_bg.png';


class DdayUpload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: '',
                    gender:'female', name: '', birthday:'', tag:'',
                    keywords: [] };
      this._handleRadioChange = this._handleRadioChange.bind(this);
      this._handleTextChange = this._handleTextChange.bind(this);
      this._handleTagInput = this._handleTagInput.bind(this);
      this._handleItemDelete = this._handleItemDelete.bind(this);
    }
  
    _handleSubmit(e) {
      e.preventDefault();
      // TODO: do something with -> this.state.file
      console.log('handle uploading-', this.state.file);
    }
  
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
    _handleTextChange(e) {
      var data = {};
      data[e.target.name] = e.target.value;
      this.setState(data)
    }
    _handleRadioChange(e) {
      this.setState({gender:e.target.value});
    }

    _handleTagInput(e) {
      if (e.key == 'Enter') {
        var data = (e.target.value);
        this.setState({tag:''});
        console.log(data);
        if (this.state.keywords.indexOf(data) < 0){
        this.setState((prevState, props) => {
            var keywords = prevState.keywords;
            keywords.push(data);
            return keywords;
          });
        }
      }
    }
    _handleItemDelete(e) {
      let keywords = this.state.keywords;
      let idx = keywords.indexOf(e.target.id);
      keywords.splice(idx,1);

      this.setState({
        keywords:keywords});
    }
    render() {
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img className='previewImage btn' src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="previewImage btn" style={{backgroundImage:`url(${profile_img})`,
              backgroundSize:'cover'}}></div>);
      }
      let keywords = this.state.keywords;
      let remover = [];
      return (
        <div className="dday-component">
          <form style={{backgroundImage:`url(${register_bg})`,
          backgroundSize:'cover',
          paddingTop:'47px', paddingBottom:'57px',
          marginBottom:'48px'}} onSubmit={(e)=>this._handleSubmit(e)}>
            {/*         프로필 업로더      */}
            <label for='upload' id='img-upload-label'>
              <input id='upload' className="form-control fileInput" 
                type="file"
                style={{display:'none'}} 
                onChange={(e)=>this._handleImageChange(e)} />
              {$imagePreview}
              <img id='camera-ic' src={camera_ic} />
            </label>

            {/*         이름 및 생일 */}
            <input style={{display:'block'}} value={this.state.name} className='form-control' type='text' name='name' placeholder='생일 주인공 이름' onChange={this._handleTextChange}/>
            <input style={{display:'block'}} value={this.state.birthday} className='form-control' type='date' name='birthday' placeholder='생일 날짜' onChange={this._handleTextChange}/>

            {/* 성별 */}
            <div className='gender-group input-group'>
                <input onChange={this._handleRadioChange} value='female' type='radio' id='female' name='gender' className='' style={{display:'inline-block'}}/>
                <label style={{marginRight:'15px'}} for='female' className={'gender-label btn btn-outline-' + (this.state.gender=='female'?'primary':'secondary') + ' form-control'} >여자</label>
                <input onChange={this._handleRadioChange} value='male' type='radio' id='male' name='gender' className='' style={{display:'inline-block'}}/>
                <label for='male' className={'gender-label btn btn-outline-' + (this.state.gender=='male'?'primary':'secondary') + ' form-control'}>남자</label>
            </div>
          </form>
          <p className='keyword-title'>주인공의 선호 키워드 입력</p>
          <div className='input-group form-control tag-input-box'>
            <div className='input-group-prepend'
            style={{marginLeft:'8px', marginRight:'16px', 
            fontSize:'31px',
            boxSizing:'border-box'}} >
              #
            </div>
            <input value={this.state.tag} onKeyPress={this._handleTagInput} onChange={this._handleTextChange} type='text' id='tag' name='tag' className='tag-input' />
            <div className='tag-area'>
            {keywords.map((val, idx, arr) => {
                return (
                <div className='badge tag-cloud mt-2'> 
                  <div className='d-inline-block'> #{val} </div>
                  <div onClick={this._handleItemDelete}id={val} className='tag-remover btn btn-light d-inline-block'>&times;</div>
                </div>
                )
            })}
            </div>
          </div>
        </div>
      );
    }
}

class KeywordMain extends Component {
    render() {
        return (
            <div className='tagmain'>
                <DdayUpload></DdayUpload>
            </div>
        );
    }
}

export default KeywordMain;