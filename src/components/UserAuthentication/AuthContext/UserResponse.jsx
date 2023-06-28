import React from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../../firebase/firebase.config';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';




const auth = getAuth(app);
export const UserAuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
// const newPassword = getASecureRandomPassword();
const UserResponse = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const createUsers = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    const updateUser = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    };

    const emailVerify = () => {
        setLoading(true);
        return sendEmailVerification(auth.currentUser);
    };

    const resetPass = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    };

    const newPass = () => {
        setLoading(true);
        const newPassword = getASecureRandomPassword();
        return updatePassword(auth.currentUser, newPassword);
    };



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, loginUser => {
            setUser(loginUser)
            setLoading(false);
        })
        return () => {
            return unSubscribe();
        }
    }, [])


    const userInfo = {
        user,
        loading,
        createUsers,
        logUser,
        googleSignIn,
        signOutUser,
        updateUser,
        emailVerify,
        resetPass,
        newPass
    }

    return (
        <UserAuthContext.Provider value={userInfo}>
            {children}
        </UserAuthContext.Provider>
    );
};

export default UserResponse;