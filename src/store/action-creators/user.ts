import { UserAction, UserActionTypes } from "../../types/user";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USERS });
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            //to imitate loading from busy server, which takes some time
            setTimeout(() => {
                dispatch({
                    type: UserActionTypes.FETCH_USERS_SUCCESS,
                    payload: response.data,
                });
            }, 500);
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: "Error during loading list of users",
            });
        }
    };
};
