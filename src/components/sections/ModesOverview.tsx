import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sword, Gift, Flame, Zap } from 'lucide-react'

const modes = [
  {
    icon: Sword,
    title: 'PvP Арена',
    description: 'Уникальная арена куда заходит несоклько человек а выходит один',
    color: 'from-blood-600 to-crimson-600',
  },
  {
    icon: Gift,
    title: 'Ивенты',
    description: 'Уникальнейшие ивенты по типу мистического сундука, вулкана, деда мороза',
    color: 'from-crimson-600 to-blood-600',
  },
  {
    icon: Flame,
    title: 'Анархия 1.16.5',
    description: 'Анархия на версии 1.16.5 где выживает сильнейший',
    color: 'from-blood-600 to-crimson-600',
  },
  {
    icon: Zap,
    title: 'Анархия 1.21.8',
    description: 'Уникальная анархия с кучей новых механик и отличной оптимизацей',
    color: 'from-crimson-600 to-blood-600',
  },
]

export default function ModesOverview() {
  return (
    <section className="py-24 bg-dark-100/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Игровые <span className="text-blood-400">Режимы</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Множество премиум опытов, одна элитная платформа
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {modes.map((mode, index) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="glass-strong p-8 rounded-2xl hover:bg-dark-300/50 transition-all h-full relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${mode.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${mode.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform glow-red`}>
                    <mode.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{mode.title}</h3>
                  <p className="text-white/70 leading-relaxed">{mode.description}</p>
                </div>
              </div>
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
            to="/how-it-works"
            className="inline-flex items-center px-8 py-4 rounded-lg glass hover:bg-dark-300/50 text-lg font-semibold transition-all group"
          >
            Узнать как это работает
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
