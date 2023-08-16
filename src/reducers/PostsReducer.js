const initialState = {
  posts: [],
  comments: [],
  error: "",
};
export const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Get_Post_List":
      return {
        ...state,
        posts: action.payload,
      };
    case "Get_Post_Comments":
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
};
