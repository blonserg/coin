import HttpService from "./HttpService";
import StaticItemModel from "~/models/StaticItemModel"

export default {
  async get (path: string) {
    const data: StaticItemModel[] = await HttpService.get("/static-content" + path);
    const res: {[key:string]: string} = {};
    data.forEach((item: StaticItemModel) => {
      res[item.keyword] = item.content;
    });
    return res;
  }
};
