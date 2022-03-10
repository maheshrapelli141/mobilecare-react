import { combineReducers } from '@reduxjs/toolkit'
import loginReducer from 'modules/Login/loginSlice';
import forgotPasswordReducer from 'modules/ForgotPassword/forgotPasswordSlice';

const rootReducer = combineReducers({
    login: loginReducer,
    forgotPassword: forgotPasswordReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;