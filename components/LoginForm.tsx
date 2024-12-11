"use client";
import { useActionState } from "react";
import { login } from "../auth/actions";
import { Fragment } from "react";

const fieldsData = [
  { type: "text", name: "name" },
  { type: "password", name: "password" },
];

export function LoginForm() {
  const [state, action] = useActionState(login, undefined);
  const fields = fieldsData.map((field) => (
    <Fragment key={field.name}>
      <label htmlFor={field.name}>{field.name}</label>
      <input
        type={field.type}
        name={field.name}
        required
        className="border border-gray-500 rounded pl-1 focus:outline focus:outline-blue-400  focus:outline-2 focus:border-blue-400"
      />
    </Fragment>
  ));

  return (
    <form action={action}>
      <h2 className="font-semibold">Login</h2>
      <div className="grid grid-cols-[1fr_2fr] grid-rows-2 gap-y-2 mt-2 mb-4">
        {fields}
      </div>
      {state && (
        <p className="text-red-700 border rounded border-red-700 p-1 pl-2 mb-4">
          {state.message}
        </p>
      )}
      <button
        type="submit"
        className="border border-gray-500 rounded px-2 pb-1 hover:bg-blue-400 hover:text-white active:outline active:outline-2 active:outline-blue-900"
      >
        Login
      </button>
    </form>
  );
}
