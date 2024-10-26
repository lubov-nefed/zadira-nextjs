"use client";

import { useFormState } from "react-dom";
import { login } from "../app/actions";

export function LoginForm() {
  const [state, action] = useFormState(login, undefined);
  console.log(state);

  return (
    <form action={action}>
      <h2>Login</h2>
      <div>
        <label htmlFor="name">name</label>
        <input type="text" name="name" required />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input type="password" name="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
