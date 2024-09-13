import { RxCross1 } from "react-icons/rx";
import React, { useState } from "react";

const PostCard = ({ post, onRemove }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const randomImageUrl = `https://picsum.photos/800/600?random=${post.id}`;

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to capitalize the first letter of the first word
  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const getExcerpt = (text, limit) => {
    const words = text.split(" ");
    const truncatedText =
      words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
    return capitalizeFirstLetter(truncatedText); // Capitalize the first letter
  };

  // Function to limit the title to 7 words
  const truncateTitle = (title, limit) => {
    const words = title.split(" ");
    const truncatedTitle =
      words.length > limit ? words.slice(0, limit).join(" ") + "..." : title;
    return capitalizeFirstLetter(truncatedTitle); // Capitalize first letter of the truncated title
  };

  // Function to get the current date in the desired format
  const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.toLocaleString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "GMT",
      timeZoneName: "short",
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 relative transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="p-2">
        <h2 className="text-2xl font-extrabold mb-1 text-gray-700 px-2 ">
          {truncateTitle(post.title, 4)} {/* Truncate title to 7 words */}
        </h2>
        <p className="text-gray-700 text-xl font-medium  mb-1">
          {isExpanded
            ? capitalizeFirstLetter(post.body)
            : getExcerpt(post.body, 10)}
        </p>
        {post.body.split(" ").length > 20 && (
          <button
            onClick={toggleReadMore}
            className="text-blue-500 hover:underline focus:outline-none"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
      <p className=" py-2 px-2 opacity-85">{getCurrentDate()}</p>{" "}
      {/* Display current date in the desired format */}
      <button
        className="absolute top-2 right-2 p-2 bg-red-500 rounded-full text-white hover:bg-red-700 transition-colors duration-200"
        onClick={() => onRemove(post.id)}
      >
        <RxCross1 />
      </button>
      <img
        src={randomImageUrl}
        alt="postimage"
        className="w-full h-48 object-cover rounded-t-lg"
      />
    </div>
  );
};

export default PostCard;
