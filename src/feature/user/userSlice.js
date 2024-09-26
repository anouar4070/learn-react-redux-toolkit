import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [
    { id: 1, name: "Annie" },
    { id: 2, name: "Jeremy" },
    { id: 3, name: "Agnes" },
  ],
  loading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    deleteUser: (state, {payload}) => {
    // return {
    //   ...state,
    //   users: state.users.filter((user) => user.id !== action.payload),
    // }
    state.users = state.users.filter((user) => user.id !== payload);
    },
  },
});


export const { deleteUser } = userSlice.actions
export default userSlice.reducer;











/******Notes:******
 * dispatch(deleteUser(user.id));
Redux Toolkit internally creates the action object like this:
{
  type: 'user/deleteUser',
  payload: user.id
}

* console.log({ payload: user.id }) is just logging an object, which works because it doesn't expect any particular structure.
For example, it will log:
{ payload: 1 }

* dispatch(deleteUser({ payload: user.id })) is wrong because Redux Toolkit is expecting user.id as the payload, but you're giving it an object { payload: user.id } instead, which messes up the logic in the reducer.

 */