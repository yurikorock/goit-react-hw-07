import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
    selectLoading: (state) => {
      state.loading = true;
    },
    selectContacts: (state, action) => {
      state.loading = false;
      state.error = null;
      state.items = action.payload;
    },
    selectError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
