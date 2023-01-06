import logo from './logo.svg'
import React from 'react';
import './App.css';


class App extends React.Component {
  url = "https://www.bridgelabz.com/"
  constructor() {
    super()
    this.state = { userName: ' ', nameError: '' }
  }
  //On Click Function
  onClick = ($event) => {
    console.log("save button is clicked", $event);
    window.open(this.url, "_blank");
  }

  onNameChange = (event) => {
    console.log("value is ", event.target.value);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
    // set the tittle using setState method
    this.setState({ userName: event.target.value })
    if(nameRegex.test(event.target.value)){
      this.setState({nameError: ''})
    }else{
      this.setState({nameError: 'Name is Invalid..!!'})
    }
  }

  render() {
    return (
      <div className='App'>
        <h1>Hello {this.state.userName} from Bridgelabz</h1>
        <img src={logo} onClick={this.onClick}
          alt="The Bridgelabz logo: a Bridge to Employement through lab Works" />
        <div>
          <input onChange={this.onNameChange} />
          <span className='error-output'>{this.state.nameError}</span>
        </div>
      </div>
    );
  }
}
export default App;
