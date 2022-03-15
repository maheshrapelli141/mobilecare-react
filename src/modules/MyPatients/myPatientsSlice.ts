import { createSlice } from "@reduxjs/toolkit";
import { MyPatientsService } from "./mypatients.service";

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    patients: []
};

const myPatientsSlice = createSlice({
    name: 'patients',
    initialState,
    reducers: {
        patientsRequest: (state) => {
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
                patients: []
            };
        },
        patientsSuccess: (state,action) => {
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                patients: action.payload.patients
            }
        },
        patientsFailed: (state,action) => {
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                patients: [],
                message: action.payload.message
            };
        },
    }
});

export const { patientsFailed, patientsRequest, patientsSuccess } = myPatientsSlice.actions;

export default myPatientsSlice.reducer;

export const loadPatients = ()  => async (dispatch: any)=> {
    try {
        dispatch(patientsRequest());
        const resp = await MyPatientsService.getAll();
        console.log({resp});
        dispatch(patientsSuccess({patients: resp.data}));
    } catch (error: any) {
        dispatch(patientsFailed(error.message));
    }
}