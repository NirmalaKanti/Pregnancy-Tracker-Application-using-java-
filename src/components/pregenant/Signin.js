// import React, { useState } from 'react';

// const PSignupForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     whatsappNumber: '',
//     lastPeriodDate: '',
//     bestDescription: '',
//     referralCode: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log(formData);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center p-4 bg-blue-100">
//       <div className="bg-blue-400 rounded-full p-2 mb-4">
//         {/* Replace with actual logo */}
//         <div className="text-white text-2xl">iMumz Logo</div>
//       </div>
//       <h2 className="text-3xl font-bold">Your first step towards a Happy Pregnancy.</h2>
//       <div className="mt-4 bg-white p-4 rounded-lg shadow-md w-full max-w-md">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               name="name"
//               type="text"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               name="email"
//               type="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               name="whatsappNumber"
//               type="tel"
//               placeholder="WhatsApp Number"
//               value={formData.whatsappNumber}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               name="lastPeriodDate"
//               type="date"
//               placeholder="Last Period Date"
//               value={formData.lastPeriodDate}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-4">
//             <select
//               className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               name="bestDescription"
//               value={formData.bestDescription}
//               onChange={handleChange}
//             >
//               <option value="">What describes you the best?</option>
//               {/* Add other options */}
//             </select>
//           </div>
//           <div className="mb-4">
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               name="referralCode"
//               type="text"
//               placeholder="Referral Code"
//               value={formData.referralCode}
//               onChange={handleChange}
//             />
//           </div>
//           <button
//             className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
//             type="submit"
//           >
//             GET STARTED
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default  PSignupForm;

import React  from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from 'axios';
import {useEffect, useState } from "react";
import './Login.css'; 



const Signin = () => {
  const navigate = useNavigate();
  const [pregnancyid, setId] = useState('');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pregnancies, setUsers] = useState([]);


  useEffect(() => {
    (async () => await Load())();
    }, []);

    async function  Load()
    {
       const result = await axios.get(
           "http://localhost:8084/api/v1/pregnancy/getAll");
           setUsers(result.data);
           console.log(result.data);
    }

    async function save(event)
    {
        event.preventDefault();
    try
        {
        const response= await axios.post("http://localhost:8084/api/v1/pregnancy/save",
        {
            name: name,
            email:email,
            password:password,
            confirmPassword:confirmPassword
          
        });



        const isNewUser = response.data.isNewUser;
        if (!isNewUser) {
          // If it's an existing user, update localStorage with the email
          localStorage.setItem("name", name);
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);
          localStorage.setItem("confirmPassword", confirmPassword);
          
        }

        if (!validateForm()) {
          return;
        }
        
        
      
        
          alert("User Registation Successfully");
          navigate("/pregenant/Bdevelop");
          setId("");
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          Load();
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }


  const validateForm = () => {
    let isValid = true;

    if (name.length < 5 || !/^[A-Za-z ]+$/.test(name)) {
      alert("Name should be at least 5 characters long and contain only letters.");
      isValid = false;
    }

    if (email.length === 0 || email.length > 30) {
      alert("Please enter a valid email address (up to 30 characters).");
      isValid = false;
    }

    if (password.length < 8) {
      alert("Password should be at least 8 characters long.");
      isValid = false;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      isValid = false;
    }

    return isValid;
  };

  return (
    <> 
    <div className="body">
    <div className="n1">

      <div className="contact2">
        <b className="ash">Sign in</b>
        <form >
          <div className="contact">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder=" " id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required/>
          </div>

          <div className="contact">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder=" " id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>

          <div className="contact">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder=" " id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </div>

          <div className="contact">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input type="password" placeholder=" " id="pass1" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
          </div>

          <button type="submit" className="kavya1" onClick={save}>Sign in</button>


          <ub>Already have an account? <Link to="/pregnant/Login" className="account">Login</Link></ub>
        </form>
      </div>
    </div>
    </div>
    </>
  );
};

export default Signin;

