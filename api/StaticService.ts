import HttpService from "./HttpService";
import StaticItemModel from "~/models/StaticItemModel";

export default {
  async main () {
    const data: StaticItemModel[] = await HttpService.get("/static-content/main");
    const res: {[key:string]: string} = {};
    data.forEach((item: StaticItemModel) => {
      res[item.keyword] = item.content;
    });
    return res;
  },
  async news () {
    const data: StaticItemModel[] = await HttpService.get("/static-content/news");
    const res: {[key:string]: string} = {};
    data.forEach((item: StaticItemModel) => {
      res[item.keyword] = item.content;
    });
    return res;
  }
};
