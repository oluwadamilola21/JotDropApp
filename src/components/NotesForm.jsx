import React from 'react'
import { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';

function NotesForm({ onAdd }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const addNotes = (e) => {
        e.preventDefault();
        if (!title || !content) return;
        const newJots = {
            title,
            content,
        };
        onAdd(newJots)

        setTitle('');
        setContent('');
        console.log(newJots)
    }
    return (
        <>
            <div className='mt-5'>
                <div className="flex mb-3 mt-5">
                    <h2 className='text-xl font-bold font-savate mb-4'>Enter jots here</h2>
                    <FaArrowDown className="ml-2 text-red-500 text-xl" />
                </div>

                <form onSubmit={addNotes}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold font-savate mb-1">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="border rounded w-full py-2 px-3 mb-2"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold font-savate mb-1">Content</label>
                        <textarea
                            type="text"
                            id="content"
                            name="content"
                            className="border rounded w-full py-2 px-3 mb-2"
                            required
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>

                    <button
                       className="px-3 py-1 text-sm rounded bg-red-500 text-white font-savate hover:bg-red-600"
                        type="submit">
                        Add
                    </button>
                </form>
            </div>
        </>
    )
}

export default NotesForm





