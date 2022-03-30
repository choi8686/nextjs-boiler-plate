import fetchData from "./api";

const getExampleRequest = async () => {
  try {
    const res: any = await fetchData({
      method: "get",
      url: "/api/getdata/123",
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};
const postExampleRequest = () => {
  return null;
};
const updateExampleRequest = () => {
  return null;
};
const removeExampleRequest = () => {
  return null;
};

export {
  getExampleRequest,
  postExampleRequest,
  updateExampleRequest,
  removeExampleRequest,
};
