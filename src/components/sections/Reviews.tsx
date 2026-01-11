import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Dymeth | Данила',
    role: 'Создатель контента',
    rating: 5,
    text: 'FunTime — это не просто сервер, это опыт. Качество, производительность и сообщество непревзойдённы. Здесь место элитных игроков.',
  },
  {
    name: 'IIuoner | Николай',
    role: 'Владелец сервера',
    rating: 5,
    text: 'Инфраструктура невероятна. Нулевая задержка, идеальный античит и справедливая экономика. Вот каким должен быть сервер №1.',
  },
  {
    name: 'Mitrofanyshka | Альмир',
    role: 'Создатель контента',
    rating: 5,
      text: 'Внимание к деталям необычайно. Каждая функция ощущается премиум, каждое взаимодействие ощущается мощным. Это будущее Minecraft серверов.',
    },
]

export default function Reviews() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Что говорят <span className="text-blood-400">Игроки</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Отзывы от элитного сообщества
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-strong p-8 rounded-2xl hover:bg-dark-300/50 transition-all relative"
            >
              <Quote className="w-8 h-8 text-blood-500/50 mb-4" />
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-blood-500 fill-blood-500" />
                ))}
              </div>
              <p className="text-white/80 leading-relaxed mb-6">{review.text}</p>
              <div>
                <div className="font-semibold text-white">{review.name}</div>
                <div className="text-sm text-white/60">{review.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
