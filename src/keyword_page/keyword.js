import React, { Component } from 'react';
import '../include/bootstrap';
import './keywordpagestyle.css';
import KeywordCategory from './category';
import '../keyword_cloud/keyword-cloud';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';


class DdayUpload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: '',
                    gender:'female', name: '', birthday:'', tag:'',
                    keywords: [] };
      this._handleRadioChange = this._handleRadioChange.bind(this);
      this._handleTextChange = this._handleTextChange.bind(this);
      this._handleTagInput = this._handleTagInput.bind(this);
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
        this.setState((prevState, props) => {
            var keywords = prevState.keywords;
            keywords.push(data);
            return keywords;
          });
      }
    }

    render() {
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img className='previewImage' src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="previewImage"></div>);
      }
  
      return (
        <div className="dday-component mt-5">
          <form onSubmit={(e)=>this._handleSubmit(e)}>
          <p class='step mb-3'>01</p>
          <p class='step-name mb-3'>생일 등록</p>
            <input className="form-control fileInput" 
              type="file" 
              onChange={(e)=>this._handleImageChange(e)} />
            <div className="imgPreview">
              {$imagePreview}
            </div>
            <input style={{display:'block'}} value={this.state.name} className='mt-5 mb-3 form-control' type='text' name='name' placeholder='생일 주인공 이름' onChange={this._handleTextChange}/>
            <input style={{display:'block'}} value={this.state.birthday} className='mb-3 form-control' type='date' name='birthday' placeholder='생일 날짜' onChange={this._handleTextChange}/>
            <div className='input-group'>
                <input onChange={this._handleRadioChange} value='female' type='radio' id='female' name='gender' className='' style={{display:'inline-block'}}/>
                <label for='female' className={'btn btn-outline-' + (this.state.gender=='female'?'primary':'secondary') + ' form-control'} >여자</label>
                <input onChange={this._handleRadioChange} value='male' type='radio' id='male' name='gender' className='' style={{display:'inline-block'}}/>
                <label for='male' className={'btn btn-outline-' + (this.state.gender=='male'?'primary':'secondary') + ' form-control'}>남자</label>
            </div>
          <p className='step mb-3'>02</p>
          <p className='step-name mb-3'>키워드 등록</p>
          <p className='mb-3'>주인공의 선호 키워드 입력</p>
          <div className='input-group form-control'>
            <div className='input-group-prepend'>
              #
            </div>
            <input value={this.state.tag} onKeyPress={this._handleTagInput} onChange={this._handleTextChange} type='text' id='tag' name='tag' className='' />
          </div>
          </form>
          {this.state.keywords.map((val, idx, arr) => (
            <div className='badge badge-primary tag-cloud mt-2'> 
              <div className='d-inline-block'> #{val} </div>
              <div className='tag-remover btn btn-light d-inline-block'>&times;</div>
            </div>
          ))}
{/*             <button className="submitButton" 
              type="submit" 
              onClick={(e)=>this._handleSubmit(e)}>Upload Image</button> */}
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