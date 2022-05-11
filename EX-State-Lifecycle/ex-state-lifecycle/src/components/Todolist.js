import { Component } from "react";

export default class ToDoList extends Component {
    constructor() {
        super();
        this.state = { list : [], item: '' }
    }
    handleChange = (e) => {
        this.setState({ item : e.target.value });
    };
    handleAddItem = () => {
        const newList  = [...this.state.list,this.state.item];
        this.setState({list : newList,item:''})
    }
    render() {
        return (
            <div className="container text-center">
                <h2> Todo List </h2>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" value={this.state.item} onChange={this.handleChange}></input>
                    <button class="btn btn-outline-success" type="button" id="button-addon2" title="Click to add" onClick={this.handleAddItem}>Add</button>
                </div>
                <ul className="items-container" >
                    {this.state.list.map((item) => {
                        return(
                            <li key={item} className='todo'> {item} </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
} 