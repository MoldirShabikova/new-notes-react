import { MdDeleteForever } from "react-icons/md";
import AddNote from "./AddNote";

const NotesList = ({ notes, handleDeleteNote, handleAddNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <div className="note" key={note.id}>
          <span>{note.text}</span>

          <div className="note-footer">
            <small>{note.date}</small>

            <MdDeleteForever
              onClick={() => handleDeleteNote(note.id)}
              className="delete-icon"
              size="1.5em"
            />
          </div>
        </div>
      ))}

      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
