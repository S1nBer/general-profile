import {createSlice} from "@reduxjs/toolkit";

let initialState: any[] = [];

const projectsReducer = createSlice({
    initialState: initialState,
    name: 'projects',
    reducers: {
        addProjects(state, actions) {
            state.push(actions.payload)
        },
        clearProjects() {
            return initialState
        }
    }
});

export default projectsReducer.reducer;
export const {addProjects, clearProjects} = projectsReducer.actions;