import { createContext, useState, useEffect, useCallback } from "react";


export const AuthContext = createContext({
    isLoggedIn: false,
    Login: () => {},
    Logout: () => {}
})

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    //Login function to set the user logged in
    const Login = useCallback(() => {
        setIsLoggedIn(true)
    }, []);

    //Logout function to set the user logged out
    const Logout = useCallback(() => {
        setIsLoggedIn(false)
    }, []);

    //Load login status from LocalStorage on component mount
    useEffect(() => {
        const storedLoginStatus = localStorage.getItem('isLoggedIn')
        if (storedLoginStatus) {
            setIsLoggedIn(storedLoginStatus === 'true')
        }
    }, [])

    //Update localStorage whenever login status changes
    useEffect(() => {
        localStorage.setItem('isLoggenIn', isLoggedIn.toString());
    }, [isLoggedIn]);

    const value = { isLoggedIn, Login, Logout };

    //Provide the context to children components
    return <AuthContext.Provider value={value}>{ children }</AuthContext.Provider>;
};
