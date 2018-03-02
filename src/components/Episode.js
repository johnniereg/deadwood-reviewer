import React, { Component } from 'react';
import Episodes from '../episode-details.js';

class Episode extends Component {

    constructor(props) {
        super(props);
        this.state = {
            episodes: Episodes
        };
    }

    render() {

        var number = this.props.index;

        return (
            <div>
                <h4>{this.state.episodes[number].title}</h4>
                <p>{this.state.episodes[number].description}</p>
            </div>
        )
    }

}

export default Episode;