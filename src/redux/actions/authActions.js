export const setUser = user => ({
  type: "SET_USER",
  payload: { user }
});

export const setUserInfo = userInfo => ({
  type: "SET_USER_INFO",
  payload: { firstname: userInfo.firstname, lastname: userInfo.lastname }
});
