import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Activity, Server, Shield } from 'lucide-react'
import { useEffect, useState } from 'react'

interface Stat {
  icon: typeof Users
  label: string
  value: string
  suffix?: string
}

export default function StatsPreview() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('stats-preview')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const stats: Stat[] = [
    { icon: Users, label: 'Пик онлайна', value: '15', suffix: 'K+' },
    { icon: Activity, label: 'Всего игроков', value: '500', suffix: 'K+' },
    { icon: Server, label: 'Аптайм', value: '99.9', suffix: '%' },
    { icon: Shield, label: 'Стабильность', value: '100', suffix: '%' },
  ]

  const AnimatedCounter = ({ value, suffix }: { value: string; suffix?: string }) => {
    const numValue = parseFloat(value)
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      const duration = 2000
      const steps = 60
      const increment = numValue / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= numValue) {
          setCount(numValue)
          clearInterval(timer)
        } else {
          setCount(current)
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }, [isVisible, numValue])

    return (
      <span>
        {suffix === '%' ? count.toFixed(1) : Math.floor(count).toLocaleString()}
        {suffix}
      </span>
    )
  }

  return (
    <section id="stats-preview" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Статистика <span className="text-blood-400">Сервера</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Данные в реальном времени от самой мощной инфраструктуры в СНГ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-strong p-8 rounded-2xl hover:bg-dark-300/50 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blood-600/0 to-blood-600/0 group-hover:from-blood-600/20 group-hover:to-crimson-600/20 transition-all" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blood-600 to-crimson-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform glow-red">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl font-bold text-blood-400 mb-2">
                  {isVisible ? (
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  ) : (
                    '0'
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-1">{stat.label}</h3>
                <p className="text-white/60 text-sm">Данные в реальном времени</p>
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
            to="/stats"
            className="inline-flex items-center px-8 py-4 rounded-lg glass hover:bg-dark-300/50 text-lg font-semibold transition-all group"
          >
            Посмотреть полную статистику
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
