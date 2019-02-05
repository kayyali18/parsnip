import React, { Component } from "react";
import { connect } from "react-redux";

import TasksPage from "./components/TasksPage";
import { createTask, editTask } from "./actions";

class App extends Component {
  onCreateTask = ({ title, description }) => {
    this.props.dispatch(createTask({ title, description }));
  };

  render() {
    return (
      <div className="main-content">
        <TasksPage tasks={this.props.tasks} onCreateTask={this.onCreateTask} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ tasks: state.tasks });

export default connect(mapStateToProps)(App);

// A side effect is any code that has a noticeable
// effect on the outside world.
// Such as writing to a disk or mutating data. Put another way,
// it is code that does anything but take inputs and return a result

// Deterministic == opposite of side effect
