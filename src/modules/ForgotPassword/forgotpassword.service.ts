import api from "utils/Api";
import { ForgotPasswordDto } from "./interface";

export const ForgotPasswordService = {
    forgotPassword: (data: ForgotPasswordDto) => api.post('/forgot-password',data)
};