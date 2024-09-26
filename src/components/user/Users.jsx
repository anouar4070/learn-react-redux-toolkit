import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../feature/user/userSlice";

const Users = () => {
  const usersList = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  return (
    <>
      <h1>List of users</h1>
      {usersList.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <button onClick={() => dispatch(deleteUser(user.id))}>delete</button>
        </div>
      ))}
    </>
  );
};

export default Users;
