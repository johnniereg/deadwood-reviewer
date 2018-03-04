import React, { Component } from 'react';

class Button extends Component{

    constructor(props) {
        super(props);
        this.state = {
            clickFunction: this.props.clickEvent
        };
    }

    render() {
        let width = this.props.width;

        return (
            <div>
                <a className="button" style={{width: width}}>{ this.props.buttonName }</a>
            </div>
        );
    }
}

export default Button;