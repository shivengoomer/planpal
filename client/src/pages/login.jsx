import React,{useState} from 'react';
import axios from 'axios';
import SparklesSection from '../components/sparkles';
import { useAuth } from '../context/AuthProvider';
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";
const url = "http://localhost:5000";

const Login = () => {
  const navigate = useNavigate();
  const {authUser,setauthUser} = useAuth();
  const [showPass, setShowpass] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isSignUp ? '/user/signup' : '/user/login';
    const payload = isSignUp
      ? {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          confirmpassword: formData.confirmpassword,
        }
      : {
          email: formData.email,
          password: formData.password,
        };

    try {
      const res = await axios.post(`${url}${endpoint}`, payload,{ withCredentials: true });
      console.log('✅ Success:',endpoint);

      if (res.data) {
      localStorage.setItem("messenger", JSON.stringify(res.data.user));
        setauthUser(res.data);
        alert(`hello ${res.data.user.name}` );
        navigate("/chat", { replace: true });
      }
    } catch (err) {
      console.error('❌ Error:', err.response?.data || err.message);
    }
  };

  // const handleGoogleLogin = () => {
  //   console.log("Google login clicked");
  // };

  return (
    <div className="w-full flex flex-row justify-center items-center gap-10 text-black">
      <SparklesSection />
      <div className="flex grow flex-col mt-20 items-center">
        <div className="w-full max-w-md p-8 backdrop-blur-md bg-white/100 rounded-2xl shadow-md flex flex-col gap-6 font-sans">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Name */}
            {isSignUp && (
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-black font-semibold">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={handleChange}
                  placeholder="Enter your Name"
                  className="h-12 px-3 border border-gray-200 rounded-lg outline-none"
                />
              </div>
            )}

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-black font-semibold">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                placeholder="Enter your Email"
                className="h-12 px-3 border border-gray-200 rounded-lg outline-none"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-black font-semibold">Password</label>
              <div className="relative flex items-center">
                <input
                  id="password"
                  name="password"
                  type={showPass ? 'text' : 'password'}
                  onChange={handleChange}
                  placeholder="Enter your Password"
                  className="h-12 px-3 border border-gray-200 rounded-lg outline-none w-full"
                />
                <button
                  type="button"
                  onClick={() => setShowpass(prev => !prev)}
                  className="absolute right-3 text-gray-500 hover:text-black"
                >
                  {showPass ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            {isSignUp && (
              <div className="flex flex-col gap-1">
                <label htmlFor="confirmpassword" className="text-black font-semibold">Confirm Password</label>
                <input
                  id="confirmpassword"
                  name="confirmpassword"
                  type={showPass ? 'text' : 'password'}
                  onChange={handleChange}
                  placeholder="Confirm your Password"
                  className="h-12 px-3 border border-gray-200 rounded-lg outline-none"
                />
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="text-white font-semibold text-xl rounded-3xl bg-blue-700 mt-4 w-full h-12 cursor-pointer hover:bg-blue-600"
            >
              {isSignUp ? 'Sign Up' : 'Login'}
            </button>

            {/* Toggle Login/Signup */}
            <p className="text-center text-md text-black">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
              <button
                type="button"
                onClick={() => setIsSignUp(prev => !prev)}
                className="text-blue-600 font-md font-semibold cursor-pointer ml-1"
              >
                {isSignUp ? "Log In" : "Sign Up"}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
