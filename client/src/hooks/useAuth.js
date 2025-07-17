// src/hooks/useAuth.js
import { useContext } from "react";
import { AuthProvider } from "../context/authControl";

export const useAuth = () => useContext(AuthProvider);
