import ResponseModel from "~/models/ResponseModel";
import MyIpModel from "~/models/MyIpModel";
import Const from "~/const/Const";
import UserModel from "~/models/UserModel";
import RequestRegisterModel from "~/models/RequestRegisterModel";
import RequestLoginModel from "~/models/RequestLoginModel";

export default {
  // TODO: detect client's IP on server side
  async getMyIp () {
    const res: Response = await fetch("http://ip.jsontest.com/");
    if (res.ok) {
      const json: MyIpModel = await res.json(); ;
      return json.ip;
    }
  },
  async registration (user: RequestRegisterModel): Promise<string[] | false> {
    const path = "/register";
    const res: Response = await fetch(Const.baseUrl + path, {
      method: "POST",
      body: JSON.stringify({ ...user }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });
    if (res.ok) {
      const json: ResponseModel = await res.json();
      if (json.status === 200) {
        const userData: UserModel = json.data.user;
        localStorage.setItem("userToken", userData.api_token);
        return false;
      } else {
        return json.errors;
      }
    } else {
      return ["Error: " + res.statusText];
    }
  },
  async login (user: RequestLoginModel): Promise<string[] | false> {
    const path = "/signin";
    const res: Response = await fetch(Const.baseUrl + path, {
      method: "POST",
      body: JSON.stringify({ ...user }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });
    if (res.ok) {
      const json: ResponseModel = await res.json();
      if (json.status === 200) {
        const userData: UserModel = json.data.user;
        localStorage.setItem("userToken", userData.api_token);
        return false;
      } else {
        return json.errors;
      }
    } else {
      return ["Error: " + res.statusText];
    }
  },
  async logout (): Promise<string[] | false> {
    const path = "/logout";
    const token = localStorage.getItem("userToken");
    if (token) {
      const res: Response = await fetch(Const.baseUrl + path + "?api_token=" + token, {
        method: "POST",
        headers: {
          "Accept": "application/json"
        }
      });
      if (res.ok) {
        const json: ResponseModel = await res.json();
        if (json.status === 200) {
          localStorage.removeItem("userToken");
          return false;
        } else {
          return json.errors;
        }
      } else {
        return ["Error: " + res.statusText];
      }
    } else {
      return false;
    }
  }
}
