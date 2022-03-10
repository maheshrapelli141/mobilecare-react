import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { ForgotPasswordService } from "./forgotpassword.service";
import { ForgotPasswordDto } from "./interface";

interface ForgotPasswordState {
    isLoading: boolean,
    isSuccess: boolean,
    isError: boolean,
    message: string
}

const initialState: ForgotPasswordState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
};

const forgotPasswordSlice = createSlice({
    name: 'forgotPassword',
    initialState,
    reducers: {
        requestProcessing: (state) => {
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
                message: ''
            }
        },
        requestSuccess: (state) => {
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                message: ''
            }
        },
        requestFailed: (state,action: PayloadAction<any>) => {
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                message: action.payload.any
            }
        },
    }
});

export const { requestFailed, requestProcessing, requestSuccess } = forgotPasswordSlice.actions;

export default forgotPasswordSlice.reducer;

export const forgotPassword = (data: ForgotPasswordDto) => async (dispatch: any) => {
    try {
        dispatch(requestProcessing());
        await ForgotPasswordService.forgotPassword(data);
        dispatch(requestSuccess());
    } catch (error: any) {
        dispatch(requestFailed(error.message));
    }
}