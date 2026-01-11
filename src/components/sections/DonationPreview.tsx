import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { products } from '../../data/products'

const featuredRanks = products
  .filter((p) => p.category === 'ranks')
  .filter((p) => p.popular || ['elite', 'hero', 'donate-key'].includes(p.id))
  .slice(0, 3)

export default function DonationPreview() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Премиум <span className="text-blood-400">Уровни</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Раскройте полный потенциал FunTime
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredRanks.map((tier, index) => {
            const Icon = tier.icon
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative"
              >
                <Link to={`/shop/${tier.id}`}>
                  <div className="glass-strong p-8 rounded-2xl hover:bg-dark-300/50 transition-all h-full relative overflow-hidden border-2 border-transparent group-hover:border-blood-600/60">
                    <div className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tier.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform glow-red`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold mb-2">{tier.name}</h3>
                      <div className="text-4xl font-bold text-blood-400 mb-4">
                        {tier.priceFrom && 'от '}
                        {tier.price}
                      </div>
                      <p className="text-white/70 mb-6">{tier.description}</p>
                      <ul className="space-y-2 mb-6">
                        {tier.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-white/60">
                            <div className="w-1.5 h-1.5 rounded-full bg-blood-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center text-blood-400 font-semibold group-hover:text-blood-500 transition-colors">
                        Подробнее
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/shop"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blood-600 to-crimson-600 hover:from-blood-500 hover:to-crimson-500 text-lg font-semibold transition-all glow-red hover:glow-red-strong group"
          >
            Посмотреть все уровни
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
