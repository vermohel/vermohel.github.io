"use client"

import { motion } from "framer-motion"
import SocialLinks from "./SocialLinks"

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gray-100">
      <motion.div className="text-center" variants={containerVariants} initial="hidden" animate="visible">
        <motion.h1 variants={itemVariants} className="text-6xl font-bold mb-4">
          Jane Doe
        </motion.h1>
        <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-8">
          Graphic Designer & Visual Artist
        </motion.p>
        <motion.div variants={itemVariants}>
          <a
            href="#portfolio"
            className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300 inline-block mb-8"
          >
            View My Work
          </a>
        </motion.div>
        <motion.div variants={itemVariants}>
          <SocialLinks className="justify-center" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

