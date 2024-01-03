"use client";
import React, { useState } from "react";
import Image from "next/image";
import Nav from "../componets/nav"; 
import Link from "next/link";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 

  async function loginUser() {
    const response = await fetch("http://localhost:8055/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    const tokens = await response.json();
    if (response.ok) {
        console.log(tokens);
      } else {
        setError("Prihlásenie zlyhalo: " + (tokens.error || "Nespecifikovaná chyba")); // Aktualizujte chybový stav
      }
    console.log(tokens);
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // Zabráni predvolenému správaniu formulára (refresh stránky)
    loginUser();
  };

  return (
    <>
      <Nav /> {/* Komponent navigácie */}
      <div className="min-h-fit flex items-center justify-center bg-gray-100">
        <div className="flex flex-col">
          <Image // Logo obrazok
            className="m-8"
            src="/IMG/logo.png"
            alt="logo"
            width={250}
            height={250}
          />

          <form // Formulár pre registráciu
            className="bg-white2 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="text-center">
              {" "}
              {/* Nadpis formulára */}
              <p className="text-h4 text-black1 font-plus-jakarta m-4">
                Prihlásenie
              </p>
            </div>

            {/* Pole pre e-mail */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-plus-jakarta mb-2"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="Váš e-mail"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Pole pre heslo */}
            <div className="mb-6">
              <label
                className="font-plus-jakarta block text-black1 text-sm mb-2"
                htmlFor="password"
              >
                Heslo
              </label>
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 text-black1 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                name="password"
                id="password"
                placeholder="Vaše heslo"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Tlačidlo na odoslanie formulára */}
            <div className="flex items-center justify-center">
              <button
                className="font-plus-jakarta m-5 bg-blue1 p-2 rounded-lg hover:bg-blue2"
                type="submit"
              >
                Prihlásiť sa
              </button>
            </div>

            {/* Zobrazenie chybových správ */}
            {error && <p className="text-red text-xs italic">{error}</p>}

            {/* Odkaz na prihlásenie */}
            <div className="justify-start mt-3">
              <p>
                Este nemas ucet? <Link href="/registration">Registruj sa!</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
