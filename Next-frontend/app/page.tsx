import InputField from "@/Components/InputField";
import { redirect } from "next/navigation";
import React from "react";

export default function Home() {
  async function createUser(formData: FormData) {
    "use server";

    const rawFormData = {
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      age: Number(formData.get("age")),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const jsonFormData = JSON.stringify(rawFormData);
    console.log(rawFormData);
    console.log(jsonFormData);
    const res = await fetch("http://127.0.0.1:8000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonFormData,
    });
    if (!res.ok) {
      console.log(res);
      throw new Error("failed to add user");
    }
    redirect("/users");
  }
  return (
    <div className=" h-screen p-5 flex justify-center items-center">
      <form
        action={createUser}
        className=" bg-stone-200 w-1/4 p-5 border border-black rounded-xl"
      >
        <h2 className=" text-center font-semibold text-lg">Create User</h2>
        <InputField title="First Name" name="firstname" type="text" />
        <InputField title="Last Name" name="lastname" type="text" />
        <InputField title="Age" name="age" type="text" />
        <InputField title="Email" name="email" type="email" />
        <InputField title="Password" name="password" type="password" />
        <button className=" hover:bg-stone-100 bg-white p-2 rounded-lg" type="submit">submit</button>
      </form>
    </div>
  );
}
