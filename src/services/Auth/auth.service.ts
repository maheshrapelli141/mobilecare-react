import api from "utils/Api";
import { LoginBody } from "./auth.interface";

export const login = async (data: LoginBody) => await api.post('/auth/login',data);
