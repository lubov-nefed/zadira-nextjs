"use client";
import { LoginForm } from "@/components/LoginForm";

export default function Login() {
  return (
    <div>
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
      <LoginForm />
    </div>
  );
}
