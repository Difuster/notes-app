import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions as notesActions, selectNotes, selectEditingNoteId } from '../../slices/notesSlice';
import AddButton from '../Buttons/AddButton/AddButton';
import CloseButton from '../Buttons/CloseButton/CloseButton';
import './Modal.scss';
import importantIcon from '../../assets/img/important.png';
import boldIcon from '../../assets/img/bold.png';

export default function Modal({status, setModalStatus}) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isImportant, setIsImportant] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const dispatch = useDispatch();

  const notes = useSelector(selectNotes);
  const id = useSelector(selectEditingNoteId);

  const titleRef = useRef();
  const textRef = useRef();

  const handleEditNote = (e) => {
    e.preventDefault();
    dispatch(notesActions.editNote({id, title, text, isImportant, isBold}));
    dispatch(notesActions.setEditingNoteId(""));
    setModalStatus("none");
  };

  const handleClose = (e) => {
    e.preventDefault();
    dispatch(notesActions.setEditingNoteId(""))
    setModalStatus("none");
  };

  useEffect(() => {
    if (id) {
      const note = notes.find(note => note.id === id);
      setTitle(note.title);
      setText(note.text);
      setIsImportant(note.isImportant);
      setIsBold(note.isBold);
    }
  }, [id, notes])

  return (
    <div className="modal" style={{display: status}}>
      <div className="modal__body">
        <form onSubmit={(e) => handleEditNote(e)} className="modal__form">
          <div className="modal__title">
            <div className="modal__title_header">
              <h2>Заметка</h2>
              <div className="title_header__btns">
                <p
                  className="title_header__red"
                  onClick={() => setIsImportant(!isImportant)}
                >
                  <img src={importantIcon} alt="Важно" />
                </p>
                <p
                  className="title_header__bold"
                  onClick={() => setIsBold(!isBold)}
                >
                  <img src={boldIcon} alt="Выделить" />
                </p>
              </div>
            </div>
            <input
              type="text"
              value={title}
              ref={titleRef}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="modal__text">
            <h2>Дополнение</h2>
            <textarea
              maxLength="500"
              value={text}
              ref={textRef}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="form_btns">
            <AddButton value="Сохранить" />
            <CloseButton handler={handleClose} value="Закрыть" />
          </div>
        </form>
      </div>
      <div className="overlay"></div>
    </div>
  )
}