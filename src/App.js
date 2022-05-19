import { useEffect, useState } from "react";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import { nanoid } from "nanoid";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "15/04/2021 7:31:35 PM"
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "20/10/2022 7:31:20 PM"
    }
  ]);
  const [searchText, setSearchText] = useState("");

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    console.log("+++++++++++++++++++++++++++++++++++++++");

    console.log("- notes", notes);

    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
    console.log("+++++++++++++++++++++++++++++++++++++++");
  }, [notes]);

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleDeleteNote={deleteNote}
          handleAddNote={addNote}
        />
      </div>
    </div>
  );
}

export default App;
