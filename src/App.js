import React, { Component } from 'react';
import './normalize.css';
import './skeleton.css';
import './App.css';
import Episodes from './episode-details.js';
import Episode from './components/Episode.js';
import VoteButton from './components/VoteButton.js';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      likes: 0,
      dislikes: 0,
      episodes: Episodes
    };
    this.handleVote = this.handleVote.bind(this);
    this.changeEpisode = this.changeEpisode.bind(this);
  }

  
  handleVote(vote) {
    
    if (vote === 'like') {
      console.log("Liked it!");
      this.setState({
        likes: this.state.likes + 1
      });
    }

    if (vote === 'dislike') {
      console.log("Disliked it!");
      this.setState({
        dislikes: this.state.dislikes + 1
      });
    }

  }

  // Move forward and backwards between episodes in the program.
  changeEpisode(direction) {
    if (direction === 'next') {
      if (this.state.index < this.state.episodes.length - 1) {
        this.setState({
          index: this.state.index + 1
        });
      }
    }

    if (direction === 'previous') {
      if (this.state.index > 0) {
        this.setState({
          index: this.state.index - 1
        });
      }
    }

  }


  render() {
    return (
      <div className="App">
        <div className="header container">
          <h1>Deadwood Reviewer</h1>
          <h5>Scoreboard:</h5>
          <h6>Likes: {this.state.likes} </h6>
          <h6>Dislikes: {this.state.dislikes} </h6>
        </div>
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Episode index={this.state.index} />
              <p>Did you like this episode?</p>
              <div className="row">
                <div className="one-half column" onClick={(e) => { this.handleVote('like') }}>
                  <VoteButton buttonType={'like'} buttonName={`I Liked It`} />
                </div>
                <div className="one-half column" onClick={(e) => { this.handleVote('dislike') }}>
                  <VoteButton buttonType={'dislike'} buttonName={`I Didn't Like It`}  />
                </div>
              </div>
            </div>
            <div className="one-half column">
              <div onClick={(e) => {this.changeEpisode('next')}}>
                <p>Next Episode</p>
              </div>
              <div onClick={(e) => { this.changeEpisode('previous') }}>
                <p>Previous Episode</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
