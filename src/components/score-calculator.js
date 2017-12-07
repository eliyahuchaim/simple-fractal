import React from 'react';
import {Form, Label, Button} from 'semantic-ui-react';

export default class ScoreEngineer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      showForm: true,
      input: "",
      engineer: [this.props.theEngineer]
    };
  };

  toggleShowForm = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.toggleShowForm();
    this.props.sendToCalculator(this.state.input)
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  };

  whatToRender = () => {
    if (this.state.showForm){
      return (
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <Label> Please Enter Your ID </Label>
            <br/>
            <Form.Input value={this.state.input} onChange={this.handleChange} />
          </Form.Field>
          <Button>Submit</Button>
        </Form>
      )
    } else {
      if (!this.props.theEngineer[0].communicationPercentile) {
        return (
        <div>
          <h1> {this.props.theEngineer} </h1>
          <Button onClick={this.toggleShowForm}> View Another Engineer </Button>
        </div>
        )
      } else {
        return (
          <div>
          <h1> You are in the {this.props.theEngineer[0].communicationPercentile}th percentile for communication score </h1>
          <h1> You are in the {this.props.theEngineer[0].codingPercentile}th percentile for coding score </h1>
          <Button onClick={this.toggleShowForm}> View Another Engineer </Button>
          </div>
        )
      };
    };
  };


  render(){
    console.log(this.state);
    console.log(this.props);
    return(
      <div>
      <br/>
        {this.whatToRender()}
      </div>
    )
  }
}
