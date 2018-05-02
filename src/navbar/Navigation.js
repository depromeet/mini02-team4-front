import React, {Component} from 'react';
import './navigation.css';
import logo from '../logo.svg';

const $ = window.$;
const navItem = [
    {
        name: '키워드',
        label: 'nav-keywords-tab',
        page: './index.html',
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
        let className="nav-link nav-item align-middle";
        return this.props.menu.map((val ,idx, arr) => (
                        <a id={val.label} 
                            role="tab" data-toggle="tab" 
                            className={idx===0?className + " active": className} 
                            href={"#" + val.control} key={val.name} 
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
                <nav id="nav-tab" className="mainNav navbar navbar-expand-lg">
                    <a href="#" className="navbar-brand">
                        <img src={logo} alt="tify logo" className="d-inline-block" width="30"/>
                        tify
                    </a>
                    <div className="collapse navbar-collapse" >
                        <div className="nav navbar-nav nav-tabs nav-fill w-100" role="tablist">
                                    {<NavItem menu={navItem}></NavItem>}
                        </div>
                    </div>
                </nav>
                <div className="tab-content">
                    <div id='nav-keywords-doc' className="tab-pane fade show active" role="tabpanel" aria-labelledby='nav-keywords-tab'>keywords tab</div>
                    <div id='nav-gifts-doc' className="tab-pane fade" role="tabpanel" aria-labelledby='nav-gifts-tab'>gifts tab</div>
                    <div id='nav-friends-doc' className="tab-pane fade" role="tabpanel" aria-labelledby='nav-friends-tab'>friends tab</div>
                    <div id='nav-account-doc' className="tab-pane fade" role="tabpanel" aria-labelledby='nav-account-tab'>account tab</div>
                </div>
            </React.Fragment>
        )
    }
}

export default Navigation;