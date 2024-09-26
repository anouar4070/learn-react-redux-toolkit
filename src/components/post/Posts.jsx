import React, { useEffect } from "react";
import { getPosts } from "../../feature/post/postSlice";
import { useDispatch, useSelector } from "react-redux";

const Posts = () => {
  const { posts, loading } = useSelector(state => state.post);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <>
      <h1>List of posts</h1>
      {
      loading ? "loading" :
      posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2> 
          <p>{post.body}</p>
        </div>
      )
      )}
    </>
  );
};

export default Posts;
