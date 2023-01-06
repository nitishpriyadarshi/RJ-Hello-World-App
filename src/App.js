import logo from './logo.svg'
import React from 'react';
import './App.css';


class App extends React.Component{
  url = "https://www.bridgelabz.com/"
  constructor(){
    super()
    this.state={title:"Hello From Bridgelbaz"}
  }
  //On Click Action
  onClick =($event) => {
    console.log("save button is clicked", $event);
    window.open(this.url,"_blanck");
  }

render(){
  return(
    <div className='App'>
      <h2>{this.state.title}</h2>
      <img src={logo} onClick={this.onClick}
      alt ="The Bridgelabz logo: a Bridge to Employement through lab Works"/>
    </div>
  );
}
}
export default App;
