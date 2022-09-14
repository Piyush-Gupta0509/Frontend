import React, { Component } from "react";

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: ["Revise Js", "Revise DSA"],
      currtask:"",
    };
  }

  handleChanges=(e)=>{
    this.setState({
        currtask: e.target.value
    })
  }

  addTask=()=>{
    this.setState({
        tasks: [...this.state.tasks,this.state.currtask]
    })
  }


  render() {
    return (
      <div>
        <input type="text" placeholder="Enter Your Task" onChange={this.handleChanges}/>
        <button onClick={this.addTask}>ADD</button>
        {
            this.state.tasks.map((task) => {
                return (
                <li>
                    <p>{task}</p>
                    <button>DELETE</button>
                </li>
            );
          })
        }
      </div>
    );
  }
}
