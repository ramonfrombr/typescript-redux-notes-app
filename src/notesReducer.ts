import { Action } from "./actions";

export interface NotesStateProps {
    notes: string[];
}

const initialState = {
    notes: []
}


export const notesReducer = (state:NotesStateProps = initialState, action:Action) => {

    switch(action.type) {
        case "ADD_NOTE": {

            return {...state, notes: [...state.notes, action.payload.note]}
        }
        
        case "REMOVE_NOTE": {

            return {...state, notes: [...state.notes.filter(note => note!==action.payload.note)]}
        }

        case "EDIT_NOTE": {

            return {...state, notes: [...state.notes.map(note => note === action.payload.note ? action.payload.newNote : note)]};
        }

        default:
            return state
    }
}