"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Sparkles, NotebookIcon as Lotus } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col divine-gradient heavenly-glow font-helvetica">
      <div className="divine-particles"></div>

      {/* Header */}
      <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center z-20 bg-opacity-80 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
          </Link>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
              <Lotus className="h-5 w-5 text-accent" />
            </div>
            <span className="text-xl font-bold text-white">
              <span className="text-white glow-text">Gita</span>GPT
            </span>
          </div>
        </div>
      </nav>

      {/* About Content */}
      <div className="flex-1 container mx-auto px-6 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 glow-text">About Bhagavad Gita GPT</h1>
            <p className="text-xl text-white/80">Divine wisdom for the modern age</p>
          </div>

          <div className="bg-background/30 backdrop-blur-md rounded-2xl border border-primary/20 p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-accent" />
              Our Mission
            </h2>
            <p className="text-white/80 mb-6">
              Bhagavad Gita GPT was created to make the timeless wisdom of the Bhagavad Gita accessible to everyone in
              today's fast-paced world. We believe that the profound teachings of Lord Krishna can provide guidance,
              clarity, and peace to individuals navigating the complexities of modern life.
            </p>
            <p className="text-white/80">
              Our AI assistant combines advanced artificial intelligence with the spiritual depth of the Bhagavad Gita,
              offering personalized insights and practical wisdom drawn directly from this sacred text.
            </p>
          </div>

          <div className="bg-background/30 backdrop-blur-md rounded-2xl border border-primary/20 p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-accent" />
              The Bhagavad Gita
            </h2>
            <p className="text-white/80 mb-6">
              The Bhagavad Gita, often referred to as the "Song of God," is a 700-verse Hindu scripture that is part of
              the epic Mahabharata. It contains a conversation between Prince Arjuna and Lord Krishna on a variety of
              theological and philosophical issues.
            </p>
            <p className="text-white/80">
              Composed approximately 2,000 years ago, the Gita has been a source of inspiration and guidance for
              millions of people around the world. Its teachings on duty, righteousness, devotion, and the nature of
              existence continue to resonate across cultures and generations.
            </p>
          </div>

          <div className="bg-background/30 backdrop-blur-md rounded-2xl border border-primary/20 p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-accent" />
              How It Works
            </h2>
            <p className="text-white/80 mb-6">
              Bhagavad Gita GPT uses advanced AI technology to understand your questions and concerns, then provides
              responses based on the teachings found in the Bhagavad Gita. Each response includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Practical wisdom applicable to your specific situation</li>
              <li>References to relevant verses from the Bhagavad Gita</li>
              <li>Explanations that connect ancient teachings to modern life</li>
              <li>Compassionate guidance in the voice of Lord Krishna</li>
            </ul>
          </div>

          <div className="text-center mt-12">
            <Link href="/chat" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-4 rounded-full glow-button font-bold"
              >
                Begin Your Spiritual Journey
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 bg-black/80 border-t border-primary/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Bhagavad Gita GPT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

