import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ShoppingBag, User, LogIn } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/shop', label: 'Магазин' },
    { path: '/about', label: 'О сервере' },
    { path: '/stats', label: 'Статистика' },
    { path: '/how-it-works', label: 'Как это работает' },
    { path: '/rules', label: 'Правила' },
    { path: '/community', label: 'Сообщество' },
    { path: '/news', label: 'Новости' },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-strong border-b border-blood-600/50'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              className="text-2xl font-display font-bold tracking-tight"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-white via-white to-blood-400 bg-clip-text text-transparent">
                FunTime
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-blood-400'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blood-500 glow-red"
                    layoutId="navbar-indicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/shop"
              className="p-2 rounded-lg glass hover:bg-dark-300/50 transition-all group"
            >
              <ShoppingBag className="w-5 h-5 text-white/80 group-hover:text-blood-400 transition-colors" />
            </Link>
            <Link
              to="/account"
              className="px-4 py-2 rounded-lg glass hover:bg-dark-300/50 transition-all text-sm font-medium text-white/80 hover:text-white"
            >
              <User className="w-4 h-4 inline mr-2" />
              Аккаунт
            </Link>
            <Link
              to="/account"
              className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-blood-600 to-crimson-600 hover:from-blood-500 hover:to-crimson-500 text-sm font-semibold transition-all glow-red hover:glow-red-strong"
            >
              <LogIn className="w-4 h-4 inline mr-2" />
              Войти
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg glass hover:bg-dark-300/50 transition-all"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong border-t border-blood-600/50"
          >
            <div className="container mx-auto px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-blood-400'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-dark-400 space-y-3">
                <Link
                  to="/shop"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center py-2 text-base font-medium text-white/80 hover:text-white"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Магазин
                </Link>
                <Link
                  to="/account"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center py-2 text-base font-medium text-white/80 hover:text-white"
                >
                  <User className="w-5 h-5 mr-2" />
                  Аккаунт
                </Link>
                <Link
                  to="/account"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blood-600 to-crimson-600 hover:from-blood-500 hover:to-crimson-500 text-center font-semibold transition-all glow-red hover:glow-red-strong"
                >
                  Войти
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
