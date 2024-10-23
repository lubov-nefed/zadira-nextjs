"use client";
import Link from "next/link";
import { login } from "../actions";

export default function Login() {
  return (
    <div>
      <Link href="/admin">Admin</Link>
      <div>
        <h3>Admin credentials:</h3>
        <p>name: admin</p>
        <p>password: !admin&Pass</p>
      </div>
      <div>
        <h3>User credentials:</h3>
        <p>name: user</p>
        <p>password: user&123</p>
      </div>
      <form action={login}>
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
    </div>
  );
}
