import React, { Component } from 'react';
import fire from './config/Fire'
import './App.css';
import Home from './Home/Home'
import Login from './Login/Login'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      user: {}
    }
  }

  componentDidMount(){
    this.authListener()
  }

  authListener(){
    fire.auth().onAuthStateChanged((user => {
      if (user) {
        this.setState({ user })
      } else {
        this.setState({ user: null })
      }
    }))
  }

  render() {
    return (
      <div className="App">
        { this.state.user ? (<Home />) : (<Login />) }
      </div>
    );
  }
}

export default App;
