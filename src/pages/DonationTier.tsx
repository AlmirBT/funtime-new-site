import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Crown, Sparkles, Zap, Check, ShoppingCart, Shield } from 'lucide-react'

const tierData: Record<string, any> = {
  elite: {
    name: 'Elite',
    price: '999₽',
    originalPrice: '1299₽',
    description: 'Ultimate power and prestige for the most dedicated players',
    icon: Crown,
    gradient: 'from-blood-700 to-crimson-700',
    philosophy: 'Elite tier is for players who demand the absolute best. This is not just a donation—it\'s a statement of dominance and commitment to excellence.',
    whoFor: 'Serious players, content creators, community leaders, and those who want the complete FunTime experience.',
    features: [
      'All previous tier perks',
      'Exclusive Elite tag with special formatting',
      'Priority queue (always first, never wait)',
      'Private Elite Discord channel with direct admin access',
      'Monthly exclusive events and tournaments',
      'Direct access to server administrators',
      'Custom commands and advanced permissions',
      'Unlimited homes (no restrictions)',
      'Priority support (24/7 response time)',
      'Exclusive Elite-only cosmetics',
      'Early access to all new features',
      'VIP server access for testing',
      'Monthly Elite-only giveaways',
      'Custom nickname colors',
      'Access to Elite-only game modes',
    ],
    restrictions: [
      'Must follow all server rules',
      'No refunds after 7 days',
      'Subject to server terms of service',
    ],
    rules: [
      'Elite status can be revoked for rule violations',
      'Abuse of privileges will result in permanent ban',
      'Must maintain respectful behavior',
    ],
  },
  premium: {
    name: 'Premium',
    price: '499₽',
    originalPrice: '699₽',
    description: 'Advanced features and benefits for serious players',
    icon: Sparkles,
    gradient: 'from-crimson-700 to-blood-700',
    philosophy: 'Premium tier bridges the gap between standard and elite. It\'s for players who want significant advantages without the full elite commitment.',
    whoFor: 'Active players, regular donators, and those seeking enhanced gameplay without the full elite package.',
    features: [
      'All Standard tier perks',
      'Premium tag with special formatting',
      'Priority queue (high priority, minimal wait)',
      'Premium Discord channel access',
      'Weekly exclusive events',
      'Extended command access',
      '10 homes (generous limit)',
      'Priority support (fast response)',
      'Premium cosmetics collection',
      'Access to beta features',
      'Monthly Premium giveaways',
      'Custom nickname formatting',
    ],
    restrictions: [
      'Must follow all server rules',
      'No refunds after 7 days',
      'Subject to server terms of service',
    ],
    rules: [
      'Premium status can be revoked for rule violations',
      'Abuse of privileges will result in ban',
      'Must maintain respectful behavior',
    ],
  },
  standard: {
    name: 'Standard',
    price: '199₽',
    originalPrice: '299₽',
    description: 'Essential advantages to enhance your experience',
    icon: Zap,
    gradient: 'from-blood-800 to-crimson-800',
    philosophy: 'Standard tier is the foundation of our donation system. It provides essential benefits that enhance gameplay without breaking the balance.',
    whoFor: 'Casual players, new members, and those looking to support the server while gaining useful perks.',
    features: [
      'Standard donator tag',
      'Priority queue (medium priority)',
      'Donator Discord channel access',
      '5 homes (standard limit)',
      'Standard support priority',
      'Donator cosmetics collection',
      'Access to donator shop',
      'Monthly giveaways eligibility',
      'Custom nickname (basic)',
      'Donator-only commands',
    ],
    restrictions: [
      'Must follow all server rules',
      'No refunds after 7 days',
      'Subject to server terms of service',
    ],
    rules: [
      'Standard status can be revoked for rule violations',
      'Abuse of privileges will result in ban',
      'Must maintain respectful behavior',
    ],
  },
}

export default function DonationTier() {
  const { tier } = useParams<{ tier: string }>()
  const data = tier ? tierData[tier.toLowerCase()] : null

  if (!data) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Tier Not Found</h1>
        <Link to="/shop" className="text-blood-400 hover:text-blood-300">
          Return to Shop
        </Link>
      </div>
    )
  }

  const Icon = data.icon

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/shop"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Shop
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${data.gradient} flex items-center justify-center mx-auto mb-6 glow-red-strong`}
          >
            <Icon className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-6xl md:text-7xl font-display font-bold mb-4">{data.name}</h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-5xl font-bold text-blood-400">{data.price}</span>
            {data.originalPrice && (
              <span className="text-2xl text-white/40 line-through">{data.originalPrice}</span>
            )}
          </div>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">{data.description}</p>
        </motion.div>

        {/* Philosophy */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong p-8 rounded-2xl mb-8"
        >
          <h2 className="text-3xl font-bold mb-4">Philosophy</h2>
          <p className="text-white/80 leading-relaxed">{data.philosophy}</p>
        </motion.section>

        {/* Who It's For */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong p-8 rounded-2xl mb-8"
        >
          <h2 className="text-3xl font-bold mb-4">Who It's For</h2>
          <p className="text-white/80 leading-relaxed">{data.whoFor}</p>
        </motion.section>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong p-8 rounded-2xl mb-8"
        >
          <h2 className="text-3xl font-bold mb-6">What It Gives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.features.map((feature: string, index: number) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-start"
              >
                <Check className="w-6 h-6 text-blood-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-white/80">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Restrictions & Rules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-4">Restrictions</h2>
            <ul className="space-y-2">
              {data.restrictions.map((restriction: string) => (
                <li key={restriction} className="flex items-start text-white/80">
                  <Shield className="w-5 h-5 text-white/40 mr-2 flex-shrink-0 mt-0.5" />
                  {restriction}
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-4">Rules</h2>
            <ul className="space-y-2">
              {data.rules.map((rule: string) => (
                <li key={rule} className="flex items-start text-white/80">
                  <Shield className="w-5 h-5 text-white/40 mr-2 flex-shrink-0 mt-0.5" />
                  {rule}
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <button
            className={`inline-flex items-center px-12 py-5 rounded-lg bg-gradient-to-r ${data.gradient} hover:from-blood-500 hover:to-crimson-500 text-xl font-semibold transition-all glow-red hover:glow-red-strong group`}
          >
            <ShoppingCart className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
            Purchase {data.name} Tier
          </button>
        </motion.div>
      </div>
    </div>
  )
}
