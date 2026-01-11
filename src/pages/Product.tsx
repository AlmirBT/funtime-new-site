import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ShoppingCart, Check, Shield, Zap, Users } from 'lucide-react'
import { products, categoryNames } from '../data/products'

export default function Product() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Товар не найден</h1>
        <Link to="/shop" className="text-blood-400 hover:text-blood-500">
          Вернуться в магазин
        </Link>
      </div>
    )
  }

  const Icon = product.icon
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-white/80 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Назад
          </button>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mx-auto mb-6 glow-red-strong`}
          >
            <Icon className="w-12 h-12 text-white" />
          </div>
          <div className="mb-4">
            <span className="px-4 py-2 rounded-full glass text-blood-400 text-sm font-medium">
              {categoryNames[product.category]}
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-display font-bold mb-4">{product.name}</h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-5xl font-bold text-blood-400">
              {product.priceFrom && 'от '}
              {product.price}
            </span>
          </div>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">{product.description}</p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Для кого */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-strong p-8 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <Users className="w-8 h-8 text-blood-500" />
                <h2 className="text-3xl font-bold">Для кого этот донат</h2>
              </div>
              <p className="text-white/80 leading-relaxed">{product.whoFor}</p>
            </motion.section>

            {/* Что даёт */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-strong p-8 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <Zap className="w-8 h-8 text-blood-500" />
                <h2 className="text-3xl font-bold">Что даёт</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.whatGives.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start"
                  >
                    <Check className="w-6 h-6 text-blood-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Как используется */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-strong p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-bold mb-4">Как используется</h2>
              <p className="text-white/80 leading-relaxed">{product.howUsed}</p>
            </motion.section>

            {/* Ограничения */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-strong p-8 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <Shield className="w-8 h-8 text-white/40" />
                <h2 className="text-2xl font-bold">Ограничения</h2>
              </div>
              <ul className="space-y-2">
                {product.restrictions.map((restriction, index) => (
                  <li key={index} className="flex items-start text-white/80">
                    <Shield className="w-5 h-5 text-white/40 mr-2 flex-shrink-0 mt-0.5" />
                    {restriction}
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Влияние на геймплей */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-strong p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-bold mb-4">Влияние на геймплей</h2>
              <p className="text-white/80 leading-relaxed">{product.gameplayImpact}</p>
            </motion.section>

            {/* Почему это не pay-to-win */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-strong p-8 rounded-2xl border-2 border-blood-600/60"
            >
              <h2 className="text-2xl font-bold mb-4 text-blood-400">
                Почему это не pay-to-win
              </h2>
              <p className="text-white/80 leading-relaxed">{product.whyNotPayToWin}</p>
            </motion.section>
          </div>

          {/* Right Column - Features & CTA */}
          <div className="space-y-8">
            {/* Features Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-strong p-8 rounded-2xl sticky top-32"
            >
              <h2 className="text-2xl font-bold mb-6">Преимущества</h2>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-white/80">
                    <Check className="w-5 h-5 text-blood-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <button
                className={`w-full px-8 py-5 rounded-lg bg-gradient-to-r ${product.gradient} hover:from-blood-500 hover:to-crimson-500 text-xl font-semibold transition-all glow-red hover:glow-red-strong group flex items-center justify-center`}
              >
                <ShoppingCart className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Купить {product.name}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Похожие товары</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((related, index) => {
                const RelatedIcon = related.icon
                return (
                  <motion.div
                    key={related.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group"
                  >
                    <Link to={`/shop/${related.id}`}>
                      <div className="glass-strong p-6 rounded-2xl hover:bg-dark-300/50 transition-all">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${related.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                        >
                          <RelatedIcon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">{related.name}</h3>
                        <div className="text-xl font-bold text-blood-400 mb-2">
                          {related.priceFrom && 'от '}
                          {related.price}
                        </div>
                        <p className="text-white/60 text-sm line-clamp-2">{related.description}</p>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  )
}
