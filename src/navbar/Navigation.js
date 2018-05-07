import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './navigation.css';
import logo from '../images/logo.png';
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';
import Scrollspy from 'react-scrollspy';
const { changeFullpageSlide, changeHorizontalSlide } = Fullpage;


const $ = window.jQuery;

const startPos = 1;
const fullPageOtions = {
    scrollSensitivity: 7,
    touchSensitivity: 7,
    scrollSpeed: 500,
    hideScrollBars: true,
    enableArrowKeys: true,
    resetSlides: true,
    activeSlide: 0,
}

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    onNavtabClickHandle(e) {
        e.preventDefault();
        changeFullpageSlide(e.target.id);
    }

    componentDidMount() {
        window.innerHeight = 1080;
    }
    componentDidUpdate() {
        window.innerHeight = 1080; 
    }

    render() {
        var tabs = this.props.tabs.map((val, idx, arr) => {
                        return (
                            <Slide
                            key={val.label + 'tab'}
                            id={val.label + 'tab'}
                            className='tify-content'
                            >
                                <div id='tify-content-body'>
                                {React.createElement(val.body)}
                                </div>
                            </Slide>
                        );
                    });

        fullPageOtions.slides = tabs;
        return (
            <React.Fragment>
                <div id='tify-content' >
                    <Fullpage {...fullPageOtions}>
                        <nav id='tify-navbar' className='navbar nvabar-light fixed-top'>
                            <img className='navbar-brand' src={logo} alt='tify' />
                            <Scrollspy className='nav' items={this.props.tabs.map((val,idx,arr) => {
                                return val.label + 'tab';
                            })} currentClassName='tify-active'
                                scrolledPastClassName=''
                            >
                                {this.props.tabs.map((val, idx, arr) => ( 
                                    <li key={val.label+'nav'} className='nav-item'>
                                        <a id={idx} 
                                        className='nav-link tify-nav-tab' 
                                        href={'#'+val.label+'tab'}
                                        onClick={this.onNavtabClickHandle.bind(this)}>
                                        {val.name}
                                        </a>
                                    </li>
                                ))}
                            </Scrollspy>
                        </nav>
                    </Fullpage>
                </div>
            </React.Fragment>
        )
    }
}

export default Navigation;