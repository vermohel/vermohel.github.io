"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const About = () => {
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
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Jane Doe"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg mb-6">
              I'm Jane Doe, a passionate graphic designer and visual artist with over 5 years of experience. I
              specialize in creating unique and impactful designs that tell compelling stories and evoke emotions.
            </p>
            <p className="text-lg mb-6">
              My work spans across various mediums, including digital illustration, branding, and UI/UX design. I
              believe in the power of visual communication to transform ideas into memorable experiences.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300 inline-block"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
