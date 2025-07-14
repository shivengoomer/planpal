import React, { useState } from 'react';
import axios from 'axios';
const url ="http://localhost:5000"
const Login = () => {
    const [showPass,setShowpass]=useState(false);
    const [isSignUp, setIsSignUp] = useState(true);
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
    const res = await axios.post(`${url}${endpoint}` ,payload);
    console.log('✅ Success:', res.data);
  } catch (err) {
    console.error('❌ Error:', err.response?.data || err.message);
  }
};

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  return (
    <div className='w-full flex flex-row justify-center items-center gap-10 text-black'>
      <div className="flex grow flex-col mt-20 items-center">
      <div className="w-full g max-w-md p-8 bg-white rounded-2xl shadow-md flex flex-col gap-6 font-sans">
        <form className="flex flex-col gap-4 " onSubmit={handleSubmit} >
          {isSignUp && (
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-black font-semibold">Name</label>
              <input
                id="name"
                name='name'
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
            <div className="flex items-center h-12 px-3 border border-gray-200 rounded-lg focus-within:border-blue-500 transition">
              <svg height={20} width={20} viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 4H4C2.9 4 2 4.9 2 6V18C2 
                  19.1 2.9 20 4 20H20C21.1 20 22 
                  19.1 22 18V6C22 4.9 21.1 4 
                  20 4ZM20 6V6.01L12 11L4 6.01V6H20ZM4 
                  18V8L12 13L20 8V18H4Z"
                  fill="#888"
                />
              </svg>
              <input
              name='email'
                id="email"
                type="email"
                onChange={handleChange}
                placeholder="Enter your Email"
                className="ml-3 w-full h-full border-none outline-none"
              />
            </div>
          </div>

          {/* Password */}
           <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-black font-semibold">Password</label>
            <div className="flex items-center h-12 px-3 border border-gray-200 rounded-lg focus-within:border-blue-500 transition relative">
              <svg height={20} width={20} viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 17C13.1 17 14 16.1 14 
                  15C14 13.9 13.1 13 12 13C10.9 
                  13 10 13.9 10 15C10 16.1 10.9 
                  17 12 17ZM17 8H16V6C16 3.79 
                  14.21 2 12 2C9.79 2 8 3.79 8 
                  6V8H7C5.9 8 5 8.9 5 
                  10V20C5 21.1 5.9 22 7 
                  22H17C18.1 22 19 21.1 19 
                  20V10C19 8.9 18.1 8 17 8ZM10 
                  6C10 4.9 10.9 4 12 4C13.1 4 
                  14 4.9 14 6V8H10V6ZM17 
                  20H7V10H17V20Z"
                  fill="#888"
                />
              </svg>

              <input
              name='password'
                id="password"
                onChange={handleChange}
                type={showPass ? 'text' : 'password'}
                placeholder="Enter your Password"
                className="text-black ml-3 w-full h-full border-none outline-none"
              />

              {/* Toggle Show/Hide */}
              <button
                type="button"
                onClick={() => setShowpass(prev => !prev)}
                className="absolute right-3 text-gray-500 hover:text-black"
              >
                {showPass ? (
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4-10-7s4.477-7 10-7a9.953 9.953 0 017.175 3m1.725 4c0 1.257-.308 2.437-.85 3.486M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ) : (
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4-10-7s4.477-7 10-7a9.953 9.953 0 017.175 3M15 12a3 3 0 11-6 0 3 3 0 016 0zM3 3l18 18"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {isSignUp && (
          <div className="flex flex-col gap-1">
            <label htmlFor="confirmpassword" className="text-black font-semibold">Confirm Password</label>
            <input
            name='confirmpassword'
              id="confirmpassword"
              onChange={handleChange}
              type={showPass ? 'text' : 'password'}
              placeholder="Confirm your Password"
              className="h-12 px-3 border border-gray-200 rounded-lg outline-none"
            />
          </div>
)}


          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-black font-normal">Remember me</span>
            </label>
            <span className="text-blue-600 font-medium cursor-pointer">Forgot password?</span>
          </div>

          {/* Submit */}
          <button type="submit"  className="text-white font-semibold text-xl rounded-3xl  bg-blue-700 mt-4 w-full h-12 cursor-pointer hover:bg-blue-600">
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>


          {/* Sign up link */}
          <p className="text-center text-md text-black">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button
            onClick={() => setIsSignUp(prev => !prev)}
            className="text-blue-600 font-md font-semibold cursor-pointer ml-1"
          >
            {isSignUp ? "Log In" : "Sign Up"}
          </button>
        </p>


          {/* Divider */}
          <p className="text-center text-sm text-black">Or With</p>

          {/* Google Auth Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full h-12 cursor-pointer border border-black/85 rounded-lg flex items-center justify-center gap-2 font-medium bg-white hover:bg-blue-200 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
              c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
              C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20
              c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12
              c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
              C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238
              C29.211,35.091,26.715,36,24,36
              c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303
              c-0.792,2.237-2.231,4.166-4.087,5.571
              l6.19,5.238C36.971,39.205,44,34,44,24
              C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
            <p className='text-lg'>Google</p>
          </button>
        </form>
      </div>
    </div>
    </div>
    
  );
};

export default Login;
