import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Zap, Shield, TrendingUp } from 'lucide-react'

const principles = [
  {
    icon: Target,
    title: 'Превосходство',
    description: 'Мы не соглашаемся на хорошее. Мы требуем совершенства в каждом аспекте платформы.',
  },
  {
    icon: Zap,
    title: 'Производительность',
    description: 'Передовая инфраструктура обеспечивает нулевые компромиссы в скорости и стабильности.',
  },
  {
    icon: Shield,
    title: 'Честность',
    description: 'Нулевая толерантность к читерам. Честная игра не подлежит обсуждению.',
  },
  {
    icon: TrendingUp,
    title: 'Инновации',
    description: 'Постоянно развиваемся, всегда улучшаемся. Мы устанавливаем стандарт, которому следуют другие.',
  },
]

export default function Philosophy() {
  return (
    <section className="py-24 bg-dark-100/30 relative overflow-hidden">
      <div className="absolute inset-0 red-gradient opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Наша <span className="text-blood-400">Философия</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Принципы, которые ведут нас к первому месту
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-strong p-6 rounded-2xl hover:bg-dark-300/50 transition-all text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blood-600 to-crimson-600 flex items-center justify-center mx-auto mb-4 glow-red">
                <principle.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
              <p className="text-white/70 text-sm">{principle.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/about"
            className="inline-flex items-center px-8 py-4 rounded-lg glass hover:bg-dark-300/50 text-lg font-semibold transition-all group"
          >
            Узнать больше о нас
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
