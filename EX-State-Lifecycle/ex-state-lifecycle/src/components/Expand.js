import { Component } from "react";
import Collapse from "./Collapse";

export default class Expand extends Component {
    constructor(props) {
        super(props);
        this.state = { isExpand: false };
    }
    handler = () => {
        this.setState({ isExpand: true })
    }
    render() {
        if (!this.state.isExpand) {
            return (
                <Collapse onClick={(e) => this.setState({ isExpand: true })} label="Đóng Nội Dung" />
            )
        }
        return (
            <div className="container text-center">
                <h1 className="p-3 mb-2 bg-danger text-white" > Conditional Rendering </h1>
                <button className="btn btn-success" onClick={(e)=> this.setState({isExpand : false })}> Xem Nội Dung </button>
            </div>
        )
    }
}