import { useContext, createContext, useState, useEffect } from "react";
import { getBooksReqest, createBookRequest } from "../api/BooksRequest";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    const res = await getBooksReqest();
    setBooks(res.data.data);
    // console.log(res.data.data);
  };

  const createBook = async (book) => {
    const res = await createBookRequest(book);
    setBooks([...books, res.data.data]);
    // console.log(res.data.data);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <DataContext.Provider value={{ getBooks, books, createBook }}>
      {children}
    </DataContext.Provider>
  );
};

export const useAxios = () => {
  return useContext(DataContext);
};
