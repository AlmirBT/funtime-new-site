import { Link } from 'react-router-dom'
import { Github, Twitter, Mail, Shield, Award } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    server: [
      { path: '/about', label: 'О сервере' },
      { path: '/stats', label: 'Статистика' },
      { path: '/how-it-works', label: 'Как это работает' },
      { path: '/rules', label: 'Правила' },
    ],
    community: [
      { path: '/community', label: 'Сообщество' },
      { path: '/news', label: 'Новости' },
      { path: '/support', label: 'Поддержка' },
    ],
    shop: [
      { path: '/shop', label: 'Магазин' },
      { path: '/account', label: 'Аккаунт' },
    ],
  }

  return (
    <footer className="relative mt-20 border-t border-dark-400/50 bg-dark-100/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <div className="text-2xl font-display font-bold">
                <span className="bg-gradient-to-r from-white via-white to-blood-400 bg-clip-text text-transparent">
                  FunTime
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm mb-4 max-w-md">
              Самый мощный Minecraft сервер в СНГ. Версии 1.16.5 – 1.21.8.
              Сервер №1 по онлайну, качеству и репутации.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-white/60">
                <Shield className="w-4 h-4 text-blood-500" />
                <span>Защищено</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-white/60">
                <Award className="w-4 h-4 text-blood-500" />
                <span>#1 СНГ</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Сервер</h3>
            <ul className="space-y-2">
              {footerLinks.server.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-blood-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Сообщество</h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-blood-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Магазин</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-blood-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-dark-400/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/40 mb-4 md:mb-0">
            © 2024 FunTime. Все права защищены.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="p-2 rounded-lg glass hover:bg-dark-300/50 transition-all"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4 text-white/60 hover:text-blood-400 transition-colors" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg glass hover:bg-dark-300/50 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-white/60 hover:text-blood-400 transition-colors" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg glass hover:bg-dark-300/50 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-white/60 hover:text-blood-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
