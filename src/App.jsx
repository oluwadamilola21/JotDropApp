import { useState } from 'react'
import NotesForm from './components/NotesForm'
import NoteList from './components/NoteList';
import { FaFile } from 'react-icons/fa';

function App() {
  const [jots, setJots] = useState([])
  const toAddNotes = (jot) => {
    const newJots = {
      id: Date.now(), 
      title: jot.title,
      content: jot.content
    }
    const addedNotes = jots.concat(newJots);
    setJots(addedNotes);
  }
  const handleDeleteTask = (id) => {
    setJots(jots.filter(jot => jot.id !== id));
  };
  return (
    <>
      <div className="min-h-screen bg-amber-200 p-4">
        <div className="max-w-xl mx-auto bg-amber-200 p-6 rounded-2xl shadow border-4 border-red-500">
          <div>
            <h1 className="text-2xl font-bold font-savate text-center mb-4">
              Jot Drop
            </h1>

          </div>

          <NotesForm onAdd = {toAddNotes}/>
          <NoteList notes={jots} onDelete={handleDeleteTask}/>
        </div>
      </div>

    </>
  )
}

export default App
