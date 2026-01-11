import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Shield, Zap, TrendingUp } from 'lucide-react'
import Hero from '../components/sections/Hero'
import Section from '../components/sections/Section'
import StatsPreview from '../components/sections/StatsPreview'
import ModesOverview from '../components/sections/ModesOverview'
import DonationPreview from '../components/sections/DonationPreview'
import Reviews from '../components/sections/Reviews'
import Philosophy from '../components/sections/Philosophy'

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero />

      {/* What is FunTime */}
      <Section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-balance">
              Что такое <span className="text-blood-400">FunTime</span>?
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              FunTime — это не просто Minecraft сервер. Это цифровая империя, глобальная платформа
              и бесспорный лидер в регионе СНГ. Мы создали нечто, что превосходит игру — премиум
              опыт, устанавливающий стандарт совершенства.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              С поддержкой версий от 1.16.5 до 1.21.8 мы создали экосистему, где сходятся
              мощь, престиж и производительность. Здесь элитные игроки приходят доминировать.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Why We Are #1 */}
      <Section className="py-24 bg-dark-100/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Почему мы <span className="text-blood-400">№1</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Превосходство не заявляется. Оно демонстрируется.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: 'Пик онлайна',
                description: 'Стабильно самое высокое количество игроков в регионе СНГ',
                stat: '20,000+',
              },
              {
                icon: Shield,
                title: 'Нулевая толерантность',
                description: 'Элитные системы античита и модерации',
                stat: '99.9%',
              },
              {
                icon: Zap,
                title: 'Производительность',
                description: 'Передовая инфраструктура и оптимизация',
                stat: '<20мс',
              },
              {
                icon: TrendingUp,
                title: 'Рост',
                description: 'Быстро расширяющееся глобальное присутствие',
                stat: '+200%',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-strong p-8 rounded-2xl hover:bg-dark-300/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blood-600 to-crimson-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform glow-red">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-blood-400 mb-2">{feature.stat}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Server Stats Preview */}
      <StatsPreview />

      {/* Modes Overview */}
      <ModesOverview />

      {/* Donation Preview */}
      <DonationPreview />

      {/* Community Section */}
      <Section className="py-24 bg-dark-100/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Элитное <span className="text-blood-400">Сообщество</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Присоединяйтесь к самым влиятельным игрокам в регионе СНГ
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: 'Активные игроки',
                value: '20,000+',
                description: 'Пик одновременных игроков',
              },
              {
                title: 'Всего участников',
                value: '200,000+',
                description: 'Зарегистрированных участников сообщества',
              },
              {
                title: 'Участников Discord',
                value: '100,000+',
                description: 'Активное сообщество Discord',
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-strong p-8 rounded-2xl text-center"
              >
                <div className="text-4xl font-bold text-blood-400 mb-2">{stat.value}</div>
                <h3 className="text-lg font-semibold mb-1">{stat.title}</h3>
                <p className="text-white/60 text-sm">{stat.description}</p>
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
              to="/community"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blood-600 to-crimson-600 hover:from-blood-500 hover:to-crimson-500 text-lg font-semibold transition-all glow-red hover:glow-red-strong group"
            >
              Исследовать сообщество
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* Reviews */}
      <Reviews />

      {/* Philosophy */}
      <Philosophy />
    </div>
  )
}
