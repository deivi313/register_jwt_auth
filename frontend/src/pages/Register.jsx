import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={submit}
      >
        <h1 className="text-3xl my-5">Please Register</h1>
        <input
          className="text-2xl px-2 py-2 my-2  bg-gray-200 border-gray-300"
          type="text"
          placeholder="Name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="text-2xl px-2 py-2 my-2  bg-gray-200 border-gray-300"
          type="email"
          placeholder="Email Address"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="text-2xl px-2 py-2 my-2  bg-gray-200 border-gray-300"
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="text-xl cursor-pointer px-10 py-3 my-2 bg-gray-600 text-white border rounded hover:bg-gray-800 ease-in"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
