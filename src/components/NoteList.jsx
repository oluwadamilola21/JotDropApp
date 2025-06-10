import React, { useState } from 'react';
import { FaFile } from 'react-icons/fa';

const NoteList = ({ notes, onDelete }) => {
  const [expandedNoteId, setExpandedNoteId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedNoteId(prevId => (prevId === id ? null : id));
  };

  return (
    <div>
      <h2 className="mt-5 text-2xl font-bold font-savate text-center mb-4">Jots...</h2>
      <div className="note space-y-4">
        {notes.map((note) => {
          const isExpanded = expandedNoteId === note.id;
          const contentPreview = note.content.length > 80 && !isExpanded
            ? note.content.slice(0, 80) + '...'
            : note.content;

          return (
            <div
              key={note.id}
              className="bg-yellow-100 border-l-4 border-red-500 p-3 rounded"
            >
              <div className="flex items-start gap-3">
                <FaFile className="text-red-500 text-2xl mt-1" />
                <div>
                  <h2 className="text-gray-800 font-bold font-savate">{note.title}</h2>
                  <p className="text-gray-800">{contentPreview}</p>

                  {note.content.length > 80 && (
                    <button className="text-sm text-red-500 text-bold mt-1" onClick={() => toggleExpand(note.id)}>
                      {isExpanded ? 'Show less' : 'Read more'}
                    </button>
                  )}
                </div>
              </div>

              <button onClick={() => onDelete(note.id)} className="px-3 py-1 mt-3 text-sm rounded bg-red-500 text-white font-savate hover:bg-red-600">
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NoteList;
