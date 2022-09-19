import React, { Component } from "react";

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { id: 1, task: "Revise JS" },
        { id: 2, task: "Revise DSA" },
      ],
      currtask: "",
    };
  }

  handleChanges = (e) => {
    this.setState({
      currtask: e.target.value,
    });
  };

  addTask = () => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        { id: this.state.tasks.length + 1, task: this.state.currtask },
      ],
    });
  };

  handleDelete = (id) => {
    let narr = this.state.tasks.filter((taskobj) => {
      return taskobj.id != id;
    });
    this.setState({
      tasks: [...narr],
    });
  };

  add = (event) => {
    if (event.key == "Enter") {
      this.addTask();
    }
  };

  render() {
    return (
      <div className="main-div">
        <input
          type="text"
          placeholder="Enter Your Task"
          onChange={this.handleChanges}
          onKeyPress={this.add}
        />
        <button onClick={this.addTask}>ADD</button>
        <div>
          {this.state.tasks.map((taskobj, idx) => {
            return (
              <li key={taskobj.id}>
                <p>{`${idx + 1} ${taskobj.task}`}</p>
                <button onClick={() => this.handleDelete(taskobj.id)}>
                  DELETE
                </button>
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}
