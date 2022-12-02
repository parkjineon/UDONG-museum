import axios from "axios";

const GET_NEAR = async (data) => {
  try {
    const response = await axios.get("/api/exhibitions/near", { params: data });
    return response;
  } catch (err) {
    console.log(err);
    return {
      ok: false,
      message: err.message,
    };
  }
};

const GET_RECENT = async () => {
  try {
    const response = await axios.get("/api/exhibitions/following/recent");
    return response;
  } catch (err) {
    console.log(err);
    return {
      ok: false,
      message: err.message,
    };
  }
};
const createExhibition = () => {};
const deleteExhibition = () => {};
const editExhibition = () => {};
const getExhibition = () => {};

export {
  GET_NEAR,
  GET_RECENT,
  createExhibition,
  deleteExhibition,
  editExhibition,
  getExhibition,
};
