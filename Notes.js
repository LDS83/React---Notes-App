import React, { useState } from 'react';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentNoteIndex, setCurrentNoteIndex] = useState(null);
  const [currentNote, setCurrentNote] = useState('');

  const handleAddNote = () => {
    setNotes([...notes, newNote]);
    setNewNote('');
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const handleEditNote = (index) => {
    setIsEditing(true);
    setCurrentNoteIndex(index);
    setCurrentNote(notes[index]);
  };

  const handleUpdateNote = () => {
    const updatedNotes = notes.map((note, index) =>
      index === currentNoteIndex ? currentNote : note
    );
    setNotes(updatedNotes);
    setIsEditing(false);
    setCurrentNoteIndex(null);
    setCurrentNote('');
  };

  return (
    <div className="notes-app">
      <h1>Notes App</h1>
      <input
        type="text"
        value={isEditing ? currentNote : newNote}
        onChange={(e) => (isEditing ? setCurrentNote(e.target.value) : setNewNote(e.target.value))}
        placeholder="Add a new note"
      />
      {isEditing ? (
        <button onClick={handleUpdateNote}>Update Note</button>
      ) : (
        <button onClick={handleAddNote}>Add Note</button>
      )}
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note}
            <div>
              <button onClick={() => handleEditNote(index)}>Edit</button>
              <button onClick={() => handleDeleteNote(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;








