import { createSlice } from '@reduxjs/toolkit';

const whiteLists = createSlice({
    name: 'whiteLists',
    initialState: {
        user: null,
        fbUid: '',
        token: '',
        flag: true,

    },
    reducers: {
        saveUser: (state, action) => {
            state.user = action.payload;
            state.token = action.payload?.api_token;
        },
        setFBUid: (state, action) => {
            state.user = action.payload;
        },
        logOutUser: (state, action) => {
            state.user = null;
            state.token = '';
        },
        deleteAccount: (state, action) => {
            state.user = null;
            state.token = '';
        },
        getValues: (state, action) => {
            state.flag = action.payload;
        }
    }
});

export const { logOutUser, saveUser, getValues, setFBUid, deleteAccount } = whiteLists.actions;
export default whiteLists.reducer;