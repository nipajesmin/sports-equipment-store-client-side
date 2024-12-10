// AuthProvider.js
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init"; // Import the `auth` instance
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    updateProfile,
} from "firebase/auth";

// Initialize GoogleAuthProvider
const googleProvider = new GoogleAuthProvider();

// Create the AuthContext
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Function to create a new user
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Function to sign out the user
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };
    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser , updatedData)

    }

    // Authentication context value
    const authInfo = {
        user,
        setUser,
        createNewUser,
        loading,
        signOutUser,
        signInUser,
        signInWithGoogle,
        updateUserProfile,
    };

    // Listen to authentication state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

