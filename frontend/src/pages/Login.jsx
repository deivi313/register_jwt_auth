import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const content = await response.json();
    setRedirect(true);
    props.setName(content.name);
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <form
        onSubmit={submit}
        className="flex flex-col justify-center items-center"
      >
        <h1 className="text-3xl my-5 ">Please sign in</h1>
        <input
          className="text-2xl px-2 py-2 my-2 bg-gray-200 border-gray-300 "
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
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
