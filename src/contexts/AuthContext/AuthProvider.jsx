import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
// import auth from '../../firebase/firebase.init.js';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setLoading(false);
                setUser(currentUser);
            } else {
                setLoading(true);
                console.log('User not found/logged out on Auth State')
            }
        });
        return () => {
            unSubscribe();
        }
    }, [])
    const authInfo = {
        loading,
        user,
        createUser,
        signInUser
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;