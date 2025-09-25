/**
 * Privacy Policy page for UpLyft
 * Professional privacy policy with smooth animations and clean design
 */

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Shield, Eye, Lock, Database, Users, Globe } from 'lucide-react'

const PrivacyPolicyPage = () => {
  const sections = [
    {
      icon: Shield,
      title: "Information We Collect",
      content: [
        "Personal Information: We collect information you provide directly, including name, email address, phone number, company information, and any other details you submit through our contact forms or during consultations.",
        "Usage Data: We automatically collect information about how you interact with our website, including IP address, browser type, pages visited, time spent, and referring websites.",
        "Cookies and Tracking: We use cookies and similar technologies to enhance your experience, analyze website performance, and provide personalized content."
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "Service Delivery: To provide, maintain, and improve our agency growth solutions, consulting services, and customer support.",
        "Communication: To respond to inquiries, send updates about our services, and provide relevant business insights and marketing materials.",
        "Analytics: To understand user behavior, optimize our website performance, and develop new features and services.",
        "Legal Compliance: To comply with applicable laws, regulations, and legal processes."
      ]
    },
    {
      icon: Database,
      title: "Information Sharing",
      content: [
        "Service Providers: We may share information with trusted third-party service providers who assist in delivering our services, such as hosting providers, analytics services, and communication platforms.",
        "Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.",
        "Legal Requirements: We may disclose information when required by law, court order, or to protect our rights, property, or safety.",
        "We do not sell, rent, or trade your personal information to third parties for marketing purposes."
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "Encryption: We implement industry-standard encryption protocols to protect data in transit and at rest.",
        "Access Controls: Access to personal information is restricted to authorized personnel who need it for legitimate business purposes.",
        "Regular Audits: We conduct regular security assessments and updates to maintain the highest level of data protection.",
        "Incident Response: We have procedures in place to detect, respond to, and notify users of any security incidents."
      ]
    },
    {
      icon: Users,
      title: "Your Rights",
      content: [
        "Access: You have the right to request access to the personal information we hold about you.",
        "Correction: You may request correction of inaccurate or incomplete personal information.",
        "Deletion: You may request deletion of your personal information, subject to legal and business requirements.",
        "Portability: You have the right to receive your personal information in a structured, commonly used format.",
        "Opt-out: You may opt out of marketing communications at any time using the unsubscribe links provided."
      ]
    },
    {
      icon: Globe,
      title: "Contact Information",
      content: [
        "If you have questions about this Privacy Policy or our data practices, please contact us:",
        "Email: privacy@uplyft.com",
        "Address: [Your Business Address]",
        "Phone: [Your Phone Number]",
        "We will respond to your inquiries within 30 days of receipt."
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
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
              <Shield className="text-blue-600" size={24} />
              <span className="text-xl font-bold text-gray-900">Privacy Policy</span>
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
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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

        {/* Footer */}
        <motion.div 
          className="text-center mt-16 p-8 bg-gray-50 rounded-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">
            Questions about our privacy practices?
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <span>Contact Us</span>
          </Link>
        </motion.div>
      </main>
    </div>
  )
}

export default PrivacyPolicyPage
