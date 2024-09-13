import { BiSkipNext } from "react-icons/bi";
import { BiLastPage } from "react-icons/bi";
import { MdFirstPage } from "react-icons/md";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../redux/PostSlice";

const Pagination = () => {
  const dispatch = useDispatch();

  const { posts, currentPage } = useSelector((state) => state.posts);

  const pageCount = Math.ceil(posts.length / 6);

  const handleChange = (event, page) => {
    if (page >= 1 && page <= pageCount) {
      dispatch(setPage(page));
    }
  };

  return (
    <div className="relative mt-5 gap-1">
      {/* //first button  */}
      <button
        className={` flex items-center justify-center w-12 h-12  transition-colors duration-200  fixed bottom-4 right-[52%]
        rounded-full ${
          currentPage === 1
            ? "bg-gray-300 cursor-not-allowed "
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
        onClick={() => handleChange(null, 1)}
        disabled={currentPage === 1}
      >
        <MdFirstPage />
      </button>

      {/* previous page button  */}
      <button
        className={` flex items-center justify-center w-12 h-12  transition-colors duration-200  fixed bottom-4 right-[48%]
     rounded-full ${
       currentPage === 1
         ? "bg-gray-300 cursor-not-allowed "
         : "bg-gray-500 text-white hover:bg-blue-600"
     }`}
        onClick={() => handleChange(null, currentPage - 1)}
        disabled={currentPage === 1}
      >
        <MdFirstPage />
      </button>
      {/* next page  */}
      <button
        className={` flex items-center justify-center w-12 h-12  transition-colors duration-200  fixed bottom-4 right-[44%]
        rounded-full ${
          currentPage === pageCount
            ? "bg-gray-300 cursor-not-allowed "
            : "bg-gray-500 text-white hover:bg-blue-600"
        }`}
        onClick={() => handleChange(null, currentPage + 1)}
        disabled={currentPage === pageCount}
      >
        <BiSkipNext />
      </button>

      {/* last page  */}
      <button
        className={` flex items-center justify-center w-12 h-12  transition-colors duration-200  fixed bottom-4 right-[40%]
        rounded-full ${
          currentPage === pageCount
            ? "bg-gray-300 cursor-not-allowed "
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
        onClick={() => handleChange(null, pageCount)}
        disabled={currentPage === pageCount}
      >
        <BiLastPage />
      </button>
    </div>
  );
};

export default Pagination;
