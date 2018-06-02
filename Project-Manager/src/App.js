import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Projects/Projects';
import AddProject from './AddProject/AddProject';
import './App.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  getProjects(){
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: 'Project Manager'
      },
      {
        id: uuid.v4(),
        title: 'React Bootstrap'
      },
      {
        id: uuid.v4(),
        title: 'React Notes'
      },
      {
        id: uuid.v4(),
        title: 'React Firebase Auth'
      },
      {
        id: uuid.v4(),
        title: 'Firebase Flashcards'
      },
      {
        id: uuid.v4(),
        title: 'Lorem ipsum'
      },
      {
        id: uuid.v4(),
        title: 'dolor sit'
      },
      {
        id: uuid.v4(),
        title: 'amet, consectetur'
      },
      {
        id: uuid.v4(),
        title: 'libero pharetra'
      },
      {
        id: uuid.v4(),
        title: 'adipiscing elit'
      },
      {
        id: uuid.v4(),
        title: 'Pellentesque vitae'
      },
      {
        id: uuid.v4(),
        title: 'mauris quis'
      },
      {
        id: uuid.v4(),
        title: 'libero pharetra'
      },
      {
        id: uuid.v4(),
        title: 'tincidunt. Aliquam'
      },
      {
        id: uuid.v4(),
        title: 'erat volutpat'
      },
      {
        id: uuid.v4(),
        title: 'mauris quis'
      },
      {
        id: uuid.v4(),
        title: 'libero pharetra'
      },
      {
        id: uuid.v4(),
        title: 'Proin dictum'
      },
      {
        id: uuid.v4(),
        title: 'tincidunt. Aliquam'
      },
      {
        id: uuid.v4(),
        title: 'erat volutpat'
      },
      {
        id: uuid.v4(),
        title: 'Proin dictum'
      }
    
    ]});
  }

  componentWillMount(){
    this.getProjects();
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
          <AddProject addProject={this.handleAddProject.bind(this)} />
          
          <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
      </div>
    );
  }
}

export default App;
