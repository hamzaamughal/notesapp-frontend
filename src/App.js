import './App.css'
import { useEffect, useState } from "react";
import Note from "./components/Note/Note";
import DUMMY_NOTES from "./DUMMY_NOTES";

function App() {
  const [notesList, setNotesList] = useState([])

  useEffect(() => {
    const listFromStorageString = localStorage.getItem('my-notes')
    if (listFromStorageString) {
      const listFromStorageArray = JSON.parse(listFromStorageString)
      setNotesList(listFromStorageArray)
    } else {
      setNotesList(DUMMY_NOTES)
    }
  }, [])
  console.log(notesList);
  useEffect(() => {
    localStorage.setItem('my-notes', JSON.stringify(notesList))
  }, [notesList])
  // const getNotes = async () => {
  //   try {
  //     const { data: { notes } } = await axios.get('http://localhost:5000/notes')
  //     console.log(notes);
  //     setNotesList(notes)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  const updateNoteItem = (updatedNote) => {
    console.log(updatedNote);
    const updatedList = notesList.map((noteItem) => {
      if (noteItem._id === updatedNote._id) {
        return updatedNote
      }
      return noteItem
    })
    setNotesList(updatedList)
  }
  return (
    <div className="App">
      <div className="notes-list">
        {notesList.map((noteItem, index) => {
          return (
            <Note note={noteItem} onNoteUpdate={updateNoteItem} key={index} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
