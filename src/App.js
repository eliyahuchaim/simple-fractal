import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScoreEngineer from './components/score-calculator';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      companies: [],
      engineers: [],
      theEngineer: {}
    }
  }

  handleSubmit = (engineer) => {
    // debugger
    var result = this.props.calculator(this.state.companies, parseInt(engineer), this.state.engineers)
    // debugger
    this.setState({
      theEngineer: [result]
    })
  }

  componentDidMount(){
    this.props.parseEngineers().then(resp => this.setState({engineers: resp }));
    this.props.parseCompany().then(resp => this.setState({companies: resp }))
  };

  render() {
    console.log(this.state);
    // console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">What Percentile Are You In?</h1>
        </header>
        <ScoreEngineer sendToCalculator={this.handleSubmit} theEngineer={this.state.theEngineer} />
      </div>
    );
  }
}

export default App;
