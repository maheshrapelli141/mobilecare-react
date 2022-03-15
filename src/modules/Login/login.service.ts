import axios from "axios";
import api from "utils/Api";
import { LoginDto } from "./interface";

const serialize = function(obj: any) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

export const LoginService = {
    login: async (data: LoginDto) => {
        const resp = await axios.get(`https://ahidemo02.agnityhealthcare.com/commonprov/Device?jsonRequest={"account-no":"7","message-body":{"device-id":"WEB_12415","device-identifier":"WEB","device-name":"WEB","device_type":"WEB","is-reauthenticate":"0","start_persistent_connection":"false","user-name":"amitg@vpzqtsolv.onmicrosoft.com", "password":"2222"	},"message-from":"amitg@vpzqtsolv.onmicrosoft.com","message-id":null,"message-priority":null,"message-type":"authentication","message-ver":"1.0"}`);
        return resp;
    }
};
