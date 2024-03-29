"use client";
import { deleteUser } from "@directus/sdk";
import { useEffect, useState } from "react";
import directus from "@/lib/directus";
import { toast } from "react-toastify";

const DelUser = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(process.env.NEXT_PUBLIC_DIRECTUS + "users", {
        cache: "no-store",
      }).then((res) => res.json());
      return res;
    }
    fetchData().then((res) => setUser(res.data));
  }, []);


  return (
    <div className=" bg-white2 m-8 rounded-lg">
      {user?.map((item) => {
        return item.role === 'df5647af-422c-4834-bb6c-56baccbe5fce' ? (
          <div key={item.id} value={item.id}></div>
        ) : (
          <div
            key={item.id}
            value={item.id}
            className="flex justify-center p-8 "
          >
            <button
              onClick={async () => {
                await directus.request(deleteUser(item.id));
                window.location.reload();
                toast.success("Užívateľ bol vymazaný");
              }}
              className=" font-plus-jakarta pr-5"
            >
              x
            </button>
            <div className="flex space-x-5 bg-whiteBG rounded-lg m-">
              <p> <b>Meno:</b> {item.first_name}</p>
              <p><b>Priezvisko:</b> {item.last_name}</p>
              <p><b>Email:</b> {item.email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default DelUser;
