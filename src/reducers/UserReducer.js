const initialState = {
  users: [],
  error: "",
};
export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
