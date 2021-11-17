import ResponseModel from "~/models/ResponseModel";
import MyIpModel from "~/models/MyIpModel";
import Const from "~/const/Const";
import UserModel from "~/models/UserModel";
import RegistrationUserModel from "~/models/RegistrationUserModel";

export default {
  async getMyIp () {
    const res: Response = await fetch("http://ip.jsontest.com/");
    if (res.ok) {
      const json: MyIpModel = await res.json(); ;
      return json.ip;
    }
  },
  async registration (user: RegistrationUserModel): Promise<UserModel> {
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
        const userData: UserModel = json.data;
        return userData;
      } else {
        throw new Error(json.errors);
      }
    } else {
      throw new Error("Error " + res.status);
    }
  }
}
