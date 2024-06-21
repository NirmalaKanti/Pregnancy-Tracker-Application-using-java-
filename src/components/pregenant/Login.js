// import React, { useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

// import { useAuth0 } from "@auth0/auth0-react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   // const {user,loginWithRedirect}=useAuth0();

//   // console.log("Current User",user);

//   const navigate =useNavigate();
//   const [isLogin, setIsLogin] = useState(true);
//   const [name, setName] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     if (isLogin) {
//       // Perform login
//       const user = {
//         email,
//         password,
//       };
//       // Store user data in local storage
//       localStorage.setItem("user", JSON.stringify(user));
//       toast.success("Login successful");
//       // You can perform additional login logic here, like sending a request to your backend
//     } else {
//       // Perform registration
//       const newUser = {
//         name,
//         username,
//         email,
//         password,
//       };
//       navigate("/pregenant/welcome")
//       // Store user data in local storage
//       localStorage.setItem("user", JSON.stringify(newUser));
//       setIsLogin(true);
//       toast.success("Registration successful");
//       // You can perform additional registration logic here, like sending a request to your backend
//     }
//   };

//   const loginSignupHandler = () => {
//     setIsLogin(!isLogin);
   
//   };

//   return (
//     <div className="w-screen h-screen flex items-center justify-center">
//       <div className="flex items-center justify-evenly w-[50%]">
//         <div>
//           <img
//             className="ml-5"
//             width={"250px"}
//             src="https://cdn2.iconfinder.com/data/icons/pregnancy-abortion/64/180_obstetrics-pregnant-woman-belly-pregnancy-mother-256.png"
//             alt="twitter-logo"
//           />
//         </div>
//         <div>
//           {/* <div className='my-5'>
//             <h1 className='font-bold text-6xl'>Happening now.</h1>
//           </div> */}
//           <h1 className="mt-4 mb-2 text-2xl font-bold">
//             {isLogin ? "Login" : "Singup"}
//           </h1>
//           <form onSubmit={submitHandler} className="flex flex-col w-[100%]">
//             {!isLogin && (
//               <>
//                 <input
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   placeholder="Name"
//                   className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
//                 />
//                 <input
//                   type="text"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   placeholder="Username"
//                   className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
//                 />
//               </>
//             )}
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//               className="w-full md:w-75 outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
// />
// <input
//               className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
//               name="whatsappNumber"
//               type="tel"
//               placeholder="WhatsApp Number"
//               // value={formData.whatsappNumber}
//               // onChange={handleChange}
//             />
//          <label className="font-semibold">Last Period Date</label>
//             <input
//               className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
//               name="lastPeriodDate"
//               type="date"
//               placeholder="Last Period Date"
//               // value={formData.lastPeriodDate}
//               // onChange={handleChange}
//             />
//             <button className="bg-[#1D9BF0] border-none py-2 my-4 rounded-full text-lg text-white">
//               {isLogin ? "Login" : "Create Account"}
//             </button>
//             <h1>
//               {isLogin ? "Do not have an account?" : "Already have an account?"}{" "}
//               <span
//                 onClick={loginSignupHandler}
//                 className="font-bold text-blue-600 cursor-pointer"
//               >
//                 {isLogin ? "Signup" : "Login"}
//               </span>
//             </h1>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from 'axios';
import './Login.css'; 
// import Navbar from "./Navbar";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8084/api/v1/pregnancy/getAll");
      setUsers(response.data);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(user => user.email === email);

    if (!user) {
      alert("User not found. Please create an account.");
      return;
    }

    // Check password
    if (user.password !== password) {
      alert("Incorrect password.");
      return;
    }

    // Login successful
    toast.success("Login successful");
    navigate("/cover");
  };

  return (
    <> 
    <div className="body">
    <div className="n1">
      <div className="contact1">
        <b className="ash">Login</b>
        <form onSubmit={handleLogin}>
          <div className="contact">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder=" " id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="contact">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder=" " id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <button type="submit" className="kavya">Login</button>

          <p className="nirmala">Don't have an account? <Link className="nirmala1" to="/pregnant/Signin">Sign Up</Link></p>
        </form>
      </div>
    </div>
    </div>
    </>
  );
};

export default Login;
