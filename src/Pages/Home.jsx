// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-pink-50 to-white pt-20 px-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4"
      >
        Know Your Body. <br /> Find Your Style.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl text-gray-600 max-w-xl"
      >
        Let us help you discover fashion that truly flatters you — personalized and confident.
      </motion.p>

      <motion.div
        className="mt-10 flex gap-4 flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <button className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition">
          ✨ Get Style Recommendations
        </button>
        <button className="border border-pink-500 text-pink-500 px-6 py-3 rounded-full hover:bg-pink-100 transition">
          🧍 Know Your Body Type
        </button>
      </motion.div>
    </main>
  );
};

export default Home;
