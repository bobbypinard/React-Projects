import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import './AddProject.css'

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Title is required.');
    } else{
      this.setState({newProject:{
        id: uuid.v4(),
        title: this.refs.title.value
      }}, function(){
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }
  render() {
    return (
      <div className="addProject">
        <div className="form">
          <h3 className="title">Add Projects</h3>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="title">
              <input type="text" ref="title" placeholder="Title" />
            </div>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

AddProject.propTypes = {
  categories: PropTypes.array,
  addProject: PropTypes.func
}

export default AddProject;
