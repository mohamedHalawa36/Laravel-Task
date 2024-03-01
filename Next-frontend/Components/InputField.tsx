import React from "react";
type InputFieldProps = {
  title: string;
  name: string;
  type: string;
};
export default function InputField({ title, name, type }: InputFieldProps) {
  return (
    <div className=" flex flex-col my-5">
      <label htmlFor="">{title}</label>
      <input required className=" w-full px-2 py-1" type={type} name={name} />
    </div>
  );
}
