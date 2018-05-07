import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './navigation.css';
import logo from '../logo.svg';

const $ = window.jQuery;

class NavItem  extends Component {
    render() {
        let className="nav-item nav-link";
        return this.props.tabs.map((val ,idx, arr) => (
                        <a id={val.label} 
                            className={className} 
                            href={"#" + val.label + 'header'} key={val.label} >
                            {val.name}
                        </a>
                        )
                    );
    }
}

class Navigation extends Component {
    render() {
        return (
            <div id='navigation-bar' data-spy='scroll' 
                style={{position:'relative', 'overflow-y':'scroll'}}
            data-target='#nav-tab' data-offset='0'>
                <nav id="nav-tab" className="main-nav navbar fixed-top">
                    <div className="container-fluid">
                    <div className="navbar-header">
                        <a href="#" className="navbar-brand">
                            <img src={logo} alt="tify logo" className="" width=""/>
                            tify
                        </a>
                    </div>
                    <div className="container w-100">
                    <div className="nav nav-pills nav-fill">
                        {<NavItem tabs={this.props.tabs}></NavItem>}
                    </div>
                    </div>
                    </div>
                </nav>
                <div id='main-scroll' >
                    {this.props.tabs.map((val, idx, arr) => {
                        return (
                            <React.Fragment>
                                <h1 id={val.label + 'header'} 
                                className='header-sm header-md header-lg header-x0'>
                                </h1>
                                <div 
                                key={val.label + 'tab'}
                                id={val.label + 'tab'}
                                role={'tabpanel'}
                                className='tab-body'
                                >{React.createElement(val.body)}</div>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        )
    }
}

export default Navigation;