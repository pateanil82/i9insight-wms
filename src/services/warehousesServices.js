import axiosInstance from "./axiosInstance";

const handleError = (error) => {
  console.error(" ERROR : ", error);
  const statusCode = error.response ? error.response.status : "500";
  const errorMessage = error?.response?.data?.detail;
  let plainErrorMessage;
  if (errorMessage === "Could not validate credentials") {
    localStorage.clear();
    window.location.href = "/";
  } else {
    console.error("Error message is undefined");
    plainErrorMessage = "An error occurred";
  }
  return { statusCode, errorMessage: plainErrorMessage };
};
export const getWarehouseList = async () => {
  try {
    const response = await axiosInstance.get("/wms/ware_house_list/");
    return { statusCode: response.status, data: response.data };
  } catch (error) {
    console.log("console_error", error);
    return handleError(error);
  }
};
export const getWarehouseItemList = async () => {
  try {
    const response = await axiosInstance.get("/wms/item_list/");
    return { statusCode: response.status, data: response.data };
  } catch (error) {
    console.log("console_error", error);
    return handleError(error);
  }
};
