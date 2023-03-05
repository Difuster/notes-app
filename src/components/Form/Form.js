import React, { useState, useRef, useEffect } from 'react';
import uniqid from 'uniqid';
import { useDispatch } from 'react-redux';
import { actions as notesActions } from '../../slices/notesSlice';
import { actions as alertActions } from '../../slices/alertSlice';
import './Form.scss';
import Alert from '../Alert/Alert';
import AddButton from '../Buttons/AddButton/AddButton';

export default function Form() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const addNote = (noteId, value) => {
    const note = {
      id: noteId,
      title: value,
      text: "...",
      isImportant: false,
      isBold: false,
    }
    dispatch(notesActions.addNote(note));
  }

  const getAlert = (alert) => {
    dispatch(alertActions.setAlert(alert));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    const trimmedValue = inputValue.trim();
    if (trimmedValue) {
      addNote(id, trimmedValue);
      setInputValue("");
      const alert = {
        value: "Заметка успешно сохранена",
        type: "success",
        visibility: "visible",
      }
      getAlert(alert);
    } else {
      const alert = {
        value: "Поле не должно быть пустым",
        type: "warning",
        visibility: "visible",
      }
      getAlert(alert);
    }
  };

  const handleInputChange = (e) => {
    const alert = {
      value: "",
      type: "",
      visibility: "hidden",
    }
    getAlert(alert);
    setInputValue(e.target.value);
  };

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, [])

  return (
    <section className="form">
      <div className="container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            className="form__text"
            type="text"
            placeholder="Введите заметку"
            ref={inputRef}
            onChange={(e) => handleInputChange(e)}
            value={inputValue}
          />
          <AddButton value="Добавить" />
        </form>
        <Alert />
      </div>
    </section>
  )
}