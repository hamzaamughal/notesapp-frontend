import React from 'react'
import './Note.css'

const Note = ({ note, onNoteUpdate }) => {

    const noteTextUpdated = (event) => {
        const newTextValue = event.currentTarget.textContent
        if (newTextValue === note.text) {
            return
        }
        const updatedNoteObject = {
            ...note,
            text: newTextValue
        }
        onNoteUpdate(updatedNoteObject);
    }

    return (
        <div className="note">
            <div onBlur={noteTextUpdated} contentEditable={true} suppressContentEditableWarning={true} className="note__text">{note.text}</div>
            <div className="note__link">
                <a href={note.link}>{note.link}</a>
            </div>
        </div>
    )
}

export default Note
