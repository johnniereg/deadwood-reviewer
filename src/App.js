import React, { Component } from 'react';
// import './normalize.css';
import './skeleton.css';
import './App.css';
import Episodes from './episode-details.js';
import Episode from './components/Episode.js';
import Button from './components/Button.js';
import logo from './img/logo.jpeg';

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
                    <Button buttonName={"I Liked It"} width={"100%"} />
                  </div>
                  <div className="one-half column" onClick={(e) => { this.handleVote('dislike') }}>
                    <Button buttonName={"I Didn't Like It"} width={"100%"}/>
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
      <div className="App body">
        <div className="header container">
          <img src={logo} alt="Deadwood Logo, black and white stylized lettering of the word Deadwood" style={{maxWidth: '100%', marginTop: '-10px'}}></img>
          <h6 className="subtitle" style={{textAlign: 'center', background: 'white', padding: '5px 0px 5px 0px' }} >Rate episodes and then find out what <a href="https://www.github.com/johnniereg" target="_blank">Johnnie</a> thought of them.</h6>
        </div>
        <div className="content container">
          <div className="row">
            <div className="two-thirds column" style={{ background: 'white', padding: '5px 10px 5px 10px'}} >
              <Episode index={this.state.index} />
              <div className="row">
                { voting }
              </div>
            </div>
            <div className="one-third column" style={{ background: 'white', padding: '5px 10px 5px 10px'}} >
              <div className="row">
                <h5>Scoreboard:</h5>
                <div className="row">
                  <div className="one-half column">
                    <h6>You liked: {this.state.likes}</h6>
                  </div>
                  <div className="one-half column">
                    <h6>You disliked: {this.state.dislikes}</h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div onClick={(e) => {this.changeEpisode('next')}}>
                  <Button buttonName={"Next Episode"} width={"100%"}/>
                </div>
                <div onClick={(e) => { this.changeEpisode('previous')}}>
                  <Button buttonName={"Previous Episode"} width={"100%"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
