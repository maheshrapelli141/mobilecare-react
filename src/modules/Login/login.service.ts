import axios from "axios";
import api from "utils/Api";
import { LoginDto } from "./interface";


export const LoginService = {
    login: async (data: LoginDto) => {
        return await api.get('',{ params: {jsonRequest: `{"account-no":"7","message-body":{"device-id":"WEB_12415","device-identifier":"WEB","device-name":"WEB","device_type":"WEB","is-reauthenticate":"0","start_persistent_connection":"false","user-name":"${data['username']}", "password":"${data['password']}", "forced-login": "${data['forced-login']}"	},"message-from":"amitg@vpzqtsolv.onmicrosoft.com","message-id":null,"message-priority":null,"message-type":"authentication","message-ver":"1.0"}`}});
    }
};
