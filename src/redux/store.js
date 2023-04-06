import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const applyFilter = createAction('filter/apply');

export const addContact = createAction('contacts/add');
export const rmContact = createAction('contacts/remove');

const contactsReducer = createReducer(JSON.parse(localStorage.getItem('contacts')) ?? [], {
    [addContact]: (state, action) => {
        const found = state.find(contact => contact.name.toLowerCase() === action.payload.name.toLowerCase());
        if (found) {
        alert(`${action.payload.name} is already in contacts.`);
        return;
        };
        localStorage.setItem('contacts', JSON.stringify([...state, action.payload]));
        return [...state, action.payload];
    },
    [rmContact]: (state, action) => {
        console.log(action.payload.id);
        localStorage.setItem('contacts', JSON.stringify([...state.filter(contact => contact.id !== action.payload.id)]));
        return state.filter(contact => contact.id !== action.payload.id);
    }
});

const filterReducer = createReducer("", {
    [applyFilter]: (state, action) => action.payload
});

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer
  },
})