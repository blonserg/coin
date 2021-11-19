import HttpService from "./HttpService";
import StaticItemModel from "~/models/StaticItemModel"
import ResponseModel from "~/models/ResponseModel";

export default {
  async get (path: string) {
    const response: ResponseModel = await HttpService.get("/static-content" + path);
    if (response.status === 200) {
      const data: StaticItemModel[] = response.data;
      const res: {[key:string]: string} = {};
      data.forEach((item: StaticItemModel) => {
        res[item.keyword] = item.content;
      });
      return res;
    } else {
      // TODO: notify user somehow about the error
      return {};
    }
  }
};
