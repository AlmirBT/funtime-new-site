import { motion } from 'framer-motion'
import { Shield, AlertTriangle, Ban, Gavel, Users, FileText } from 'lucide-react'

const ruleCategories = [
  {
    icon: Shield,
    title: 'Правила сервера',
    rules: [
      'Запрещено читерство, взлом или использование игровых механик',
      'Запрещено грифинг или разрушение построек других игроков',
      'Уважайте всех игроков и членов администрации',
      'Запрещён спам, реклама или неподходящий контент',
      'Соблюдайте все правила Discord и внутриигрового чата',
      'Запрещён обмен или продажа аккаунтов',
      'Немедленно сообщайте об ошибках и эксплойтах администрации',
    ],
  },
  {
    icon: Gavel,
    title: 'Философия модерации',
    content: [
      'Мы поддерживаем политику нулевой толерантности к нарушениям правил',
      'Все наказания справедливы, последовательны и прозрачны',
      'Решения администрации окончательны, но могут быть обжалованы',
      'Мы приоритезируем безопасность сообщества и честную игру',
      'Модерация проактивна, а не только реактивна',
    ],
  },
  {
    icon: Ban,
    title: 'Система наказаний',
    content: [
      'Первое нарушение: Предупреждение или временный бан (1-7 дней)',
      'Второе нарушение: Продлённый бан (7-30 дней)',
      'Третье нарушение: Постоянный бан',
      'Серьёзные нарушения: Немедленный постоянный бан',
      'Все баны могут быть обжалованы через нашу систему поддержки',
    ],
  },
  {
    icon: FileText,
    title: 'Система обжалования',
    content: [
      'Все баны могут быть обжалованы в течение 30 дней',
      'Обжалования должны быть поданы через нашу систему поддержки',
      'Предоставьте доказательства и объяснение для вашего обжалования',
      'Обжалования рассматриваются старшими членами администрации',
      'Решения обычно принимаются в течение 48 часов',
    ],
  },
  {
    icon: Users,
    title: 'Стандарты сообщества',
    content: [
      'Относитесь ко всем членам сообщества с уважением',
      'Запрещена дискриминация, домогательства или разжигание ненависти',
      'Поддерживайте обсуждения цивилизованными и конструктивными',
      'Помогайте новым игрокам и вносите позитивный вклад',
      'Сообщайте о нарушениях правил членам администрации',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Нулевая толерантность',
    violations: [
      'Читерство или взлом',
      'DDoS атаки или нарушение работы сервера',
      'Угрозы в реальном мире или доксинг',
      'Эксплуатация несовершеннолетних',
      'Финансовое мошенничество или аферы',
    ],
  },
]

export default function Rules() {
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
            Правила & <span className="text-blood-400">Политики</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Наша приверженность поддержанию справедливого, безопасного и элитного сообщества
          </p>
        </motion.div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {ruleCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-strong p-8 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blood-600 to-crimson-600 flex items-center justify-center glow-red">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>
              {category.rules && (
                <ul className="space-y-3">
                  {category.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="flex items-start text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-blood-500 mr-3 mt-2 flex-shrink-0" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              )}
              {category.content && (
                <ul className="space-y-3">
                  {category.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-blood-500 mr-3 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {category.violations && (
                <ul className="space-y-3">
                  {category.violations.map((violation, violationIndex) => (
                    <li key={violationIndex} className="flex items-start text-red-400">
                      <AlertTriangle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="font-semibold">{violation}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong p-8 rounded-2xl border-2 border-blood-600/60"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            Важное <span className="text-blood-400">Уведомление</span>
          </h2>
          <p className="text-white/80 text-center leading-relaxed max-w-3xl mx-auto">
            Играя на FunTime, вы соглашаетесь соблюдать все правила и политики сервера. Нарушения
            приведут к соответствующим наказаниям. Мы поддерживаем политику нулевой толерантности для
            серьёзных нарушений. Если у вас есть вопросы о наших правилах, пожалуйста, свяжитесь с нашей
            службой поддержки.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
