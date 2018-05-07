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


    render() {
        var tabs = this.props.tabs.map((val, idx, arr) => {
                        return (
                            <Slide
                            key={val.label + 'tab'}
                            id={val.label + 'tab'}
                            className='tify-content'
                            >
                                {React.createElement(val.body)}
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
                            })} currentClassName='nav-item tify-active'
                                scrolledPastClassName='nav-item'
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

function scrollNavStart(nav) {
    // make the nav fixed when we start scrolling horizontally
    nav.style.position = 'fixed';
}
  
function scrollNavEnd(nav) {
    // make the nav absolute when scroll finishes
    nav.style.position = 'absolute';
}
export default Navigation;