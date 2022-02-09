import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: { listIsVisible: false },
    reducers: {
        toggle(state) {
            state.listIsVisible = !state.listIsVisible;
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice;