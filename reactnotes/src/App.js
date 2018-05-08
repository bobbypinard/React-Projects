import React, { Component } from 'react';
import Note from './Note/Note'
import NoteForm from './NoteForm/NoteForm'
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this)
    this.state = {
      notes: [
        { id: 1, content: "Note 1" },
        { id: 2, content: "Note 2" }
      ]
    }
  }

  addNote(note){
    const previousNotes = this.state.notes
    previousNotes.push({ id: previousNotes.length + 1, noteContent: note })
    this.setState({
      notes: previousNotes
    })
  }
  
  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <h1>React and Firebase Tutorial</h1>
        </div>
        <div className="notesBody">
        {
          this.state.notes.map((note) => {
            return (
              <Note noteContent={note.content} noteID={note.id} key={note.id} />
            )
          })
        }
        </div>
        <div className="notesFooter">
          <NoteForm addNote={this.addNote} />
        </div>
      </div>
    );
  }
}

export default App;
