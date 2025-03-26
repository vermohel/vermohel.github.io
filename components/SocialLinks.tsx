import { motion } from "framer-motion"
import { Twitter, GitlabIcon as GitHub, Linkedin, Instagram, Dribbble } from "lucide-react"
import type React from "react" // Added import for React

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  label: string
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    className="text-gray-400 hover:text-white transition-colors duration-200"
  >
    <span className="sr-only">{label}</span>
    {icon}
  </motion.a>
)

const SocialLinks: React.FC<{ className?: string }> = ({ className }) => {
  const socialLinks = [
    { href: "https://twitter.com/janedoe", icon: <Twitter size={24} />, label: "Twitter" },
    { href: "https://github.com/janedoe", icon: <GitHub size={24} />, label: "GitHub" },
    { href: "https://linkedin.com/in/janedoe", icon: <Linkedin size={24} />, label: "LinkedIn" },
    { href: "https://instagram.com/janedoe", icon: <Instagram size={24} />, label: "Instagram" },
    { href: "https://dribbble.com/janedoe", icon: <Dribbble size={24} />, label: "Dribbble" },
  ]

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((link) => (
        <SocialLink key={link.href} {...link} />
      ))}
    </div>
  )
}

export default SocialLinks

