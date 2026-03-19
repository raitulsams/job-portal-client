import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
// import auth from '../../firebase/firebase.init.js';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";
import Lenis from 'lenis';

const googleProvider = new GoogleAuthProvider();

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

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    const signOutUser = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true, // Automatically runs the requestAnimationFrame loop
            duration: 1.2, // The length of the glide (higher = smoother/longer)
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // The easing math
            smoothWheel: true,
            touchMultiplier: 2, // Makes touchpads feel more responsive
        });

        // Cleanup when the component unmounts
        return () => {
            lenis.destroy();
        };
    }, []);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setLoading(false);
                setUser(currentUser);
            } else {
                setLoading(true);
                setUser(currentUser);
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
        signInUser,
        signInWithGoogle,
        signOutUser
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;