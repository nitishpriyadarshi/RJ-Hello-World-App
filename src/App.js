import logo from './BridgeLabz-2.jpg'
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
    if (nameRegex.test(event.target.value)) {
      this.setState({ nameError: '' })
    } else {
      this.setState({ nameError: 'Name is Invalid..!!' })
    }
  }

  render() {
    return (
      <div className='App'>
        <h1>Hello {this.state.userName} from Bridgelabz</h1>
        <img className="image" src={logo} onClick={this.onClick}
          alt="The Bridgelabz logo: a Bridge to Employement through lab Works" />
        <div>
          <input onChange={this.onNameChange} />
          <span className='error-output'>{this.state.nameError}</span>
          <p className='paragraph'>
            Bridgelabz is an AWS recognised incubator and is soley focused
            on solving tech employability. Over the last 5 years, it has worked
            with 500+ top tech companies and 2500+ engineers have been hired
            from Bridgelabz. It has labs in Mumbai and Bangalore
            . It has partnered with over 500 companies, including Yatra,
            Capgemini, Meru Cabs, LafargeHolcim, JDA, UrbanLadder, Fullerton India,
            and RBL bank. Bridgelabz recently won Business World Techtor Award 2020 and
            secured 2nd position at Global Edtech Startup Awards 2019, India. Also, was
            selected by the Maharashtra state government as Top 100 Startups 2019.
            More than 350+ learners placed in last 6 months despite covid downturn while most organizations were not hiring or were laying off!

          </p>
        </div>
      </div>
    );
  }
}
export default App;