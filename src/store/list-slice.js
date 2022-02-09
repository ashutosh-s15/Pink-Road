import { createSlice } from "@reduxjs/toolkit";

const DUMMY_DATA = [
    {
        id: '0',
        name: 'Taj Mahal',
        address: 'Agra, UP',
        distance: '500 km'
    },
    {
        id: '1',
        name: 'Nigra Falls',
        address: 'New York, USA',
        distance: '500 km'
    },
    {
        id: '2',
        name: 'Camp Nou',
        address: 'Barcelona, Spain',
        distance: '500 km'
    },
    {
        id: '3',
        name: 'Eiffel Tower',
        address: 'Pris, France',
        distance: '500 km'
    },
];

const listSlice = createSlice({
    name: 'list',
    initialState: {
        list: DUMMY_DATA
    },
    reducers: {
        addItemToList(state, action) {
            const newItem = action.payload;
            const existingItem = state.list.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.list.push({
                    id: newItem.id,
                    name: newItem.title,
                    address: newItem.address,
                    distance: newItem.distance
                })
            }
        },
        removeItemFromList(state, action) {
            const id = action.payload;
            state.list = state.list.filter(item => item.id !== id);
        }
    }
});

export const listActions = listSlice.actions;
export default listSlice;