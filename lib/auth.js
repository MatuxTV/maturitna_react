import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import axios from 'axios'; // axios je tu len ako príklad, môžete použiť akýkoľvek HTTP klient.

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
          const user = await axios.post('http://localhost:8055/users/+', {
            email: credentials.email,
            password: credentials.password
          });

          if (user) {
            return { status: 'success', ...user.data };  // Vráťte objekt užívateľa alebo relevantné údaje
          } else {
            return null;  // Ak overenie zlyhalo
          }
        } catch (e) {
          throw new Error(e);  // V prípade chyby vráťte chybu
        }
      }
    })
  ],
  // ... (ostatná konfigurácia NextAuth.js)
});
