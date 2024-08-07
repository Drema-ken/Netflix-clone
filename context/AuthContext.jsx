import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'
import {auth,db} from '../services/firebase';
import {doc,setDoc} from 'firebase/firestore'

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{
    const [user,setUser] = useState({})
    const [profile,setProfile] = useState(false);

   function signup  (email,password){
        createUserWithEmailAndPassword(auth,email,password);
        setDoc(doc(db,'people',email),{
            favshow: []
        })
    }

    function login (email,password){
        try{
         signInWithEmailAndPassword(auth,email,password)
         
        }
        catch(err){
            console.log(err)
        }

    }

    function logout  (){
         signOut(auth)
         setUser({})  
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return unsubscribe()
    },[])

    return <AuthContext.Provider value= {{user,setUser,signup,login,logout,profile,setProfile}}>
        {children}
    </AuthContext.Provider>
}

export const userAuth = () =>{
    return useContext(AuthContext)
}