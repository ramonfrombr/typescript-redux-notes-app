export type Action = {
    type: "ADD_NOTE" | "REMOVE_NOTE" | "EDIT_NOTE",
    payload: {note: string, newNote: string},
    //payload: string
}


export const addNote = (note: string):Action => ({
    type: "ADD_NOTE",
    payload: {note, newNote: ""},
})

export const removeNote = (note: string):Action => ({
    type: "REMOVE_NOTE",
    payload: {note, newNote: ""},
})

export const editNote = (note: string, newNote: string): Action => ({
    type: "EDIT_NOTE",
    payload: {note, newNote},
})