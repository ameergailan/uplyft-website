/**
 * Footer component for the DSGNLAB website recreation
 * Contains final messaging and company mission statement
 */

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleCollaborateClick = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="section-padding bg-white border-t border-gray-100">
      <div className="container-custom">

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-gray-200 pt-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Logo and Location */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-xl font-bold text-black mb-1">
                UpLyft
              </h3>
              <p className="text-sm text-gray-600">
                Scaling Agencies Worldwide
              </p>
            </div>

            {/* Services */}
            <div className="text-center lg:text-right">
              <p className="text-gray-700 font-medium mb-2">
                Agency Growth Solutions
              </p>
              <div className="flex justify-center lg:justify-end space-x-6 mb-2">
                <Link
                  href="/privacy-policy"
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </div>
              <p className="text-sm text-gray-500">
                © {currentYear} UpLyft. All rights reserved.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
