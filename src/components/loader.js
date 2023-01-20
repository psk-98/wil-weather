import React from "react"
import { motion } from "framer-motion"

const svgVariants = {
  hidden: {
    rotateX: 0,
  },
  visible: {
    rotateX: [180, 360],
    transition: {
      duration: 1,
      type: "spring",
      repeat: Infinity,
    },
  },
}

const Loader = () => {
  return (
    <div className="loader">
      <motion.div inital="hidden" animate="visible" variants={svgVariants}>
        Loading
      </motion.div>
    </div>
  )
}

export default Loader
