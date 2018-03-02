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
    var index = this.state.index;
    var episodes = this.state.episodes;

    if (vote === 'like') {
      episodes[index].vote = 'liked';

      this.setState({
        likes: this.state.likes + 1,
        episodes: episodes
      });

      // this.changeEpisode('next');
    }

    if (vote === 'dislike') {
      episodes[index].vote = 'disliked';
      
      this.setState({
        dislikes: this.state.dislikes + 1,
        episodes: episodes
      });

      // this.changeEpisode('next');
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
    let voting = null;
    let index = this.state.index;
    let episode = this.state.episodes[index];

    // Allow users to vote only once per episode by hiding vote options and displaying their choice.
    if (episode.vote === '') {
      voting =  <div>  
                  <div className="one-half column" onClick={(e) => { this.handleVote('like') }}>
                    <VoteButton buttonType={'like'} buttonName={`I Liked It`} />
                  </div>
                  <div className="one-half column" onClick={(e) => { this.handleVote('dislike') }}>
                    <VoteButton buttonType={'dislike'} buttonName={`I Didn't Like It`} />
                  </div>
                </div>
    } else {
      voting =  <div>
                  <h5>You { episode.vote } this episode.</h5>
                  <h6>Here's what Johnnie thought:</h6>
                  <p>{ episode.thoughts }</p>
                </div>
    }

    return (
      <div className="App">
        <div className="header container">
          <h1>Deadwood Reviewer</h1>
          <h6>Rate episodes and see if you felt the same way as Johnnie did.</h6>
        </div>
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Episode index={this.state.index} />
              <div className="row">
                { voting }
              </div>
            </div>
            <div className="one-half column">
              <div className="row">
                <h5>Navigate Episodes</h5>
                <div onClick={(e) => {this.changeEpisode('next')}}>
                  <a className="button">Next</a>
                </div>
                <div onClick={(e) => { this.changeEpisode('previous') }}>
                  <a className="button u-width-full">Previous</a>
                </div>
              </div>
              <div className="row">
                <h5>Scoreboard:</h5>
                <h6>You liked {this.state.likes} episodes.</h6>
                <h6>You disliked {this.state.dislikes} episodes.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
