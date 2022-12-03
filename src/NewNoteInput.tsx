import React, { ChangeEvent, useState } from "react";

interface NewNoteInputProps {
  addNote(note: string): void;
}

const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = useState<string>("");

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const onAddNoteClick = () => {
    addNote(note);
    setNote("");
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input onChange={updateNote} value={note} type="text" name="note" />
      <button onClick={onAddNoteClick}>Add Note</button>
    </form>
  );
};

export default NewNoteInput;
