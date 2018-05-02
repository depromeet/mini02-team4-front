import React, {Component} from 'react';
import './navigation.css';

const $ = window.$;
const navItem = [
    {
        name: '키워드',
        page: './index.html',
    },
    {
        name: '선물 추천',
        page: './index.html',
    },
    {
        name: '친구들',
        page: './index.html',
    },
    {
        name: '계좌번호',
        page: './index.html',
    }
];

class NavItem  extends Component {
    render() {
        let className="flex-sm-fill text-sm-center nav-link ";
        return this.props.menu.map((val ,idx, arr) => (<a className={idx==0?className + " active": className} href="#" key={val.name}>{val.name}</a>));
    }
}

class Navigation extends Component {
    render() {
        return (
            <nav className="mainNav navbar nav-tabs flex-column flex-sm-row">
                <a href="#" className="navbar-brand">TiFy</a>
                {<NavItem menu={navItem}></NavItem>}
            </nav>
        )
    }
}

export default Navigation;