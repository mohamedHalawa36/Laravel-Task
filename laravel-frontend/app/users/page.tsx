import UserItem from "@/Components/UserItem";
import React from "react";

async function getUsers() {
  const res = await fetch("http://127.0.0.1:8000/api/users",{cache:"no-cache"});
  if (!res.ok) throw new Error("failed to get users list");
  return res.json();
}

export type User = {
  id: number;
  age: number;
  firstname: string;
  lastname: string;
  email: string;
};

export default async function Page() {
  const { users } = await getUsers();
  return (
    <div className=" h-screen flex flex-col py-5 px-20 items-center ">
      <h1 className="text-center font-bold text-2xl mb-5">Users List</h1>
      
      <div className=" flex flex-col items-center justify-center gap-3 w-full">
        {users.map((user: User) => (
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}
