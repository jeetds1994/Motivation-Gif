import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      url: ""
    }
  }

  componentWillMount(){
    fetch('https://api.giphy.com/v1/gifs/random?tag=motivation&api_key=plQtJUwnpc82BLWtkIZaL5ROQnZs92bx&limit=1').then(resp => resp.json())
    .then(data => {
      this.setState({url: data.data.image_original_url})
    })
  }

  render() {
    return (
      <div className="App">
        <img src={this.state.url} alt="motivation-gif"/>
        <h1>You got this Navaro!</h1>
      </div>
    );
  }
}

export default App;
