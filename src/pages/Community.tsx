import { motion } from 'framer-motion'
import { Users, Trophy, Camera, MessageSquare, Award, TrendingUp } from 'lucide-react'

const events = [
  {
    title: 'Ежемесячный турнир',
    date: 'Первая суббота каждого месяца',
    description: 'Соревновательный PvP турнир с эксклюзивными наградами',
  },
  {
    title: 'Конкурс WIN-TOP',
    date: 'Постоянно',
    description: 'Инвестируйте в наш сервер и выиграйте призы',
  },
  {
    title: 'Встреча сообщества',
    date: 'Ежеквартально',
    description: 'Присоединяйтесь к нам на эксклюзивные события сообщества',
  },
]

const achievements = [
  { name: 'Первая победа', description: 'Убейте 1000 мобов' },
  { name: 'Элитный строитель', description: 'Постройте 1000 блоков' },
  { name: 'Помощник сообщества', description: 'Помогите 100 новым игрокам' },
  { name: 'Чемпион ивента', description: 'Захватите ивент' },
]

export default function Community() {
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
            Элитное <span className="text-blood-400">Сообщество</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Присоединяйтесь к самым влиятельным игрокам в регионе СНГ
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Users, label: 'Активные игроки', value: '20,000+' },
            { icon: MessageSquare, label: 'Участников Discord', value: '100,000+' },
            { icon: Trophy, label: 'Ивентов ежечасно', value: '100+' },
            { icon: Award, label: 'Достижений', value: '100+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-strong p-6 rounded-2xl text-center"
            >
              <stat.icon className="w-8 h-8 text-blood-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-blood-400 mb-1">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Events */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-8 text-center">
            События <span className="text-blood-400">Сообщества</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-strong p-6 rounded-2xl"
              >
                <Trophy className="w-8 h-8 text-blood-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <div className="text-sm text-blood-400 mb-3">{event.date}</div>
                <p className="text-white/80 text-sm">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Achievements */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-8 text-center">
            Достижения <span className="text-blood-400">Игроков</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-strong p-6 rounded-2xl text-center"
              >
                <Award className="w-10 h-10 text-blood-500 mx-auto mb-3" />
                <h3 className="font-bold mb-2">{achievement.name}</h3>
                <p className="text-sm text-white/60">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Discord Preview */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong p-8 rounded-2xl text-center"
        >
          <MessageSquare className="w-16 h-16 text-blood-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Присоединяйтесь к нашему Discord</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Общайтесь с сообществом, получайте обновления, участвуйте в событиях и взаимодействуйте с
            членами администрации. Наш Discord — это сердце сообщества FunTime.
          </p>
          <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-blood-600 to-crimson-600 hover:from-blood-500 hover:to-crimson-500 text-lg font-semibold transition-all glow-red hover:glow-red-strong">
            Присоединиться к Discord
          </button>
        </motion.section>
      </div>
    </div>
  )
}
