import axios from "axios";

export const getBooksReqest = async () => {
  try {
    return await axios.get("http://localhost:3500/api/v2/products");
  } catch (err) {
    console.log(err);
  }
};
export const createBookRequest = async (book) => {
  try {
    return await axios.post("http://localhost:3500/api/v2/products/new", book);
  } catch (err) {
    console.log(err);
  }
};
