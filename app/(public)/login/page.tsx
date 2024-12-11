"use client";
import { LoginForm } from "@/components/LoginForm";

export default function Login() {
  return (
    <div className="grid grid-cols-3 p-4">
      <div className="grid grid-rows-2 gap-2">
        <div>
          <h3 className="font-semibold">Admin credentials:</h3>
          <p>name: admin</p>
          <p>password: !admin&Pass</p>
        </div>
        <div>
          <h3 className="font-semibold">User credentials:</h3>
          <p>name: user</p>
          <p>password: user&123</p>
        </div>
      </div>
      <div>
        <LoginForm />
      </div>
    </div>
  );
}
