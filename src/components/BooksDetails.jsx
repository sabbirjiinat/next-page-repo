import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";


const BooksDetails = () => {
    const navigation = useNavigation()
    console.log(navigation.state);
    if (navigation.state === 'loading') {
        return <LoadingSpinner></LoadingSpinner>
    }
  const bookDetails = useLoaderData();
  const { image, title, authors, publisher, year, rating, desc } = bookDetails;
  const [fold, setFold] = useState(true);
//   console.log(bookDetails);

  return (
    <div className="grid grid-cols-2 items-center border-2 mt-8 mx-auto w-[60%] mb-9">
      <div className="">
        <img className="" src={image} alt="" />
      </div>
      <div className="">
        <p className="bg-yellow-400 w-fit text-xs text-gray-700 rounded-lg px-1 font-semibold">
          Brand New
        </p>
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p>Authors:{authors}</p>
        <p>Publisher:{publisher}</p>
        <p>Year{year}</p>
        <p>Ratings{rating}</p>
        <div>
          {fold ? (
            <p className="text-gray-500">
              {desc.slice(0, 100)}
              <span className="text-blue-700" onClick={() => setFold(!fold)}>
                ...See More
              </span>
            </p>
          ) : (
            <p>
              {desc}
              <span className="text-blue-700" onClick={() => setFold(!fold)}>
                See Less
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BooksDetails;
