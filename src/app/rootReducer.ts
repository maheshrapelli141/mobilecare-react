import { combineReducers } from '@reduxjs/toolkit'
import loginReducer from 'modules/Login/loginSlice';
import forgotPasswordReducer from 'modules/ForgotPassword/forgotPasswordSlice';
import  registerYourDomainReducer  from 'modules/RegisterYourDomain/registerYourDomainSlice';
import myPatientsReducer from 'modules/MyPatients/myPatientsSlice';

const rootReducer = combineReducers({
    login: loginReducer,
    forgotPassword: forgotPasswordReducer,
    registerYourDomain: registerYourDomainReducer,
    patients: myPatientsReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;