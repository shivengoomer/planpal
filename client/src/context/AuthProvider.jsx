/* eslint-disable react-refresh/only-export-components */

import React, { createContext, useState,useContext } from 'react'
import Cookies from 'js-cookie'
export const AuthContext = createContext();
export function AuthProvider({children}) {
  
    const initiaUserState=localStorage.getItem('messenger');
    const [authUser,setauthUser]=useState(initiaUserState ? JSON.parse(initiaUserState):undefined)
    return(
      <AuthContext.Provider value={{authUser,setauthUser}} >
      {children}
      </ AuthContext.Provider >
    )
}

export const useAuth=()=> useContext(AuthContext);