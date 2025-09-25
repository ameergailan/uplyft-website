/**
 * Terms of Service page for UpLyft
 * Professional terms and conditions with smooth animations and clean design
 */

'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, FileText, Scale, AlertTriangle, CreditCard, UserCheck, Gavel } from 'lucide-react'

const TermsOfServicePage = () => {
  // Ensure normal cursor on legal pages
  useEffect(() => {
    document.body.classList.remove('custom-cursor-active')
    document.body.style.cursor = 'default'
    
    return () => {
      // Restore when leaving page
      document.body.classList.add('custom-cursor-active')
      document.body.style.cursor = 'none'
    }
  }, [])

  const sections = [
    {
      icon: UserCheck,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using UpLyft's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.",
        "These terms constitute a legally binding agreement between you and UpLyft. If you do not agree with any part of these terms, you must not use our services.",
        "We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the updated terms."
      ]
    },
    {
      icon: FileText,
      title: "Service Description",
      content: [
        "UpLyft provides agency growth solutions, including but not limited to lead generation systems, sales team integration, automation implementation, and business optimization consulting.",
        "Our services are designed to help agencies scale their operations, increase revenue, and improve operational efficiency through proven methodologies and strategic guidance.",
        "Service delivery timelines, specific outcomes, and implementation details will be outlined in separate service agreements or statements of work."
      ]
    },
    {
      icon: CreditCard,
      title: "Payment Terms",
      content: [
        "Payment terms will be specified in your service agreement. All fees are due according to the payment schedule outlined in your contract.",
        "Late payments may incur additional fees as specified in your service agreement. We reserve the right to suspend services for accounts with overdue payments.",
        "Refund policies vary by service type and will be clearly outlined in your service agreement. Generally, refunds are not provided for completed work or services already delivered.",
        "All prices are subject to change with 30 days written notice. Current clients will be notified of any pricing changes affecting their ongoing services."
      ]
    },
    {
      icon: Scale,
      title: "Intellectual Property",
      content: [
        "All content, methodologies, systems, and materials provided by UpLyft remain our intellectual property unless explicitly transferred through written agreement.",
        "You are granted a limited, non-exclusive license to use our materials solely for the purpose of implementing the services we provide to your business.",
        "You may not reproduce, distribute, modify, or create derivative works of our proprietary materials without written consent.",
        "Any improvements, modifications, or developments made to our systems during service delivery may become part of our intellectual property."
      ]
    },
    {
      icon: AlertTriangle,
      title: "Limitations and Disclaimers",
      content: [
        "While we strive to deliver exceptional results, we cannot guarantee specific business outcomes, revenue increases, or performance metrics.",
        "Our services are provided 'as is' without warranties of any kind, either express or implied, including but not limited to merchantability or fitness for a particular purpose.",
        "UpLyft's liability for any claims arising from our services shall not exceed the total amount paid by you for the specific services in question.",
        "We are not responsible for any indirect, incidental, special, or consequential damages arising from the use of our services."
      ]
    },
    {
      icon: Gavel,
      title: "Termination and Governing Law",
      content: [
        "Either party may terminate services with written notice as specified in the service agreement. Termination does not relieve you of payment obligations for services already provided.",
        "These terms are governed by the laws of [Your Jurisdiction] without regard to conflict of law principles.",
        "Any disputes arising from these terms or our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.",
        "If any provision of these terms is found to be unenforceable, the remaining provisions shall remain in full force and effect."
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white" data-page="legal">
      {/* Header */}
      <motion.header 
        className="bg-white shadow-sm border-b"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to UpLyft</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Scale className="text-blue-600" size={24} />
              <span className="text-xl font-bold text-gray-900">Terms of Service</span>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Please read these terms carefully before using our services. They outline your rights and responsibilities.
          </p>
          <p className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.section
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <section.icon className="text-blue-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {section.title}
                </h2>
              </div>
              
              <div className="space-y-4">
                {section.content.map((paragraph, pIndex) => (
                  <motion.p
                    key={pIndex}
                    className="text-gray-700 leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: pIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Important Notice */}
        <motion.div 
          className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 mt-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start space-x-4">
            <AlertTriangle className="text-yellow-600 mt-1" size={24} />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                Important Notice
              </h3>
              <p className="text-yellow-700 leading-relaxed">
                These terms are effective as of the date listed above. By continuing to use our services, 
                you agree to the most current version of these terms. We recommend reviewing this page 
                periodically for any updates or changes.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="text-center mt-16 p-8 bg-gray-50 rounded-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">
            Need clarification on any of these terms?
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <span>Contact Our Team</span>
          </Link>
        </motion.div>
      </main>
    </div>
  )
}

export default TermsOfServicePage
