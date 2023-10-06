import { createSlice } from "@reduxjs/toolkit";
import { endPoints } from "../utility/apiEndPoints";
import { ApiPostRequest } from "../utility/apiService";


export const SignupApi = ApiPostRequest({
    endPoints: endPoints.register
})

export const SigninApi = ApiPostRequest({
    endPoints: endPoints.login
})

export const googleLoginApi = ApiPostRequest({
    endPoints: endPoints.social_login
})

export const forgotPasswordApi = ApiPostRequest({
    endPoints: endPoints.forget_password,
})

export const resetPasswordApi = ApiPostRequest({
    endPoints: endPoints.reset_password
})

export const otpVerifyApi = ApiPostRequest({
    endPoints: endPoints.otp_verify
})

const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        signup: {
            loading: false,
            data: {},
            error: null
        },
        signin: {
            loading: false,
            data: {},
            error: null
        },
        googleLogin: {
            loading: false,
            data: {},
            error: null
        },
        forgotpassword: {
            loading: false,
            data: {},
            error: null
        },
        otpVerify: {
            loading: false,
            data: {},
            error: null
        },
        resetpassword: {
            loading: false,
            data: {},
            error: null
        },
    },
  
    extraReducers: (builder) => {
        builder.addCase(SignupApi.pending, (state, action) => {
            state.signup.loading = true;
        }).addCase(SignupApi.fulfilled, (state, action) => {
            state.signup.loading = false;
            state.signup.data = action.payload?.data;
        }).addCase(SignupApi.rejected, (state, action) => {
            state.signup.loading = false;
            state.signup.error = action.payload;
        });

        builder.addCase(SigninApi.pending, (state, action) => {
            state.signin.loading = true;
        }).addCase(SigninApi.fulfilled, (state, action) => {
            state.signin.loading = false;
            state.signin.data = action.payload?.data
        }).addCase(SigninApi.rejected, (state, action) => {
            state.signin.loading = false;
            state.signin.error = action.payload;
        });

        builder.addCase(googleLoginApi.pending, (state, action) => {
            state.googleLogin.loading = true;
        }).addCase(googleLoginApi.fulfilled, (state, action) => {
            state.googleLogin.loading = false;
            state.googleLogin.data = action.payload?.data;
        }).addCase(googleLoginApi.rejected, (state, action) => {
            state.googleLogin.loading = false;
            state.googleLogin.error = action.payload;
        });

        builder.addCase(forgotPasswordApi.pending, (state, action) => {
            state.forgotpassword.loading = true;
        }).addCase(forgotPasswordApi.fulfilled, (state, action) => {
            state.forgotpassword.loading = false;
            state.forgotpassword.data = action.payload?.data;
        }).addCase(forgotPasswordApi.rejected, (state, action) => {
            state.forgotpassword.loading = false;
            state.forgotpassword.error = action.payload;
        });

        builder.addCase(otpVerifyApi.pending, (state, action) => {
            state.otpVerify.loading = true;
        }).addCase(otpVerifyApi.fulfilled, (state, action) => {
            state.otpVerify.loading = false;
            state.otpVerify.data = action.payload?.data;
        }).addCase(otpVerifyApi.rejected, (state, action) => {
            state.otpVerify.loading = false;
            state.otpVerify.error = action.payload;
        });

        builder.addCase(resetPasswordApi.pending, (state, action) => {
            state.resetpassword.loading = true;
        }).addCase(resetPasswordApi.fulfilled, (state, action) => {
            state.resetpassword.loading = false;
            state.resetpassword.data = action.payload?.data;
        }).addCase(resetPasswordApi.rejected, (state, action) => {
            state.resetpassword.loading = false;
            state.resetpassword.error = action.payload;
        });

    }
})

export default authSlice.reducer;