import axios from "axios";

export const MyPatientsService = {
    getAll: async () => await axios.get('https://62308645f113bfceed53eef9.mockapi.io/api/patients')
}