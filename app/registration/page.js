'use client'
import React, { useState } from "react";
import { users } from "../../lib/users.js";
import { useMutation } from "react-query";
import queryClient from "@/lib/queryClient.js";
import { QueryClientProvider } from "react-query";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // const singUpMutation = useMutation((newUser) => {
  //   setData(users, { data: newUser }, "/system").then((response) => {
  //     console.log(response);
  //   });
  // });

  // const handleRegister = async (e) => {
  //   e.preventDefault();

  //   singUpMutation.mutate({
  //     email: e.target.email.value,
  //     password: e.target.password.value,
  //     role: "bb4da356-49ec-44b3-88af-5c8612676ae4",
  //     status: "active",
  //     provider: "",
  //   });
  // };

  // try {
  //   // Vložte logiku pre registráciu používateľa do databázy
  //   const response = await directus.items('users').create({
  //     email,
  //     password,
  //     // pridať ďalšie polia podľa potreby
  //   });
  //   console.log(response);
  //   // Presmerovať používateľa alebo zobraziť správu o úspechu
  // } catch (err) {
  //   setError(err.message);
  // }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          // onSubmit={handleRegister}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={username}
              onChange={(e) => setEmail(e.target.email.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Heslo
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Heslo"
              value={password}
              onChange={(e) => setPassword(e.target.password.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Registrovať
            </button>
          </div>
          {error && <p className="text-red-500 text-xs italic">{error}</p>}
        </form>
      </div>
     </QueryClientProvider>
  );
};

export default RegisterPage;
