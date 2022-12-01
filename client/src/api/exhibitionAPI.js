import axios from "axios";

const GET_NEAR = async (body) => {
  try {
    const response = await axios.get("/api/exhibitions/near");
    return response;
  } catch (err) {}
};
const createExhibition = () => {};
const deleteExhibition = () => {};
const editExhibition = () => {};
const getExhibition = () => {};
const listUpExhibition = () => {};

export {
  GET_NEAR,
  createExhibition,
  deleteExhibition,
  editExhibition,
  getExhibition,
  listUpExhibition,
};
