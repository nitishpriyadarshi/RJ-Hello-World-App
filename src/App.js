import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={title:"Hello From Bridgelbaz"}
  }

render(){
  return(
    <div className='App'>
      <h2>{this.state.title}</h2>
    </div>
  );
}
}

export default App;
