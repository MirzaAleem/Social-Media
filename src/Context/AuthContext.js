import { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    // Load user data from session storage when the component mounts
    useEffect(() => {
        const storedUserData = sessionStorage.getItem('userData');
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);
            dispatch({ type: "LOGIN_SUCCESS", payload: userData });
        }
    }, []);

    // Update session storage when the user data changes
    useEffect(() => {
        if (state.user) {
            sessionStorage.setItem('userData', JSON.stringify(state.user));
        } else {
            sessionStorage.removeItem('userData');
        }
    }, [state.user]);

    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
        }}>
            {children}
        </AuthContext.Provider>
    );
};
