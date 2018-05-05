import React, {Component} from 'react';
import './navigation.css';
import logo from '../logo.svg';

const $ = window.$;

class NavItem  extends Component {
    render() {
        let className="nav-item nav-link";
        return this.props.tabs.map((val ,idx, arr) => (
                        <a id={val.label} 
                            role="tab" data-toggle="tab" 
                            className={idx===1?className + " active": className} 
                            href={"#" + val.label + 'tab'} key={val.label} 
                            aria-controls={val.label + 'tab'}>
                            {val.name}
                        </a>
                        )
                    );
    }
}

class Navigation extends Component {
    render() {
        return (
            <div id='navigation-bar'>
                <nav id="nav-tab" className="main-nav navbar fixed-top">
                    <div className="container-fluid">
                    <div className="navbar-header">
                        <a href="#" className="navbar-brand">
                            <img src={logo} alt="tify logo" className="" width=""/>
                            tify
                        </a>
                    </div>
                    <div className="container w-100">
                    <div className="nav nav-pills nav-fill" role="tablist">
                        {<NavItem tabs={this.props.tabs}></NavItem>}
                    </div>
                    </div>
                    </div>
{/*                                         </div>
                    <div className="container-fluid collapse navbar-collapse">
                    </div> */}
                </nav>
                <div className="tab-content tab-mt-md tab-mt-lg tab-mt-xl tab-mt-sm">
                    {this.props.tabs.map((val, idx, arr) => {
                        return (
                            <div 
                            id={val.label + 'tab'}
                            className={'tab-pane' + (idx===1?' show active':'')}
                            role={'tabpanel'}
                            >{React.createElement(val.body)}</div>
                        );
                    })}
                </div>
            </div>
        )
    }
}

export default Navigation;