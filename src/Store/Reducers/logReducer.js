export const logReducer = (state = 0, action) => {
    switch (action.type) {
        case "CHANGE_STATE":
            return state === 1 ? 0 : 1;
        default:
            return state
    }
}