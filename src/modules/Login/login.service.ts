import api from "utils/Api";
import { LoginDto } from "./interface";

export const LoginService = {
    login: async (data: LoginDto) => await api.post('/auth/login',data)
};
