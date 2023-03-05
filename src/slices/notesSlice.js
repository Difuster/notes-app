import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: JSON.parse(localStorage.getItem("notes")) || [],
  editingNoteId: "",
}

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, {payload}) => {
      state.notes.push(payload);
    },
    deleteNote: (state, {payload}) => {
      const newNotes = state.notes.filter(note => note.id !== payload);
      state.notes = newNotes;
    },
    editNote: (state, {payload}) => {
      state.notes.forEach(note => {
        if (note.id === payload.id) {
          note.title = payload.title;
          note.text = payload.text;
          note.isImportant = payload.isImportant;
          note.isBold = payload.isBold;
        }
      })
    },
    setEditingNoteId: (state, {payload}) => {
      state.editingNoteId = payload;
    }
  }
})

const selectNotes = (state) => state.notes.notes;
const selectEditingNoteId = (state) => state.notes.editingNoteId;

export const { actions } = notesSlice;
export { selectNotes, selectEditingNoteId };

export default notesSlice.reducer;
