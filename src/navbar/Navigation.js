import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './navigation.css';
import logo from '../images/logo.png';

const $ = window.jQuery;

const startPos = 1;
class NavItem  extends Component {
    render() {
        let className="nav-item nav-link";
        return this.props.tabs.map((val ,idx, arr) => (
                        <a id={val.label} 
                            role="tab" data-toggle="tab" 
                            className={idx===startPos?className + " active": className} 
                            href={"#" + val.label + 'tab'} key={val.label} 
                            aria-controls={val.label + 'tab'}>
                            {val.name}
                        </a>
                        )
                    );
    }
}

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.scrolling = 0;
        this.currentPos = 0;
        this.scrollDown = this.scrollDown.bind(this);
        this.scrollUp = this.scrollUp.bind(this);
        this.ref = React.createRef();
    }
    
    scrollUp(){
        if(!this.scrolling&& this.currentPos > 0 ){
            this.scrolling=true;
            this.currentPos --;
            var scrollToElement = $('.tab-pane')[this.currentPos];

            $('html, body').animate({
                scrollTop: $(scrollToElement).offset().top
            }, 500, function(){
                this.scrolling = false;
            });      
        }
    }   

    scrollDown(){   
        if(!this.scrolling && this.currentPos < $('.tab-pane').length-1  ){
            this.scrolling=true;
            this.currentPos ++;
            var scrollToElement = $('.tab-pane')[this.currentPos];

            $('html, body').animate({
                scrollTop: $(scrollToElement).offset().top
            }, 500,function(){
                this.scrolling = false;
            }); 
        }
    }    
    componentDidMount () {
    }
    render() {
        return (
            <div id='navigation-bar'>
                <nav id="nav-tab" className="main-nav navbar sticky-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a href="#" className="navbar-brand">
                                <img src={logo} alt="tify logo" className="" width=""/>
                            </a>
                        </div>
                        <div className="container w-100">
                            <div className="nav nav-pills nav-fill" role="tablist">
                                {<NavItem tabs={this.props.tabs}></NavItem>}
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="tab-content">
                    {this.props.tabs.map((val, idx, arr) => {
                        return (
                            <div 
                            key={val.label + 'tab'}
                            id={val.label + 'tab'}
                            className={'tab-pane ' + (idx===startPos?' show active':'')}
                            role={'tabpanel'}
                            >{React.createElement(val.body)}
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }
}

export default Navigation;