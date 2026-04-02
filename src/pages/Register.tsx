import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../stores/useAuthStores";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const { setAuth } = useAuthStore();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const mutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await axios.post(
        "http://localhost:3000/register",
        data
      );

      return res.data;
    },

    onSuccess: (data) => {
      console.log("Register success:", data);

      // auto login
      setAuth(
        {
          username: data.user.username,
          email: data.user.email,
        },
        data.accessToken
      );
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="username"
        onChange={(e) =>
          setForm({ ...form, username: e.target.value })
        }
      />

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

      <button type="submit">Register</button>
    </form>
  );
}