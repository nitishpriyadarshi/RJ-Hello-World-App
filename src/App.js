import logo from './logo.svg'
import React from 'react';
import './App.css';


class App extends React.Component{
  url = "https://www.bridgelabz.com/"
  constructor(){
    super()
    this.state={userName:' '}
  }
  //On Click Action
  onClick =($event) => {
    console.log("save button is clicked", $event);
    window.open(this.url,"_blank");
  }

  onNameChange = (event) => {
    console.log("value is ", event.target.value);
    this.setState({userName: event.target.value})
  }

render(){
  return(
    <div className='App'>
      <h1>Hello {this.state.userName} from Bridgelabz</h1>
      <img src={logo} onClick={this.onClick}
      alt ="The Bridgelabz logo: a Bridge to Employement through lab Works"/>
      <div>
        <input onChange={this.onNameChange}/>
      </div>
    </div>
  );
}
}
export default App;
