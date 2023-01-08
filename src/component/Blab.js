import './Blab.css'

import React from 'react';
import logo from '../BridgeLabz-2.jpg'

class Bridgelabz extends React.Component {
    url = "https://www.bridgelabz.com/"
    constructor() {
        super()
        this.state = {
            userName: '',
            nameError: ''
        }
    }

    //onClick Function
    onClicks = ($event) => {
        console.log('save button is clicked!', $event);
        window.open(this.url, '_blank');
    }

    onNameChange = (event) => {
        console.log("value is ", event.target.value);
        const nameRegex = RegExp("^[A-Z]{1}[a-zA-Z]{2,}$");
        //set the title using setState method
        this.setState({ userName: event.target.value })
        if (nameRegex.test(event.target.value)) {
            this.setState({ nameError: '' })
        }
        else {
            this.setState({ nameError: 'Name is Invalid..!!' })
        }
    }

    render() {
        return (
            <div>
                <header></header>
                <div id="main">
                    <article>
                        <div className="App">
                            <div>
                                <h2>Hello {this.state.userName} from Bridgelabz</h2>
                                <img src={logo} onClick={this.onClicks} alt='The Bridgelabz logo: a Bridge to Employement through lab Works' />
                            </div>
                            <div>
                                <input onChange={this.onNameChange} />
                                <span className='error_output'>{this.state.nameError}</span>
                                <br></br>
                            </div>
                        </div>
                        <div>
                            <h3>At BridgeLabz, we're a Community of</h3>
                            <oi>
                                <li> technologists</li>
                                <li> thinker</li>
                                <li> builders</li>
                            </oi>
                            <div>
                                <p>
                                    Working together to keep the Tech Employability of Engineers alive and accessible,
                                    so Tech Companies worldwide can get contributors and creators for Technology Solutions.
                                    We believe this act of human collaboration across an employability platform is essential to individual growth and our collective future.
                                    To Know about us, visit BridgeLabz to learn even more about our mission
                                    <span>  i.e. Employability to all.</span>
                                </p>
                            </div>
                        </div>
                    </article>
                    <nav></nav>
                    <aside></aside>
                </div>
                <footer></footer>
            </div>);
    }
}
export default Bridgelabz;