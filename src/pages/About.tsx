import { motion } from 'framer-motion'
import { Target, Zap, Users, Globe, Award, TrendingUp } from 'lucide-react'

const history = [
  {
    year: '2020',
    title: 'Основание',
    description: 'FunTime был создан с видением: построить самый мощный Minecraft сервер в регионе СНГ.',
  },
  {
    year: '2021',
    title: 'Быстрый рост',
    description: 'Достигли 10,000+ пикового онлайна и утвердились как платформа высшего уровня.',
  },
  {
    year: '2022',
    title: 'Модернизация инфраструктуры',
    description: 'Инвестировали в передовую инфраструктуру, достигли 99.9% аптайма и <20мс задержки.',
  },
  {
    year: '2023',
    title: 'Позиция №1',
    description: 'Стали бесспорным сервером №1 в СНГ по онлайну, качеству и репутации.',
  },
  {
    year: '2024',
    title: 'Глобальное расширение',
    description: 'Расширяемся глобально, сохраняя позицию элитной платформы в СНГ.',
  },
  {
    year: '2025',
    title: 'Лучший сервер в СНГ',
    description: 'Стали лучшим сервером в СНГ по онлайну, качеству и репутации.',
  },
]

const values = [
  {
    icon: Target,
    title: 'Миссия',
    description: 'Создать самый мощный, справедливый и престижный опыт Minecraft сервера в мире.',
  },
  {
    icon: Zap,
    title: 'Видение',
    description: 'Быть глобальным стандартом совершенства в инфраструктуре и сообществе Minecraft серверов.',
  },
  {
    icon: Users,
    title: 'Философия',
    description: 'Превосходство не опционально. Каждая функция, каждое взаимодействие, каждый момент должны ощущаться премиум.',
  },
]

const achievements = [
  { icon: Award, label: 'Сервер №1', value: 'Регион СНГ' },
  { icon: Users, label: 'Пик онлайна', value: '20,000+' },
  { icon: TrendingUp, label: 'Рост', value: '+200%' },
  { icon: Globe, label: 'Аптайм', value: '99.9%' },
]

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-7xl font-display font-bold mb-6">
            О <span className="text-blood-400">FunTime</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            История того, как мы стали сервером №1 в СНГ по онлайну, качеству и репутации.
            Это не просто сервер — это цифровая империя, построенная на совершенстве.
          </p>
        </motion.div>

        {/* Mission, Vision, Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-strong p-8 rounded-2xl"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blood-600 to-crimson-600 flex items-center justify-center mb-4 glow-red">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
              <p className="text-white/80 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* History */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-display font-bold mb-12 text-center">
            Наша <span className="text-blood-400">История</span>
          </h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blood-600 via-blood-500 to-blood-600" />
            <div className="space-y-12">
              {history.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  <div className="absolute left-6 w-4 h-4 rounded-full bg-blood-600 border-4 border-dark-100" />
                  <div className="text-blood-400 font-bold text-lg mb-2">{event.year}</div>
                  <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                  <p className="text-white/80 leading-relaxed">{event.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* What Makes Us #1 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong p-8 rounded-2xl mb-20"
        >
          <h2 className="text-4xl font-display font-bold mb-8 text-center">
            Что делает нас <span className="text-blood-400">№1</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Инфраструктура</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Наша инфраструктура построена на корпоративном оборудовании с резервными системами,
                обеспечивая 99.9% аптайма и задержку менее 20мс. Мы не идём на компромиссы в производительности.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Античит</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Наша элитная система античита использует машинное обучение и анализ поведения для
                поддержания справедливого игрового поля. Нулевая толерантность означает ноль читеров.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Баланс экономики</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Наша экономика тщательно сбалансирована для предотвращения pay-to-win сценариев. Донаты
                предоставляют удобство и престиж, а не несправедливые преимущества.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Сообщество</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Мы построили самое вовлечённое и элитное сообщество в СНГ. Наши игроки
                страстные, умелые и преданные совершенству.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Achievements */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-strong p-6 rounded-2xl text-center"
            >
              <achievement.icon className="w-8 h-8 text-blood-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-blood-400 mb-1">{achievement.value}</div>
              <div className="text-sm text-white/60">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.section>
      </div>
    </div>
  )
}
