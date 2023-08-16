export const GetPostsList = (data) => {
  return {
    type: "Get_Post_List",
    payload: data,
  };
};
export const GetPostComments = (data) => {
  return {
    type: "Get_Post_Comments",
    payload: data,
  };
};
