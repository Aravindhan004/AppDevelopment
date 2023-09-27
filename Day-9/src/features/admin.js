import {createSlice} from '@reduxjs/toolkit';

export const adminSlice = createSlice({
    name : 'admin',     
    initialState : { 
        value : {
            email: 'Aathithiya'
        },
        genre: [
            'horror',
            'romance',
            'cop',
            'thriller',
            'sci-fi',
        ],
        users: [
            {
                id: 1,
                name: 'Aathi',
                email: 'aathi@gmail.com',
                password: '123',
            }
        ],
        books: [
            {
                id: 1,
                title: 'Harry Potter',
                author: 'JK',
                genre: 'fantasy',
            }
        ],
        events: []
    },
    reducers : {
        setUsers(state, action) {
            state.users = [...state.users, action.payload]
        },
        setBooks(state, action) {
            state.books = [...state.books, action.payload]
        },
        setEvents(state, action) {
            state.events = [...state.events, action.payload]
        },
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = " ";
        }
    }
});

export const {login, logout, setUsers, setBooks, setEvents} = adminSlice.actions;
export default adminSlice.reducer;