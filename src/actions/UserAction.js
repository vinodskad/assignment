export const GetUserList = (data) => {
  return {
    type: "GET_USER",
    payload: data,
  };
};
