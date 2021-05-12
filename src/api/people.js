import { axiosInstance } from "./index";

export const getPeopleList = (name) =>
  axiosInstance.request({
    url: "/people/",
    method: "get",
    params: name ? { search: name } : {},
  });

export const people = (peopleId) =>
  axiosInstance.request({ url: `/people/${peopleId}`, method: "get" });
