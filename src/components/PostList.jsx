import React, { useEffect } from "react";
import { fetchPosts } from "../redux/postAction";
import { useDispatch, useSelector } from "react-redux";
import { removePost } from "../redux/PostSlice";
import PostCard from "./PostCard";
import Loader from "./Loader";
import { toast } from "react-toastify";

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading, currentPage } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  console.log("posts", posts);

  const getCurrentPosts = () => {
    const startIndex = (currentPage - 1) * 6;
    const endIndex = startIndex + 6;
    return posts.slice(startIndex, endIndex);
  };

  if (loading) {
    return <Loader />;
  }

  const handleRemove = (id) => {
    dispatch(removePost(id));
    toast.success(" Card deleted successfully");
  };

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[84%] mx-auto">
      {getCurrentPosts().map((post) => (
        <PostCard key={post.id} post={post} onRemove={handleRemove} />
      ))}
    </div>
  );
};

export default PostList;
