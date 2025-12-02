const initialState = {
  isLogModalOpen: false,
  isPostModalOpen: false,
  isPostEditorOpen: false,
  isUserEditorOpen: false,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    // modal form for login and signup
    case "OPEN_LOG_MODAL":
      return {
        ...state,
        isLogModalOpen: true,
      };

    case "CLOSE_LOG_MODAL":
      return {
        ...state,
        isLogModalOpen: false,
      };

    // modal form for posts creating
    case "OPEN_POST_MODAL":
      return {
        ...state,
        isPostModalOpen: true,
      };

    case "CLOSE_POST_MODAL":
      return {
        ...state,
        isPostModalOpen: false,
      };

    // modal form for posts edit
    case "OPEN_POST_EDITOR_MODAL":
      return {
        ...state,
        isPostModalOpen: true,
      };

    case "CLOSE_POST_EDITOR_MODAL":
      return {
        ...state,
        isPostModalOpen: false,
      };

    // modal form for user edit
    case "OPEN_USER_EDITOR_MODAL":
      return {
        ...state,
        isPostModalOpen: true,
      };

    case "CLOSE_USER_EDITOR_MODAL":
      return {
        ...state,
        isPostModalOpen: false,
      };

    default:
      return state;
  }
};
