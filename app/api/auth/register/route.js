import { NextResponse } from "next/server";
import { createUser } from "@directus/sdk";
import directus from "@/lib/directus";

export async function POST(request) {
  try {

    const { first_name, last_name, email, password } = await request.json();

    console.log(first_name, last_name, email, password,"prihlasovanie");

    const result = await directus.request(
      createUser({
        first_name,
        last_name,
        email,
        password,
        role: process.env.USER_ROLE,
      })
    );

    // const result = await fetch(process.env.NEXT_PUBLIC_DIRECTUS + `users`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     first_name,
    //     last_name,
    //     email,
    //     password,
    //     role: process.env.USER_ROLE,
    //   })
    // });

    console.log(result,"result");

    return NextResponse.json({ message: "Account Created!" }, { status: 201 });
  } catch (e) {
    const code = e.errors[0].extensions.code;

    if (code === "RECORD_NOT_UNIQUE") {
      return NextResponse.json(
        { message: "This user already exist" },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { message: "An unexpected error occurred, please try again" },
      { status: 500 }
    );
  }
}
