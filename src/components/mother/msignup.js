import React from 'react';

const SignupForm = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="bg-teal-400 rounded-full p-2">
        {/* Replace with actual logo */}
        <div className="text-white text-2xl">iMumz Logo</div>
      </div>
      <h2 className="text-3xl font-bold mt-4">One last thing!</h2>
      <p className="text-md mt-2">This is it. Nothing more!</p>
      <form className="w-full max-w-xs mt-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Name"
        />
        <input
          className="mt-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
        />
        <input
          className="mt-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="mobile"
          type="tel"
          placeholder="Mobile Number"
        />
        <input
          className="mt-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="babyName"
          type="text"
          placeholder="Baby's Name"
        />
        <input
          className="mt-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="babyDob"
          type="date"
          placeholder="Baby's Date of Birth"
        />
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            How did you know about iMumz?
          </label>
          <select className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option>Option 1</option>
            <option>Option 2</option>
            {/* Add other options */}
          </select>
        </div>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
          GET STARTED
        </button>
      </form>
    </div>
  );
};

export default SignupForm;