import React, { Component } from 'react';

class VoteButton extends Component{

    constructor(props) {
        super(props);
        this.state = {
            clickFunction: this.props.clickEvent
        };
    }

    render() {
        let type = this.props.buttonType;

        return (
            <div>
                <a className="button">{ this.props.buttonName }</a>
            </div>
        );
    }
}

export default VoteButton;