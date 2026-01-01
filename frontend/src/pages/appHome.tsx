import React from "react";
import { useAuth } from "../auth/AuthContext";

export default function AppHome() {
  const { logout, user } = useAuth();

  return (
    <div style={{ padding: 24 }}>
      <h1>App (protégée)</h1>
      <p>Si tu vois ça, tu es connecté </p>
      <p>User: <b>{user?.email}</b></p>
      <button onClick={logout}>Déconnexion</button>
    </div>
  );
}
