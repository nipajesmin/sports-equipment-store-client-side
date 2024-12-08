import React, { Children, createContext, useState } from 'react';
import { auth } from "../firebase/firebase.init";
import { createUserWithEmailAndPassword } from 'firebase/auth';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(true);

    const createNewUser= (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        user,
        setUser,
        createNewUser,
        loading
       
    }

    return (
        // <AuthContext.Provider>
        //     {children}
        // </AuthContext.Provider>

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;