import HttpService from "./HttpService";
import MyIpModel from "~/models/MyIpModel";
import UserModel from "~/models/UserModel";
import RequestRegisterModel from "~/models/RequestRegisterModel";
import RequestLoginModel from "~/models/RequestLoginModel";

export default {
  // TODO: detect client's IP on server side
  async getMyIp () {
    const res: Response = await fetch("http://ip.jsontest.com/");
    if (res.ok) {
      const json: MyIpModel = await res.json();
      return json.ip;
    } else {
      return "?";
    }
  },
  async registration (user: RequestRegisterModel): Promise<string[] | false> {
    const response = await HttpService.post("/register", user);
    if (response.status === 200) {
      const userData: UserModel = response.data.user;
      localStorage.setItem("userToken", userData.api_token);
      return false;
    } else {
      return response.errors;
    }
  },
  async login (user: RequestLoginModel): Promise<string[] | false> {
    const response = await HttpService.post("/signin", user);
    if (response.status === 200) {
      const userData: UserModel = response.data.user;
      localStorage.setItem("userToken", userData.api_token);
      return false;
    } else {
      return response.errors;
    }
  },
  async recoveryPassword (recoveryKey: string, password: string, passwordConfirmation: string): Promise<string[] | false> {
    const path = "/reset-password";
    const params = {
      "token": recoveryKey,
      password,
      "password_confirmation": passwordConfirmation
    };
    const response = await HttpService.post(path, undefined, params);
    if (response.status === 200) {
      const userData: UserModel = response.data.user;
      localStorage.setItem("userToken", userData.api_token);
      return false;
    } else {
      return response.errors;
    }
  },
  async logout (): Promise<string[] | false> {
    const token = localStorage.getItem("userToken");
    if (token) {
      const response = await HttpService.post("/logout", undefined, {
        api_token: token
      });
      if (response.status === 200) {
        localStorage.removeItem("userToken");
        return false;
      } else {
        return response.errors;
      }
    } else {
      return false;
    }
  }
}
