"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  { id: 1, title: "Project 1", image: "/placeholder.svg?height=300&width=300" },
  { id: 2, title: "Project 2", image: "/placeholder.svg?height=300&width=300" },
  { id: 3, title: "Project 3", image: "/placeholder.svg?height=300&width=300" },
  { id: 4, title: "Project 4", image: "/placeholder.svg?height=300&width=300" },
  { id: 5, title: "Project 5", image: "/placeholder.svg?height=300&width=300" },
  { id: 6, title: "Project 6", image: "/placeholder.svg?height=300&width=300" },
]

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Portfolio
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              <motion.div
                className="p-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <a href="#" className="text-blue-500 hover:underline">
                  View Project
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio

