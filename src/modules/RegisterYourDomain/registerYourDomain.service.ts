import api from "utils/Api";
import { RegisterYourDomainDto } from "./interface";

export const RegisterYourDomainService = {
    registerYourDomain: (data: RegisterYourDomainDto) => api.post('/register-your-domian',data)
}