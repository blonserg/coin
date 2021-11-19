import ResponseModel from "~/models/ResponseModel";
import Const from "~/const/Const";

export default {
  async get (path: string, params?: {[key: string]: any}): Promise<ResponseModel> {
    const userToken = localStorage.getItem("userToken");
    const extraHeaders: any = {};
    if (userToken) {
      extraHeaders.Authorization = "Bearer " + userToken;
    }

    if (params) {
      path += "?"
      params.entries().forEach((objectItem: any[]) => {
        const key = objectItem[0];
        const value = objectItem[1];
        path += key + "=" + value + "&"
      });
    }

    const res: Response = await fetch(Const.baseUrl + path, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        ...extraHeaders
      }
    });

    if (res.ok) {
      const json: ResponseModel = await res.json();
      return json;
    } else {
      return {
        status: res.status,
        data: null,
        errors: [res.statusText]
      };
    }
  },
  async post (path: string, bodyObject?: {[key: string]: any}, params?: {[key: string]: any}): Promise<ResponseModel> {
    const userToken = localStorage.getItem("userToken");
    const extraHeaders: any = {};
    if (userToken) {
      extraHeaders.Authorization = "Bearer " + userToken;
    }

    if (params) {
      path += "?";
      params.entries().forEach((objectItem: any[]) => {
        const key = objectItem[0];
        const value = objectItem[1];
        path += key + "=" + value + "&"
      });
    }

    const options: any = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        ...extraHeaders
      }
    }

    if (bodyObject) {
      options.body = JSON.stringify({ ...bodyObject });
    }

    const res: Response = await fetch(Const.baseUrl + path, options);

    if (res.ok) {
      const json: ResponseModel = await res.json();
      return json;
    } else {
      return {
        status: res.status,
        data: null,
        errors: [res.statusText]
      };
    }
  }
}
