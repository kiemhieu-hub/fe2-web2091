import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../stores/useAuthStores";
import { useState } from "react";
import axios from "axios";




export default function Login() {
  const { setAuth } = useAuthStore();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const mutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await axios.post(
        "http://localhost:3000/login",
        data
      );
      return res.data;
    },

    onSuccess: (data) => {
      console.log("Login success:", data);
      

      setAuth(
        {
          username: data.user.username,
          email: data.user.email,
        },
        data.accessToken
      );
    
    },

    onError: () => {
      alert("Sai email hoặc password");
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input
        placeholder="email"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        placeholder="password"
        type="password"
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}