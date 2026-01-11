import { motion } from 'framer-motion'
import { HelpCircle, MessageSquare, FileText, Mail, Search } from 'lucide-react'
import { useState } from 'react'

const faqCategories = [
  {
    category: 'Общие',
    questions: [
      {
        q: 'Какие версии поддерживает FunTime?',
        a: 'FunTime поддерживает версии Minecraft от 1.16.5 до 1.21.8.',
      },
      {
        q: 'Как присоединиться к серверу?',
        a: 'Вы можете присоединиться, подключившись к IP-адресу нашего сервера. Проверьте наш Discord для получения последней информации о подключении.',
      },
      {
        q: 'Сервер pay-to-win?',
        a: 'Нет. FunTime не является pay-to-win. Донаты предоставляют только косметические и удобные функции.',
      },
    ],
  },
  {
    category: 'Донаты',
    questions: [
      {
        q: 'Что предоставляют донаты?',
        a: 'Донаты предоставляют косметические предметы, удобные функции и приоритетную поддержку. Они не предоставляют игровых преимуществ.',
      },
      {
        q: 'Могу ли я получить возврат средств?',
        a: 'Возврат средств доступен в течение 7 дней с момента покупки, если вы не использовали преимущества доната.',
      },
      {
        q: 'Как долго действуют преимущества доната?',
        a: 'Преимущества доната постоянны и не истекают.',
      },
    ],
  },
  {
    category: 'Технические',
    questions: [
      {
        q: 'Какой IP-адрес сервера?',
        a: 'Проверьте наш Discord или сайт для получения последнего IP-адреса сервера.',
      },
      {
        q: 'Я испытываю лаги. Что делать?',
        a: 'Наши серверы оптимизированы для производительности. Если вы испытываете лаги, проверьте ваше интернет-соединение и попробуйте подключиться из другого места.',
      },
      {
        q: 'Как сообщить об ошибке?',
        a: 'Сообщайте об ошибках через нашу систему поддержки или Discord. Включите как можно больше деталей.',
      },
    ],
  },
]

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('')
  const [openCategory, setOpenCategory] = useState<string | null>(null)

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
            Поддержка & <span className="text-blood-400">Помощь</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Получите помощь, найдите ответы и свяжитесь с нашей службой поддержки
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск помощи..."
              className="w-full pl-12 pr-4 py-4 rounded-lg glass-strong border border-dark-400 text-white placeholder-white/40 focus:outline-none focus:border-blood-600 transition-colors"
            />
          </div>
        </motion.div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: MessageSquare, title: 'Создать тикет', description: 'Создать обращение в поддержку' },
            { icon: FileText, title: 'База знаний', description: 'Просмотреть руководства и инструкции' },
            { icon: Mail, title: 'Связаться с нами', description: 'Связаться с нашей командой' },
          ].map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-strong p-6 rounded-2xl hover:bg-dark-300/50 transition-all cursor-pointer group"
            >
              <action.icon className="w-10 h-10 text-blood-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">{action.title}</h3>
              <p className="text-white/60 text-sm">{action.description}</p>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-display font-bold mb-8 text-center">
            Часто задаваемые <span className="text-blood-400">Вопросы</span>
          </h2>
          <div className="space-y-6">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="glass-strong rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenCategory(openCategory === category.category ? null : category.category)
                  }
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-dark-300/50 transition-all"
                >
                  <h3 className="text-2xl font-bold">{category.category}</h3>
                  <HelpCircle
                    className={`w-6 h-6 text-blood-500 transition-transform ${
                      openCategory === category.category ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openCategory === category.category && (
                  <div className="p-6 pt-0 space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className="border-t border-dark-400 pt-4">
                        <h4 className="font-semibold mb-2 text-white">{faq.q}</h4>
                        <p className="text-white/80 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}
