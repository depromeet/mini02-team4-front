import React, {Component} from 'react';
import './navigation.css';
import logo from '../logo.svg';

const $ = window.$;
const navItem = [
    {
        name: '키워드',
        label: 'nav-keywords-tab',
        page: './keywords.html',
        control: 'nav-keywords-doc'
    },
    {
        name: '선물 추천',
        label: 'nav-gifts-tab',
        page: './index.html',
        control: 'nav-gifts-doc'
    },
    {
        name: '친구들',
        label: 'nav-friends-tab',
        page: './index.html',
        control: 'nav-friends-doc'
    },
    {
        name: '계좌번호',
        label: 'nav-account-tab',
        page: './index.html',
        control: 'nav-account-doc'
    }
];

class NavItem  extends Component {
    render() {
        let className="nav-item nav-link";
        return this.props.tabs.map((val ,idx, arr) => (
                        <a id={val.label} 
                            role="tab" data-toggle="tab" 
                            className={idx===0?className + " active": className} 
                            href={"#" + val.control + 'tab'} key={val.label} 
                            aria-controls={val.control}>
                            {val.name}
                        </a>
                        )
                    );
    }
}

class Navigation extends Component {
    render() {
        return (
            <React.Fragment>
                <nav id="nav-tab" className="mainNav navbar navbar-fixed-top">
                    <div className="container-fluid">
                    <div className="navbar-header">
                        <a href="#" className="navbar-brand">
                            <img src={logo} alt="tify logo" className="" width=""/>
                            tify
                        </a>
                    </div>
                    <div className="container w-100">
                    <div className="nav nav-tabs nav-fill" role="tablist">
                        {<NavItem tabs={this.props.tabs}></NavItem>}
                    </div>
                    </div>
                    </div>
{/*                                         </div>
                    <div className="container-fluid collapse navbar-collapse">
                    </div> */}
                </nav>
                <div className="tab-content">
                    {this.props.tabs.map((val, idx, arr) => {
                        var elementType = val.body;
                        var props = {
                            'id':val.label + 'tab',
                            'className': 'tab-pane' + (idx===0?' show active':''),
                            'role':'tabpanel',
                        };
                        return React.createElement(elementType, props);
                    })}
                </div>
            </React.Fragment>
        )
    }
}

export default Navigation;