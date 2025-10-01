/**
 * Scroll arrow that shoots down from "why" to black page
 * Arrow length follows scroll progress
 */

'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ScrollArrow = ({ scrollProgress }: { scrollProgress: number }) => {
  const arrowLength = scrollProgress * 300 // Arrow grows up to 300px

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: `${arrowLength}px` }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
        className="w-1 bg-white relative"
        style={{ transformOrigin: 'top' }}
      >
        {/* Arrow head */}
        {arrowLength > 50 && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-white" />
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default ScrollArrow




