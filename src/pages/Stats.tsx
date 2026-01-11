import { motion } from 'framer-motion'
import { Users, Activity, Server, Shield, TrendingUp, Clock, Zap, Award } from 'lucide-react'
import { useEffect, useState } from 'react'

interface StatCard {
  icon: typeof Users
  label: string
  value: string
  suffix?: string
  description: string
}

const stats: StatCard[] = [
  {
    icon: Users,
    label: 'Пик онлайна',
    value: '15',
    suffix: 'K+',
    description: 'Наивысшее количество одновременных игроков',
  },
  {
    icon: Activity,
    label: 'Всего игроков',
    value: '500',
    suffix: 'K+',
    description: 'Зарегистрированных участников сообщества',
  },
  {
    icon: Server,
    label: 'Аптайм',
    value: '99.9',
    suffix: '%',
    description: 'Доступность сервера в этом месяце',
  },
  {
    icon: Shield,
    label: 'Стабильность',
    value: '100',
    suffix: '%',
    description: 'Оценка надёжности системы',
  },
  {
    icon: Clock,
    label: 'Средняя задержка',
    value: '<20',
    suffix: 'мс',
    description: 'Время отклика по регионам',
  },
  {
    icon: Zap,
    label: 'TPS',
    value: '20',
    suffix: '',
    description: 'Тиков в секунду (оптимально)',
  },
  {
    icon: TrendingUp,
    label: 'Темп роста',
    value: '+200',
    suffix: '%',
    description: 'Годовой рост',
  },
  {
    icon: Award,
    label: 'Рейтинг',
    value: '#1',
    suffix: ' СНГ',
    description: 'Позиция в регионе СНГ',
  },
]

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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

    if (suffix === '%') {
      return <span>{count.toFixed(1)}{suffix}</span>
    } else if (suffix === 'мс') {
      return <span>{value}{suffix}</span>
    } else {
      return <span>{Math.floor(count).toLocaleString()}{suffix}</span>
    }
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-display font-bold mb-6">
            Статистика <span className="text-blood-400">Сервера</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Данные в реальном времени и прозрачность от самой мощной инфраструктуры в СНГ
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-strong p-8 rounded-2xl hover:bg-dark-300/50 transition-all group"
            >
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
              <p className="text-white/60 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="glass-strong p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Система античита</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Наша элитная система античита использует продвинутые алгоритмы машинного обучения для обнаружения
              и предотвращения читерства в реальном времени. Мы поддерживаем политику нулевой толерантности.
            </p>
            <div className="flex items-center gap-4">
              <div className="text-3xl font-bold text-blood-400">99.9%</div>
              <div className="text-sm text-white/60">Процент обнаружения</div>
            </div>
          </div>

          <div className="glass-strong p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Баланс экономики</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Наша экономика тщательно сбалансирована для обеспечения честной игры. Донаты предоставляют
              удобство и престиж, а не несправедливые конкурентные преимущества.
            </p>
            <div className="flex items-center gap-4">
              <div className="text-3xl font-bold text-blood-400">100%</div>
              <div className="text-sm text-white/60">Честная игра</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
