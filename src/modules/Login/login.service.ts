import api from "utils/Api";
import { LoginDto } from "./interface";

export const LoginService = {
    login: async (data: LoginDto) => {
        const resp = await api.post('/auth/login',{
            'message-body': {
              'agreement-status': 0,
              'app-mode': 0,
              'app-ver': 1,
              'device-id': '1c0083b5-b51d-46f1-b609-e465ee0d0d0e',
              'device-identifier': '1c0083b5-b51d-46f1-b609-e465ee0d0d0e',
              'device-name': 'TeamsFX',
              device_type: 'ANDROID',
              'forced-login': 1,
              'is-reauthenticate': 0,
              password: 'Abcd@1234',
              start_persistent_connection: false,
              'user-name': 'harryburns@vpzqtsolv.onmicrosoft.com'
            },
            'message-expiry-date': 1646826383355,
            'message-id': '1646825783355.UNUSED',
            'message-priority': 'P1',
            'message-timestamp': 1646825783355,
            'message-type': 'authentication',
            'message-ver': '1.0',
            'account-no': 7,
            'message-from': 'harryburns@vpzqtsolv.onmicrosoft.com'
          });
        return resp;
    }
};
