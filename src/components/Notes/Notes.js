import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Notes.scss';
import { actions as notesActions, selectNotes } from '../../slices/notesSlice';
import editIcon from '../../assets/img/edit_icon.png';

export default function Notes({setModalStatus}) {
  const notes = useSelector(selectNotes);
  const dispatch = useDispatch();

  const handleEditNote = (e, id) => {
    e.preventDefault();
    dispatch(notesActions.setEditingNoteId(id));
    setModalStatus("flex");
  };

  const handleDeleteNote = (e, id) => {
    e.preventDefault();
    setTimeout(() => dispatch(notesActions.deleteNote(id)), 500);
  };

  useEffect(() => {
    const data = JSON.stringify(notes);
    localStorage.setItem('notes', data);
  }, [notes])

  return (
    <section className="notes">
      <div className="container">
        <h1>Заметки</h1>
        <ul className="notes__list">
          {
            notes ? notes.map(note => {
              return (
                <li className="note" key={note.id}>
                  <div className="note__header">
                    <p
                      className={
                        `note__title ${note.isImportant ? "note__title_important" : ""} ${note.isBold ? "note__title_bold" : ""}`
                      }>
                        {note.title}
                    </p>
                    <div className="note__btns">
                      <button
                        className="note__edit-btn"
                        onClick={(e) => handleEditNote(e, note.id)}
                      >
                        <img src={editIcon} alt="Править" />
                      </button>
                      <button
                        className="note__del-btn"
                        onClick={(e) => handleDeleteNote(e, note.id)}
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                  <div className="note__body">
                    <p>{note.text}</p>
                  </div>
                </li>
              )
            })
            : null
          }
        </ul>
          
      </div>
    </section>
  )
}
