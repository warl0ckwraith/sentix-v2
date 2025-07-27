import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <main 
      id="main-content"
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 overflow-hidden"
      role="banner"
    >
      {/* Background Effects */}
      <div 
        className="absolute inset-0 opacity-20" 
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.3) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(128, 0, 128, 0.3) 0%, transparent 50%)`
        }}
      />
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-5" 
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32 max-w-7xl">
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[calc(100vh-8rem)] lg:min-h-[75vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Small badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white/90">
                🔮 Powered by Advanced AI & LLM Technology
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-heading leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="text-white block">Automate Network</span>
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent block">
                Penetration
              </span>
              <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-500 bg-clip-text text-transparent block">
                Testing
              </span>
            </motion.h1>
            
            {/* Subheading */}
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-2xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Create intelligent pentesting workflows that automate reconnaissance, 
              vulnerability analysis, and reporting using cutting-edge LLM technology.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300">
                Watch Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 lg:pt-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              <motion.div 
                className="text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">50K+</div>
                <div className="text-white/70 text-sm">Security Tests Automated</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-white/70 text-sm">Accuracy Rate</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.6 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">10x</div>
                <div className="text-white/70 text-sm">Faster Than Manual Testing</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Product UI Preview */}
          <motion.div 
            className="relative"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8 min-h-[400px] sm:min-h-[500px] shadow-2xl">
              {/* Mock terminal/dashboard */}
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-white/60 text-sm">Sentix AI Dashboard</div>
                </div>

                {/* Mock content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <span className="text-green-400 text-sm">✓ Port Scan Complete</span>
                    <span className="text-white/60 text-xs">23 open ports found</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-orange-500/20 border border-orange-500/30 rounded-lg">
                    <span className="text-orange-400 text-sm">⚡ Vulnerability Analysis</span>
                    <span className="text-white/60 text-xs">Running...</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                    <span className="text-blue-400 text-sm">🔍 SQL Injection Test</span>
                    <span className="text-white/60 text-xs">3 vulnerabilities</span>
                  </div>

                  <div className="mt-6 p-4 bg-white/5 rounded-lg">
                    <div className="text-white/80 text-sm mb-2">Risk Assessment</div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full w-3/4"></div>
                    </div>
                    <div className="text-white/60 text-xs mt-1">High Risk: 74%</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full opacity-20"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full opacity-10"
              animate={{ 
                y: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};