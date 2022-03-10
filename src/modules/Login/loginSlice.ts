import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'global.interface';
import { LoginService } from './login.service';
import { LoginDto } from './interface';

type LoginState = {
    isLoading: boolean,
    isError: boolean,
    message: string,
    isSuccess: boolean,
    user?: User
}

const initialState: LoginState = {
    isLoading: false,
    isError: false,
    message: '',
    isSuccess: false
};

const loginSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginRequest: (state) =>{
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
                message: ''
            }
        },
        loginSuccess: (state, action: PayloadAction<any>) =>{
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                message: 'Login Success',
                user: action.payload.user
            }   
        },
        loginFailure: (state, action: PayloadAction<any>) =>{
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                message: action.payload.message
            }
        }
    }
});

export const { loginRequest, loginSuccess, loginFailure } = loginSlice.actions;

export default loginSlice.reducer;

export const login = ({username,password} : LoginDto) => async (dispatch: any) => {
    try {
        dispatch(loginRequest());
        const data = await LoginService.login({ username, password });
        dispatch(loginSuccess(data));
    } catch (error: any) {
        dispatch(loginFailure({message: error.message}))
    }
};