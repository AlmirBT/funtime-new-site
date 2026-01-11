import { motion } from 'framer-motion'
import { Gamepad2, TrendingUp, Coins, Shield, Users, Zap } from 'lucide-react'

const sections = [
  {
    icon: Gamepad2,
    title: 'Как работают режимы',
    content: [
      'Каждый игровой режим работает независимо со своей системой прогрессии',
      'Игроки могут переключаться между режимами бесшовно',
      'Прогресс сохраняется во всех режимах',
      'Каждый режим имеет уникальные функции и механики',
      'Таблицы лидеров отслеживают производительность во всех режимах',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Как работает прогрессия',
    content: [
      'Прогрессия основана на навыках, а не на pay-to-win',
      'Все игроки начинают на равных условиях',
      'Время и навыки определяют продвижение',
      'Донаты предоставляют удобство, а не силу',
      'Достижения открывают новый контент',
    ],
  },
  {
    icon: Coins,
    title: 'Как работает экономика',
    content: [
      'Внутриигровая валюта зарабатывается через геймплей',
      'Экономика сбалансирована для предотвращения инфляции',
      'Торговля справедлива и прозрачна',
      'Донаты не влияют на баланс экономики',
      'Все игроки имеют равный потенциал заработка',
    ],
  },
  {
    icon: Shield,
    title: 'Почему мы не pay-to-win',
    content: [
      'Донаты предоставляют только косметические и удобные функции',
      'Никакие игровые преимущества не могут быть куплены',
      'Все соревновательные режимы основаны на навыках',
      'Таблицы лидеров отражают навыки, а не траты',
      'Честная игра — наш основной принцип',
    ],
  },
  {
    icon: Users,
    title: 'Почему донаты справедливы',
    content: [
      'Донаты поддерживают инфраструктуру сервера и разработку',
      'Все функции доступны бесплатным игрокам',
      'Преимущества доната косметические и удобные',
      'Конкурентные преимущества не продаются',
      'Прозрачность во всех преимуществах доната',
    ],
  },
  {
    icon: Zap,
    title: 'Система баланса',
    content: [
      'Регулярные обновления баланса на основе отзывов сообщества',
      'Решения по балансу игры на основе данных',
      'Ни одна стратегия не доминирует',
      'Поддерживаются множественные жизнеспособные стили игры',
      'Непрерывный мониторинг и корректировка',
    ],
  },
]

export default function HowItWorks() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-display font-bold mb-6">
            Как это <span className="text-blood-400">Работает</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Понимание систем, которые делают FunTime сервером №1 в СНГ
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-strong p-8 rounded-2xl"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blood-600 to-crimson-600 flex items-center justify-center flex-shrink-0 glow-red">
                  <section.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-white/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-blood-500 mr-3 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fair Play Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 glass-strong p-8 rounded-2xl border-2 border-blood-600/60"
        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            Наша <span className="text-blood-400">Обязанность</span>
          </h2>
          <p className="text-lg text-white/80 text-center leading-relaxed max-w-3xl mx-auto">
            FunTime построен на принципе честной игры. Каждая система, каждая функция, каждое
            решение принимается с одной целью: создать максимально сбалансированный и справедливый
            игровой опыт. Мы не идём на компромиссы в честности, и вы тоже не должны.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
