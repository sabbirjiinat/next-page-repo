import React from "react";
import { Link, useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const Book = ({ book }) => {
  const navigation = useNavigation()
  console.log(navigation.state);
  if (navigation.state === 'loading') {
      return <LoadingSpinner></LoadingSpinner>
  }
  return (
    <Link to={`../book/${book.isbn13}`}>
      <div className=" relative overflow-hidden transition duration-500  transform hover:-translate-y-2 rounded-lg shadow-lg hover:shadow-2xl ">
        <img
          className="object-cover w-full h-64"
          src={book.image}
          alt="book cover"
        />
        <div className="bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300 text-white absolute inset-0 px-4 py-4 flex flex-col ">
          <p className="mb-3">{book.title}</p>
          <p>{book.subtitle.slice(0, 50)}...</p>
          <p className="mt-auto">Price:{book.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
