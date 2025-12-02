const initialState = {
  isAuth: !!localStorage.getItem("accessToken"),
  accesToken: localStorage.getItem("accessToken") || null,
  userProfile: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        isAuth: true,
        accesToken: action.payload?.accesToken || state.accesToken,
        userProfile: action.payload?.userProfile || null,
      };

    case "LOG_OUT":
      localStorage.removeItem("accessToken");
      return {
        ...state,
        isAuth: false,
        accesToken: null,
        userProfile: null,
      };

    default:
      return state;
  }
};
