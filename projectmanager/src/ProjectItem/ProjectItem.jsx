import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProjectItem.css'

class ProjectItem extends Component {
  deleteProject(){
    this.props.onDelete(this.props.project.id);
  }


  render() {
    return (
      <li className="ProjectItem">
        <button onClick={this.deleteProject.bind(this)}>X</button> <strong>{this.props.project.title}</strong>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  project: PropTypes.object,
  onDelete: PropTypes.func
}

export default ProjectItem;
