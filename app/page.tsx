"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { BookOpen, MessageSquare, Sparkles, Brain, Menu, X, ChevronRight, NotebookIcon as Lotus } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const featuresRef = useRef<HTMLElement>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleGetStarted = () => {
    router.push("/chat")
  }

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen flex flex-col divine-gradient heavenly-glow font-helvetica">
      <div className="divine-particles"></div>

      {/* Navbar */}
      <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center z-20 bg-opacity-80 backdrop-blur-sm">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
              <Lotus className="h-6 w-6 text-accent" />
            </div>
            <span className="text-3xl font-bold text-white">
              <span className="text-white glow-text">Gita</span>GPT
            </span>
          </div>
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          <button
            onClick={scrollToFeatures}
            className="text-white hover:text-white transition-colors font-bold text-lg text-high-contrast"
          >
            Features
          </button>
          <Link
            href="/about"
            className="text-white hover:text-white transition-colors font-bold text-lg text-high-contrast"
          >
            About
          </Link>
          <Button
            className="bg-white hover:bg-white/90 font-bold text-lg px-6 py-6 glow-button text-black"
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-primary/30 z-30 py-6 px-6">
          <div className="flex flex-col space-y-6">
            <button
              onClick={() => {
                scrollToFeatures()
                setIsMenuOpen(false)
              }}
              className="text-white/90 hover:text-white transition-colors py-2 font-bold text-xl text-left"
            >
              Features
            </button>
            <Link href="/about" className="text-white/90 hover:text-white transition-colors py-2 font-bold text-xl">
              About
            </Link>
            <Button
              className="bg-white hover:bg-white/90 w-full font-bold text-xl py-6 glow-button text-black"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col items-center justify-center text-center px-6 py-24 md:py-32 celestial-bg overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background opacity-70"></div>
        </div>

        <motion.div
          className="relative z-10 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 glow-text tracking-tight text-high-contrast">
            Bhagavad Gita GPT
            <span className="block text-3xl md:text-4xl mt-4 text-accent accent-glow-text font-bold text-accent-high-contrast">
              Divine Wisdom, Instantly.
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-bold text-high-contrast">
            Ask questions, seek guidance, and explore the teachings of the Gita through AI.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              className="bg-primary hover:bg-primary/90 text-white-600 text-xl px-10 py-7 rounded-full glow-button font-bold onClick={handleGetStarted}"
              onClick={handleGetStarted}
            >
              Get Started
              <ChevronRight className="ml-2 h-6 w-6" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} id="features" className="py-24 px-6 md:px-12 bg-background relative overflow-hidden">
        <div className="divine-particles"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-high-contrast">
              <span className="text-accent accent-glow-text text-accent-high-contrast">Divine</span> Features
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto text-xl font-bold">
              Explore the ancient wisdom of the Bhagavad Gita through our powerful AI assistant.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-12 w-12 text-accent" />,
                title: "Verse Exploration",
                description:
                  "Search and explore all 700 verses of the Bhagavad Gita with detailed explanations and context.",
              },
              {
                icon: <MessageSquare className="h-12 w-12 text-accent" />,
                title: "Divine Conversations",
                description:
                  "Engage in meaningful conversations about spiritual concepts and receive guidance based on Gita's teachings.",
              },
              {
                icon: <Sparkles className="h-12 w-12 text-accent" />,
                title: "Personalized Wisdom",
                description:
                  "Receive personalized insights and practical applications of the Gita's wisdom for your daily life.",
              },
              {
                icon: <Brain className="h-12 w-12 text-accent" />,
                title: "Deep Insights",
                description:
                  "Gain profound understanding of complex philosophical concepts explained in simple, accessible language.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card rounded-xl p-8 h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/90 text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Preview Section */}
      <section className="py-24 px-6 md:px-12 divine-gradient relative overflow-hidden">
        <div className="divine-particles"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center mix-blend-overlay"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-high-contrast">
                Experience{" "}
                <span className="text-accent accent-glow-text text-accent-high-contrast">Divine Guidance</span> Through
                AI
              </h2>
              <p className="text-white/90 mb-10 text-xl font-bold">
                Our AI assistant combines the timeless wisdom of the Bhagavad Gita with modern artificial intelligence
                to provide you with spiritual guidance, philosophical insights, and practical wisdom for navigating
                life's challenges.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary flex-shrink-0 mt-1"></div>
                  <p className="text-white/90 text-lg font-bold">Ask questions about specific verses or concepts</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary flex-shrink-0 mt-1"></div>
                  <p className="text-white/90 text-lg font-bold">Receive guidance for personal challenges</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary flex-shrink-0 mt-1"></div>
                  <p className="text-white/90 text-lg font-bold">Explore the deeper meaning behind the teachings</p>
                </div>
              </div>

              <div className="mt-12">
                <Button
                  className="bg-white hover:bg-white/90 text-xl px-10 py-7 rounded-full glow-button font-bold text-black"
                  onClick={handleGetStarted}
                >
                  Start Your Spiritual Journey
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-background/30 backdrop-blur-md rounded-2xl border border-primary/20 p-6 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-4 w-4 rounded-full bg-accent"></div>
                    <span className="text-lg text-white/90 font-bold">GitaGPT Assistant</span>
                  </div>
                  <Sparkles className="h-6 w-6 text-accent" />
                </div>

                <div className="space-y-6 mb-6">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary flex-shrink-0"></div>
                    <div className="bg-muted rounded-2xl rounded-tl-none p-4 text-lg max-w-[80%] font-bold">
                      What does the Bhagavad Gita say about finding purpose in life?
                    </div>
                  </div>

                  <div className="flex gap-4 justify-end">
                    <div className="bg-primary/20 rounded-2xl rounded-tr-none p-4 text-lg max-w-[80%]">
                      The Bhagavad Gita teaches that true purpose is found in discovering your dharma (duty) and
                      performing it with detachment to the fruits of your actions. In Chapter 2, verse 47, Lord Krishna
                      says: "You have a right to perform your prescribed duties, but you are not entitled to the fruits
                      of your actions."
                    </div>
                    <div className="h-10 w-10 rounded-full bg-accent flex-shrink-0 flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-accent-foreground" />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ask about the Bhagavad Gita..."
                    className="w-full bg-background/50 border border-primary/20 rounded-full py-4 px-6 pr-12 text-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-accent">
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-background text-center relative overflow-hidden">
        <div className="divine-particles"></div>
        <motion.div
          className="max-w-3xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-high-contrast">
            Begin Your <span className="text-accent accent-glow-text text-accent-high-contrast">Spiritual Journey</span>{" "}
            Today
          </h2>
          <p className="text-white/90 mb-12 text-xl font-bold">
            Unlock the timeless wisdom of the Bhagavad Gita and discover how its teachings can transform your life in
            the modern world.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              className="bg-primary hover:bg-primary/90 text-white-600 text-xl px-12 py-7 rounded-full glow-button font-bold"
              onClick={handleGetStarted}
            >
              Start Now
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 bg-black/80 border-t border-primary/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <Lotus className="h-5 w-5 text-accent" />
                </div>
                <span className="text-2xl font-bold text-white">
                  <span className="text-white glow-text">Gita</span>GPT
                </span>
              </div>
              <p className="text-white/80 mt-2 text-lg font-bold">Divine wisdom for the modern age</p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <Link href="#" className="text-white/80 hover:text-white transition-colors font-bold text-lg">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors font-bold text-lg">
                Terms of Service
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors font-bold text-lg">
                Contact
              </Link>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 text-center text-white/80 text-lg">
            © {new Date().getFullYear()} Bhagavad Gita GPT. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

