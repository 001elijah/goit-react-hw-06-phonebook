import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
        filter: ''
    },
    reducers: {
        add(state, action) {
            // localStorage.setItem('contacts', JSON.stringify([...state.contacts, action.payload])); //це недобре, треба вирішити (через persist)
            // return [...state, action.payload];
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        },
        remove(state, action) {
            // localStorage.setItem('contacts', JSON.stringify([...state.contacts.filter(contact => contact.id !== action.payload.id)])); //це недобре, треба вирішити
            // return state.filter(contact => contact.id !== action.payload.id);
            return {
                ...state,
                contacts: [...state.contacts.filter(contact => contact.id !== action.payload.id)]
            }
        },
        filter(state, { payload }) {
            return {
                ...state,
                filter: payload
            }
        }
    },
});

export const { add, remove, filter } = contactsSlice.actions;
export default contactsSlice.reducer;