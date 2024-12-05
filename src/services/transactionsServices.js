import axiosInstance from "./axiosInstance";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/x-www-form-urlencoded",
};

export const getInwardItem = async (payload) => {
  try {
    const response = await axiosInstance.get("/wms/inward_item/", { params: payload });
    return { statusCode: response.status, data: response.data };
  } catch (error) {
    console.log("console_error", error);
    return handleError(error);
  }
};

export const getOutwardItem = async (payload) => {
  try {
    const response = await axiosInstance.get("/wms/outward_item/", { params: payload });
    return { statusCode: response.status, data: response.data };
  } catch (error) {
    console.log("console_error", error);
    return handleError(error);
  }
};
