import { Component } from "react";

export default class CheckKeyPress extends Component {
    constructor() {
        super();
        this.state = { keypress: '' };
    }
    keypress = (e) => {
        this.setState({ keypress: e.key })
    }
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <p>Key pressed is: {this.state.keypress}</p>
                <input type="text" onKeyPress={(e) => this.keypress(e)} />
            </div>  
        )
    }
}