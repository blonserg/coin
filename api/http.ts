import ResponseModel from "~/model/ResponseModel";
import Const from "~~/const/const";

export default {
  async get (path: string) {
    const res: Response = await fetch(Const.baseUrl + path);
    if (res.ok) {
      const json: ResponseModel = await res.json();
      if (json.status === 200) {
        return json.data
      } else {
        throw new Error(json.errors)
      }
    } else {
      throw new Error('Error ' + res.status)
    }
  }
