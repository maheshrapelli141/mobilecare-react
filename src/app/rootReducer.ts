import { combineReducers } from '@reduxjs/toolkit'
import loginReducer from 'modules/Login/loginSlice';

const rootReducer = combineReducers({
    login: loginReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;