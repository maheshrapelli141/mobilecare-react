import { combineReducers } from '@reduxjs/toolkit'
import loginReducer from 'modules/Login/loginSlice';
import forgotPasswordReducer from 'modules/ForgotPassword/forgotPasswordSlice';
import  registerYourDomainReducer  from 'modules/RegisterYourDomain/registerYourDomainSlice';

const rootReducer = combineReducers({
    login: loginReducer,
    forgotPassword: forgotPasswordReducer,
    registerYourDomain: registerYourDomainReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;