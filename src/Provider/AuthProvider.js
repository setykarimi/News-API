import { createContext, useState } from "react";
const AuthProviderContext = createContext();
const AuthProviderContextDispacther = createContext();

const Authprovider = ({children}) => {
    const [auth,setAuth] = useState({
        name: "",
        password: ""
    });
    return ( 
        <AuthProviderContext.Provider value={auth}>
            <AuthProviderContextDispacther.Provider value={setAuth}>
                {children}
            </AuthProviderContextDispacther.Provider>
        </AuthProviderContext.Provider>
     );
}
 
export default Authprovider;