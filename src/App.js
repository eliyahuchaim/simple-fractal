import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      companies: [],
      engineers: [],
    }
  }

  componentDidMount(){
    this.props.parseEngineers().then(resp => this.setState({engineers: resp }));
    this.props.parseCompany().then(resp => this.setState({companies: resp }))
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
