import React, {Component} from 'react';
import './friends.css';


class NameCard extends Component {
    render() {
        return (
            <React.Fragment>
                This is name card
            </React.Fragment>
        );
    };  
}

class Friends extends Component {
    render() {
        return (
            <div>
                <NameCard>
                </NameCard>
                This is friends page.
            </div>
        );
    }
}

export default Friends;