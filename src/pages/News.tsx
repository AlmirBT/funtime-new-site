import { motion } from 'framer-motion'
import { Calendar, Tag, ArrowRight } from 'lucide-react'

const newsItems = [
  {
    date: '2024-01-15',
    category: 'Обновление',
    title: 'Крупная модернизация инфраструктуры',
    excerpt: 'Мы модернизировали нашу инфраструктуру для поддержки ещё большего количества игроков с улучшенной производительностью.',
  },
  {
    date: '2024-01-10',
    category: 'Патч-ноты',
    title: 'Обновление баланса v2.1.0',
    excerpt: 'Новые изменения баланса для улучшения геймплея во всех режимах. См. полные патч-ноты для деталей.',
  },
  {
    date: '2024-01-05',
    category: 'Событие',
    title: 'Объявлен январский турнир',
    excerpt: 'Присоединяйтесь к нам на наш ежемесячный турнир с эксклюзивными наградами и призами.',
  },
  {
    date: '2023-12-28',
    category: 'Сообщество',
    title: 'Лучшее из сообщества',
    excerpt: 'Ознакомьтесь с удивительными постройками и достижениями нашего сообщества в этом месяце.',
  },
  {
    date: '2023-12-20',
    category: 'Обновление',
    title: 'Новая система античита',
    excerpt: 'Мы внедрили продвинутую систему античита для обеспечения честной игры для всех.',
  },
  {
    date: '2023-12-15',
    category: 'Дневник разработки',
    title: 'Дорожная карта разработки 2024',
    excerpt: 'Взгляд на то, что ждёт FunTime в 2024 году. Впереди захватывающие функции и улучшения.',
  },
]

export default function News() {
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
            Новости & <span className="text-blood-400">Обновления</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Будьте в курсе последних новостей, обновлений и объявлений от FunTime
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="space-y-6">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-strong p-8 rounded-2xl hover:bg-dark-300/50 transition-all group cursor-pointer"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="inline-flex items-center gap-2 text-sm text-white/60">
                      <Calendar className="w-4 h-4" />
                      {new Date(item.date).toLocaleDateString('ru-RU', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-sm text-blood-400">
                      <Tag className="w-4 h-4" />
                      {item.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-blood-400 transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-white/80 leading-relaxed">{item.excerpt}</p>
                </div>
                <ArrowRight className="w-6 h-6 text-white/40 group-hover:text-blood-400 group-hover:translate-x-2 transition-all flex-shrink-0" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}
