import { createAsyncThunk } from '@reduxjs/toolkit';
import { BaseUrl } from './apiEndPoints';
import { messageHandler, errorMessageHandler } from '../features/toastSlice';

// const setHeaders = (token) => ({
//     "Accept": "application/json",
//     "Content-Type": "multipart/form-data",
//     'consumer-access-token': token || ''
// })

export const ApiPostRequest = ({ key, endPoints, disableMessage }) => {
    return createAsyncThunk(
        `${key || endPoints}`,
        async ({ data }, { getState, dispatch }) => {
            const state = getState();
            const { token } = state?.whiteLists;
            const meta = {
                endPoints: endPoints,
                params: data
            }
            console.log('token -->', token);
            console.log('Api Request ->', JSON.stringify(meta));
            try {
                const parsedResponse = await fetch(`${BaseUrl}${endPoints}`, {
                    method: 'POST',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "multipart/form-data",
                        // "Authorization": `Bearer ${token}`,
                        'consumer-access-token': token || ''
                    },
                    body: data
                });
                let response = await parsedResponse.json();
                console.log("response", response);
                if (!disableMessage) {
                    if (response?.status == 'Success' || 'Error') {
                        dispatch(messageHandler(response?.message));
                        console.log(response?.message)
                    } else {
                        dispatch(errorMessageHandler(JSON.stringify(response?.message)))
                        console.log(JSON.stringify(response?.message));
                    }
                }
                return response;
            } catch (error) {
                console.log('error from api ==>', JSON.parse(error));
                return error;
            }
        }
    )
}

