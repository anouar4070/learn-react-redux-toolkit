import React, { useEffect } from "react";
import { getPosts } from "../../feature/post/postSlice";
import { useDispatch } from "react-redux";

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return <div>Posts</div>;
};

export default Posts;
