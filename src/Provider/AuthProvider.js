import { createContext, useContext, useEffect, useState } from "react";
const AuthProviderContext = createContext();
const AuthProviderContextDispacther = createContext();

const Authprovider = ({children}) => {
    const [auth,setAuth] = useState({
        name: "",
        password: ""
    });
    const LOCAL_STORAGE_AUTH_KEY = 'authState';

    useEffect(() => {
       const userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)) || false;
       setAuth(userData);
    },[])

    useEffect(() => {
       const data = JSON.stringify(auth);
       localStorage.setItem(LOCAL_STORAGE_AUTH_KEY,data);
    },[auth])

    return ( 
        <AuthProviderContext.Provider value={auth}>
            <AuthProviderContextDispacther.Provider value={setAuth}>
                {children}
            </AuthProviderContextDispacther.Provider>
        </AuthProviderContext.Provider>
     );
}
 
export default Authprovider;
export const useAuth = () => useContext(AuthProviderContext);
export const useAuthActions = () => useContext(AuthProviderContextDispacther);