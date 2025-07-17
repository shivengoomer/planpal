"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetUser() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get("http://localhost:5000/user/getUserProfile", {
        withCredentials: true,
      });

      console.log("API Response:", res.data);

      const usersArray = res.data.allUser || []; // ✅ FIX HERE
      setUsers(usersArray);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Users</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && (
        <>
          {users.length === 0 && <p>No users found</p>}
          {users.map((u) => (
            <div
              key={u._id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                border: "1px solid #ddd",
                padding: "15px",
                marginBottom: "10px",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
                color: "black",
              }}
            >
              <img
                src={u.profilePic}
                alt={u.name}
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
              <div>
                <p style={{ margin: 0, fontWeight: "bold", fontSize: "16px" }}>{u.name}</p>
                <p style={{ margin: 0, color: "#555" }}>{u.email}</p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
