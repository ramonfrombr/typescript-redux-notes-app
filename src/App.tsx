import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import NewNoteInput from "./NewNoteInput";
import { NotesStateProps } from "./notesReducer";
import { addNote, removeNote } from "./actions";
import NoteItem from "./NoteItem";

function App() {
  const notes = useSelector<NotesStateProps, NotesStateProps["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  const onRemoveNote = (note: string) => {
    dispatch(removeNote(note));
  };

  console.log(notes);

  return (
    <>
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <ul>
        {notes.map((note, index) => (
          <NoteItem key={index} note={note} onRemoveNote={onRemoveNote} />
        ))}
      </ul>
    </>
  );
}

export default App;
