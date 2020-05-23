export const addEvent = (event) => {
    return (dispatch, getState) => {
        //Make async call
        dispatch({ type: "ADD_EVENT", event })
    }
};