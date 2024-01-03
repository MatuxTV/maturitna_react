// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import axios from 'axios'; // axios je použitý pre HTTP požiadavky

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "Directus",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        try {
          const directusApiUrl = "http://localhost:8055"; // Nastavte URL vašej Directus inštancie
          
          // Registrácia nového užívateľa v Directus
          const newUserResponse = await axios.post(`${directusApiUrl}/users`, {
            email: credentials.email,
            password: credentials.password,
            role: "bb4da356-49ec-44b3-88af-5c8612676ae4"  // Nastavte ID role pre nových užívateľov
          });

          // Overenie, či bol užívateľ úspešne vytvorený
          if (newUserResponse.data && newUserResponse.data.data && newUserResponse.data.data.id) {
            const user = newUserResponse.data.data;
            return Promise.resolve(user);  // Vráťte užívateľský objekt pre NextAuth
          } else {
            return Promise.resolve(null);  // Vráťte null ak registrácia zlyhala
          }
        } catch (e) {
          throw new Error("Registrácia zlyhala: " + (e.response?.data?.errors[0]?.message || e.message));
        }
      }
    })
  ],
  // ... (ostatná konfigurácia NextAuth.js)
});
