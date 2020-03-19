import { SET_BOOKS } from "./actionTypes";
import axios from "axios";

export const fetchAllBooks = () => {
  return async dispatch => {
    try {
      const res = await axios.get(
        "https://the-index-api.herokuapp.com/api/books/"
      );
      const books = res.data;
      dispatch({
        type: SET_BOOKS,
        payload: books
      });
    } catch (err) {
      console.error(err);
    }
  };
};
