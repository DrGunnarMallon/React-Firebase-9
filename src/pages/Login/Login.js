import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginWithEmail, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginWithEmail(email, password);
  };

  return (
    <div className="card">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          <span>Email</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button className="btn">Log in</button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
}
