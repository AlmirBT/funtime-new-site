import { motion } from 'framer-motion'
import { User, ShoppingBag, Award, Settings, Shield, LogIn } from 'lucide-react'
import { useState } from 'react'

export default function Account() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (!isLoggedIn) {
    return (
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Account <span className="text-blood-400">Login</span>
            </h1>
            <p className="text-white/70">Sign in to access your account</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-strong p-8 rounded-2xl"
          >
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-white/80">Username</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-dark-200 border border-dark-400 text-white focus:outline-none focus:border-blood-600 transition-colors"
                  placeholder="Enter your username"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-white/80">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 rounded-lg bg-dark-200 border border-dark-400 text-white focus:outline-none focus:border-blood-600 transition-colors"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <button
              onClick={() => setIsLoggedIn(true)}
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blood-600 to-crimson-600 hover:from-blood-500 hover:to-crimson-500 text-lg font-semibold transition-all glow-red hover:glow-red-strong flex items-center justify-center"
            >
              <LogIn className="w-5 h-5 mr-2" />
              Sign In
            </button>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            My <span className="text-blood-400">Account</span>
          </h1>
          <p className="text-white/70">Manage your account settings and view your information</p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-strong p-8 rounded-2xl mb-8"
        >
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blood-600 to-crimson-600 flex items-center justify-center glow-red">
              <User className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-1">PlayerName</h2>
              <div className="text-blood-400 font-semibold">Elite Tier</div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-sm text-white/60 mb-1">Rank</div>
              <div className="text-lg font-semibold">Elite</div>
            </div>
            <div>
              <div className="text-sm text-white/60 mb-1">Playtime</div>
              <div className="text-lg font-semibold">1,234h</div>
            </div>
            <div>
              <div className="text-sm text-white/60 mb-1">Joined</div>
              <div className="text-lg font-semibold">Jan 2023</div>
            </div>
            <div>
              <div className="text-sm text-white/60 mb-1">Status</div>
              <div className="text-lg font-semibold text-blood-400">Online</div>
            </div>
          </div>
        </motion.div>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: ShoppingBag, title: 'Purchases', description: 'View your donation history' },
            { icon: Award, title: 'Achievements', description: 'Your unlocked achievements' },
            { icon: Settings, title: 'Settings', description: 'Account preferences' },
            { icon: Shield, title: 'Security', description: 'Password and sessions' },
          ].map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-strong p-6 rounded-2xl hover:bg-dark-300/50 transition-all cursor-pointer group"
            >
              <section.icon className="w-8 h-8 text-blood-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">{section.title}</h3>
              <p className="text-white/60 text-sm">{section.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
