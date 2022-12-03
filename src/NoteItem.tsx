import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editNote } from "./actions";

interface NoteItemProps {
  note: string;
  onRemoveNote: (note: string) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ note, onRemoveNote }) => {
  const dispatch = useDispatch();

  const [editOn, setEditOn] = useState<boolean>(false);
  const [editedNote, setEditedNote] = useState(note);

  const saveEdit = () => {
    console.log(editedNote);
    dispatch(editNote(note, editedNote));
    setEditOn(false);
  };

  const cancelEditOn = () => {
    setEditOn(false);
    setEditedNote(note);
  };

  return (
    <li>
      {editOn ? (
        <input
          value={editedNote}
          onChange={(e) => setEditedNote(e.target.value)}
          type="text"
        />
      ) : (
        <span>{note}</span>
      )}

      {editOn ? (
        <>
          <button onClick={() => cancelEditOn()}>cancel edit</button>
          <button onClick={() => saveEdit()}>save</button>
        </>
      ) : (
        <>
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => onRemoveNote(note)}
          >
            &times;
          </button>
          <button onClick={() => setEditOn(true) /*onEditNote(note)*/}>
            edit
          </button>
        </>
      )}
    </li>
  );
};

export default NoteItem;
