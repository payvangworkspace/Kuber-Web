import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiMessageSquare,
  FiMapPin,
  FiPhone,
  FiSend,
  FiCheckCircle
} from "react-icons/fi";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "../Styles/ContactUs.css";

const ContactUs = () => {
  const [showPopup, setShowPopup] = useState(false);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // here you can send the form data (API call, email service, etc.)
    setShowPopup(true);

    // auto close after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0f1f] via-[#0d1a2b] to-[#0a0f1f] py-16 px-6 overflow-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            color: { value: ["#00dfd8", "#007cf0", "#00a8ff"] },
            links: { enable: false },
            move: { enable: true, speed: 1, outModes: "out" },
            number: { value: 40 },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 5 } },
          },
          detectRetina: true,
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl grid md:grid-cols-2 gap-8 backdrop-blur-xl bg-white/5 rounded-2xl shadow-[0_0_30px_rgba(0,124,240,0.3)] border border-white/10 overflow-hidden py-10"
        style={{ padding: "20px 0" }}
      >
        {/* Left Side */}
        <div
          className="p-8 flex flex-col justify-center text-white"
          style={{ padding: "20px 20px" }}
        >
          <motion.h2
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#00dfd8] to-[#007cf0] bg-clip-text text-transparent"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-300 mb-6"
          >
            We’re here to answer your questions, discuss partnership
            opportunities, or provide support. Let’s make something great
            together!
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <p className="flex items-center gap-3">
              <FiMapPin className="text-cyan-400 text-xl" />
              <span className="text-gray-300">
                113 Lakeshore Rd, West, Suite-163,
                <br />
                Mississauga ON L5H 1E9, Bifro House, Canada
              </span>
            </p>
            <p
              className="flex items-center gap-3 cursor-pointer hover:text-cyan-300"
              onClick={() => (window.location.href = "tel:+1-647-619-0777")}
            >
              <FiPhone className="text-cyan-400 text-xl" />
              <span className="text-gray-300">+1-647-619-0777</span>
            </p>
            <p
              className="flex items-center gap-3 cursor-pointer hover:text-cyan-300"
              onClick={() =>
                (window.location.href = "mailto:info@kuberpayment.com")
              }
            >
              <FiMail className="text-cyan-400 text-xl" />
              <span className="text-gray-300">info@kuberpayment.com</span>
            </p>
          </motion.div>
        </div>

        {/* Right Side - Form */}
        <div
          className="p-10 bg-white/5 text-white flex flex-col justify-center"
          style={{ margin: "5px 12px" }}
        >
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 mt-4"
          >
            {/* Name */}
            <div className="contact-input">
              <FiUser />
              <input type="text" placeholder="Enter your name" required />
            </div>

            {/* Email */}
            <div className="contact-input">
              <FiMail />
              <input type="email" placeholder="Enter your email" required />
            </div>

            {/* Message */}
            <div
              className="contact-input"
              style={{ alignItems: "flex-start" }}
            >
              <FiMessageSquare style={{ marginTop: "4px" }} />
              <textarea rows="4" placeholder="Write your message..." required />
            </div>

            {/* Button */}
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(0,223,216,0.6)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-[#00dfd8] to-[#007cf0] hover:from-[#007cf0] hover:to-[#00dfd8] text-white font-semibold shadow-lg btn-size"
            >
              <FiSend /> Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>

      {/* Success Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="bg-[#0f172a] p-8 rounded-2xl text-center shadow-xl border border-cyan-500/30 max-w-sm"
            >
              <div className="tick-parent">
              <FiCheckCircle className="text-5xl text-green-400 mx-auto mb-4 " />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Thank You!
              </h3>
              <p className="text-gray-300">
                Your information has been received. We’ll contact you soon!
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactUs;
