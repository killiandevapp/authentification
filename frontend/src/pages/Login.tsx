import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";


// Page login
export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [err, setErr] = useState<string>("");

  
  // Gestion de la soumission du formulaire

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr("");
    try {
      await login({ email, password });
      nav("/app", { replace: true });
    } catch (e: any) {
      setErr(e?.response?.data?.message ?? "identifiants invalide");
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <h1>Connexion</h1>
      <form onSubmit={onSubmit} style={{ display: "grid", gap: 12, maxWidth: 320 }}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        <input
          placeholder="Mot de passe"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        {err && <div style={{ color: "red" }}>{err}</div>}
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}
