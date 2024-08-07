import React from 'react'
import { userAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {user} = userAuth();
    const navigate = useNavigate();
    if(!user?.email){
        navigate('/')
    }
    else return children
}

export default ProtectedRoute
