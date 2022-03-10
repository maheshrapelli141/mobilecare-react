import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisterYourDomainDto } from "./interface";
import { RegisterYourDomainService } from "./registerYourDomain.service";

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
};

const registerYourDomainSlice = createSlice({
    name: 'registerYourDomain',
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
        requestFailed: (state, action: PayloadAction<any>) => {
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                message: action.payload.message
            }
        },
    }
});

export const { requestFailed, requestProcessing, requestSuccess } = registerYourDomainSlice.actions;

export default registerYourDomainSlice.reducer;

export const registerYourDomain = (data: RegisterYourDomainDto) => async (dispatch: any) => {
    try {
        dispatch(requestProcessing());
        const resp = await RegisterYourDomainService.registerYourDomain(data);
        dispatch(requestSuccess());
    } catch (error: any) {
        dispatch(requestFailed(error.message));
    }
}