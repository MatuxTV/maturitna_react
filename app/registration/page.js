"use client";
import React, { useState } from "react";
import directus from "/lib/directus"; // cesta k vašej Directus inštancii
import Image from "next/image";
import Nav from "../componets/nav";
import Link from "next/link";
// import { createUser } from "@directus/sdk";
// import { createDirectus, rest, login, refresh, logout} from '@directus/sdk';

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    try {
      const user_object = {
        email: email,
        password: password,
        role: "bb4da356-49ec-44b3-88af-5c8612676ae4", // ID vašej špecifické role
        // Pridajte ďalšie požadované polia podľa potreby
      };

      const result = await directus.request(createUser(user_object));
      console.log("Registrácia úspešná, odpoveď:", result);
      // Tu by ste mohli pridať presmerovanie alebo správu o úspechu
    } catch (err) {
      console.error("Chyba pri registrácii:", err);
      // Spracujte a zobrazte chybu
    }
  };
  // const RegisterPage = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [error, setError] = useState("");

  //   const handleRegister = async (e) => {
  //     e.preventDefault();
  //     try {

  //       // const user = await fetch()

  //       // const user = await directus.request(login(email, password));
  //       // const authData = await directus.request(refresh(mode, refresh_token));
  //       // await directus.request(logout(refresh_token));

  //       // fetch('http://localhost:8055/auth/login', {
  //       //   method: 'POST',
  //       //   headers: {
  //       //     'Content-Type': 'application/json',
  //       //   },
  //       //   body: JSON.stringify({
  //       //     email: 'your-email@example.com',
  //       //     password: 'yourpassword',
  //       //   }),
  //       // })
  //       // .then(response => response.json())
  //       // .then(data => console.log(data))
  //       // .catch((error) => console.error('Error:', error));
  //       // Vytvorenie používateľa pomocou funkcie createUser poskytnutej Directus SDK
  //       // const response = await directus.request(
  //       //   createUser({
  //       //     email,
  //       //     password,
  //       //     role: "bb4da356-49ec-44b3-88af-5c8612676ae4",
  //       //   },)
  //       // );
  //       console.log(response);
  //       // Presmerovať používateľa alebo zobraziť správu o úspechu
  //     } catch (err) {
  //       setError(err.message);
  //     }
  //   };

  return (
    <>
      <Nav />
      <div className=" min-h-fit flex items-center justify-center bg-gray-100">
        <div className="flex flex-col">
          <Image
            className="m-8"
            src="/IMG/logo.png"
            alt="logo"
            width={250}
            height={250}
          />

          <form
            className="bg-white2 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
            onSubmit={handleRegister}
          >
            <div className=" text-center">
              <p className="  text-h4 text-black1 font-plus-jakarta m-4 ">
                Registrácia
              </p>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-plus-jakarta mb-2"
                htmlFor="email"
              >
                Meno
              </label>
              <input
                className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className=" font-plus-jakarta block text-black1 text-sm mb-2"
                htmlFor="password"
              >
                Heslo
              </label>
              <input
                className="shadow appearance-none  rounded w-full py-2 px-3 text-black1 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Heslo"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={8}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                required
              />
            </div>

            <div className=" align-middle ">
              <input type="checkbox" id="terms" required />
              <label
                className=" font-plus-jakarta text-black1 mx-2 "
                htmlFor="terms"
              >
                Súhlasím s podmienkami PATRAS.SK
              </label>
            </div>
            <div className="flex items-center justify-center">
              <button
                className=" font-plus-jakarta m-5 bg-blue1 p-2 rounded-lg hover:bg-blue2"
                type="submit"
              >
                Registrovať
              </button>
            </div>
            {error && <p className=" text-red text-xs italic">{error}</p>}
            <div className=" justify-start mt-3">
              <p>
                Už máš účet?{" "}
                <Link href="/login" className="text-blue1">
                  <p>Prihlás sa</p>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default RegisterPage;
