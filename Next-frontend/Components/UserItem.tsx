import React from "react";
type UserItemProps = {
  user: {
    id: number;
    age: number;
    firstname: string;
    lastname: string;
    email: string;
  };
};

export default function UserItem({ user }: UserItemProps) {
  const { firstname, lastname, age, email } = user;
  return (
    <div className=" font-bold flex gap-2 bg-slate-100 py-5 px-16 w-1/2">
      <span className=" px-5 w-1/3">{firstname} {lastname}</span>
      <span className=" px-5 w-1/6">{age} yrs</span>
      <span className=" px-5 w-1/3">{email}</span>
    </div>
   
  );
}
