import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import contactsReducer from './contactsSlice';

// export const applyFilter = createAction('filter/apply');

// export const addContact = createAction('contacts/add');
// export const rmContact = createAction('contacts/remove');

// const contactsReducer = createReducer([], {
//     [addContact]: (state, action) => {
//         localStorage.setItem('contacts', JSON.stringify([...state, action.payload])); //це недобре, треба вирішити (через persist)
//         return [...state, action.payload];
//     },
//     [rmContact]: (state, action) => {
//         localStorage.setItem('contacts', JSON.stringify([...state.filter(contact => contact.id !== action.payload.id)])); //це недобре, треба вирішити
//         return state.filter(contact => contact.id !== action.payload.id);
//     }
// });

// const filterReducer = createReducer("", {
//     [applyFilter]: (state, { payload }) => payload
// });

// const filterReducer = createReducer("", (builder) => { // this is up-to-date version
//     builder.addCase(applyFilter, (state, { payload }) =>
//         payload
//     )
    // .addCase....
    // .addCase....
// });

// const preloadedState = {
//     contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
//     filter: ''
// };

const persistContactsConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts']
};

const persistedContactsReducer = persistReducer(persistContactsConfig, contactsReducer);

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // preloadedState,
    // devTools: process.env.NODE_ENV === "production"// true/false - show/hide redux devtools state
});

export const persistor = persistStore(store);