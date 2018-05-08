import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import './NoteForm.css'

export default class NoteForm extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      newNoteContent: ''
    }
    this.handleUserInput = this.handleUserInput.bind(this)
    this.writeNote = this.writeNote.bind(this)
  }

  handleUserInput(e){
    this.setState({
      newNoteContent: e.target.value,
    })
  }
  writeNote(e){
    this.props.addNote(this.state.newNoteContent)

    this.setState({
      newNoteContent: ''
    })
  }

  render() {
    return (
      <div className="formWrapper">
        <input className="noteInput"
            placeholder="Write a new note..."
            value={this.state.newNoteContent}
            onChange={this.handleUserInput} />
        <button className="noteButton"
            onClick={this.writeNote}>Add note</button>
      </div>
    )
  }
}
