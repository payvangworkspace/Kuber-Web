import React, { useState } from "react";
import { motion } from "framer-motion";
import "../Styles/Sign.css";
// import logo from "../assets/logo.png"; // Update to your actual logo path

const Sign = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username, "Password:", password);
  };

  return (
    <div className="signin-bg">
      <motion.div
        className="signin-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="signin-logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
            <div className="logo-container">
          <img src={"./logo2.png"} alt="Website Logo" className="main-logo" />
          </div>
        </motion.div>
        <h2 className="signin-title">Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <motion.input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            type="submit"
            className="signin-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign In
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Sign;
