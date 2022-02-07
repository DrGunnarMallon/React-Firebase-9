import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signupWithEmail, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signupWithEmail(email, password, displayName);
  };

  return (
    <div className="card">
      <h1>Sign up</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label>
          <span>Email</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </label>
        <label>
          <span>Display Name</span>
          <input
            type="text"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
            required
          />
        </label>
        <button className="btn">Sign up</button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
}
