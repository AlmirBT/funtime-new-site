import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, ArrowRight, Filter, Grid, List } from 'lucide-react'
import { products, categoryNames, categoryIcons, ProductCategory } from '../data/products'

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const categories: ProductCategory[] = ['ranks', 'currencies', 'access', 'keys', 'services']
  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products

  const featuredProducts = products.filter((p) => p.popular)

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
            Премиум <span className="text-blood-400">Магазин</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Раскройте полный потенциал FunTime с нашими премиум донатами
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <Filter className="w-5 h-5 text-white/60" />
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
              selectedCategory === null
                ? 'bg-blood-600 text-white glow-red'
                : 'glass text-white/80 hover:text-white hover:bg-dark-300/50'
            }`}
          >
            Все товары
          </button>
          {categories.map((category) => {
            const Icon = categoryIcons[category]
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  selectedCategory === category
                    ? 'bg-blood-600 text-white glow-red'
                    : 'glass text-white/80 hover:text-white hover:bg-dark-300/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {categoryNames[category]}
              </button>
            )
          })}
        </motion.div>

        {/* View Mode Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-end gap-2 mb-8"
        >
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-all ${
              viewMode === 'grid'
                ? 'bg-blood-600 text-white glow-red'
                : 'glass text-white/80 hover:text-white'
            }`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-all ${
              viewMode === 'list'
                ? 'bg-blood-600 text-white glow-red'
                : 'glass text-white/80 hover:text-white'
            }`}
          >
            <List className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Featured Products */}
        {!selectedCategory && featuredProducts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Рекомендуемые</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.slice(0, 4).map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} viewMode={viewMode} />
              ))}
            </div>
          </motion.section>
        )}

        {/* Products Grid */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {selectedCategory && (
            <h2 className="text-3xl font-bold mb-6">{categoryNames[selectedCategory]}</h2>
          )}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} viewMode={viewMode} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} viewMode={viewMode} />
              ))}
            </div>
          )}
        </motion.section>
      </div>
    </div>
  )
}

function ProductCard({
  product,
  index,
  viewMode,
}: {
  product: typeof products[0]
  index: number
  viewMode: 'grid' | 'list'
}) {
  const Icon = product.icon

  if (viewMode === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        whileHover={{ x: 4 }}
        className="group"
      >
        <Link to={`/shop/${product.id}`}>
          <div className="glass-strong p-6 rounded-2xl hover:bg-dark-300/50 transition-all border-2 border-transparent group-hover:border-blood-600/60 flex items-center gap-6">
            <div
              className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform glow-red`}
            >
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <div className="text-2xl font-bold text-blood-400">
                  {product.priceFrom && 'от '}
                  {product.price}
                </div>
              </div>
              <p className="text-white/70 mb-3">{product.description}</p>
              <div className="flex items-center gap-4 text-sm">
                <span className="px-3 py-1 rounded-full glass text-blood-400">
                  {categoryNames[product.category]}
                </span>
                <span className="flex items-center text-white/60">
                  {product.features.length} преимуществ
                </span>
              </div>
            </div>
            <ArrowRight className="w-6 h-6 text-white/40 group-hover:text-blood-400 group-hover:translate-x-2 transition-all flex-shrink-0" />
          </div>
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -12, scale: 1.02 }}
      className={`group relative ${product.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
    >
      {product.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="px-4 py-1 rounded-full bg-gradient-to-r from-blood-600 to-crimson-600 text-sm font-semibold glow-red">
            Популярно
          </div>
        </div>
      )}
      <Link to={`/shop/${product.id}`}>
        <div className="glass-strong p-6 rounded-2xl hover:bg-dark-300/50 transition-all h-full relative overflow-hidden border-2 border-transparent group-hover:border-blood-600/60">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
          />
          <div className="relative z-10">
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform glow-red`}
            >
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            <div className="text-3xl font-bold text-blood-400 mb-3">
              {product.priceFrom && 'от '}
              {product.price}
            </div>
            <p className="text-white/70 text-sm mb-4 line-clamp-2">{product.description}</p>
            <div className="mb-4">
              <span className="px-3 py-1 rounded-full glass text-xs text-blood-400">
                {categoryNames[product.category]}
              </span>
            </div>
            <ul className="space-y-2 mb-4">
              {product.features.slice(0, 3).map((feature) => (
                <li key={feature} className="flex items-start text-xs text-white/80">
                  <Check className="w-4 h-4 text-blood-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{feature}</span>
                </li>
              ))}
              {product.features.length > 3 && (
                <li className="text-xs text-white/60">
                  +{product.features.length - 3} преимуществ
                </li>
              )}
            </ul>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-blood-400 font-semibold text-sm group-hover:text-blood-500 transition-colors">
                Подробнее
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-blood-600 to-crimson-600 text-sm font-semibold glow-red">
                Купить
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
