/**
 * Efficiency section component for the DSGNLAB website recreation
 * Contains the "Everything we do is aimed at growth" content with two-column layout
 */

'use client'

import { motion } from 'framer-motion'

const EfficiencySection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
            Efficiency
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-black mb-8">
            Everything we do
            <br />
            drives agency success
          </h3>
        </motion.div>

        {/* Two Column Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h4 className="text-xl font-semibold text-black mb-3">
                No fluff. No guesswork
              </h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Proven strategies with measurable impact
              </p>
              <p className="text-gray-600 leading-relaxed">
                improving agency operations, client retention, and revenue growth
              </p>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h4 className="text-xl font-semibold text-black mb-3">
                Just results
              </h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                that scale, optimize, and deliver.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Systems built to match
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                how agencies operate, grow, and succeed
              </p>
              <p className="text-gray-600 leading-relaxed">
                all backed by proven methodologies
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default EfficiencySection
