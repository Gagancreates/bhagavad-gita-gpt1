"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, ArrowLeft, Sparkles, NotebookIcon as Lotus, Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

// Message type definition
interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Namaste 🙏 I am your Bhagavad Gita guide. How may I assist you on your spiritual journey today?",
      role: "assistant",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Generate a unique ID for the message
    const userMessageId = Date.now().toString()

    // Add user message to the chat
    const userMessage: Message = {
      id: userMessageId,
      content: input,
      role: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Call the API with the message and history
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          history: messages,
        }),
      })

      if (!response.ok) {
        throw new Error("API request failed")
      }

      const data = await response.json()
      setMessages((prev) => [...prev, data.message])
      setIsLoading(false)
    } catch (error) {
      console.error("Error sending message:", error)
      setIsLoading(false)

      // Add an error message
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          content: "I apologize, but I'm unable to respond at the moment. Please try again later.",
          role: "assistant",
          timestamp: new Date(),
        },
      ])
    }
  }

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
          </Link>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center">
              <Lotus className="h-5 w-5 text-purple-400" />
            </div>
            <span className="text-xl font-bold text-white">
              <span className="text-white glow-text">Gita</span>GPT
            </span>
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/about">
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              About
            </Button>
          </Link>
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white font-bold">U</span>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 z-30 py-4 px-6"
          >
            <div className="flex flex-col space-y-4">
              <Link href="/about" className="text-gray-400 hover:text-white py-2 font-bold">
                About
              </Link>
              <div className="flex items-center gap-3 py-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <span className="text-white font-bold">U</span>
                </div>
                <span className="text-gray-300">User</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} items-start gap-3`}
            >
              {message.role === "assistant" && (
                <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-purple-500/50">
                  <img src="/images/krishna.jpg" alt="Krishna" className="h-full w-full object-cover" />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-2xl p-4 ${
                  message.role === "user"
                    ? "bg-purple-600 text-white rounded-tr-none"
                    : "bg-gray-800 text-gray-100 rounded-tl-none"
                }`}
              >
                <p className="text-sm md:text-base">{message.content}</p>
                <div className={`text-xs mt-2 ${message.role === "user" ? "text-purple-200" : "text-gray-400"}`}>
                  {/* {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} */}
                </div>
              </div>
              {message.role === "user" && (
                <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-purple-500/50">
                  <img src="/images/user.jpg" alt="User" className="h-full w-full object-cover" />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start items-start gap-3"
          >
            <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-purple-500/50">
              <img src="/placeholder.svg?height=40&width=40" alt="Krishna" className="h-full w-full object-cover" />
            </div>
            <div className="bg-gray-800 text-gray-100 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
              <div className="flex space-x-2">
                <div className="h-2 w-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <div
                  className="h-2 w-2 bg-purple-500 rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                />
                <div
                  className="h-2 w-2 bg-purple-500 rounded-full animate-bounce"
                  style={{ animationDelay: "600ms" }}
                />
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-800 bg-gray-900/80 backdrop-blur-sm p-4">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto relative">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about anything and get advice..."
            className="w-full bg-gray-800 border-gray-700 rounded-xl pr-12 min-h-[60px] max-h-[200px] text-white placeholder:text-gray-400 focus:border-purple-500"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSubmit(e)
              }
            }}
          />
          <Button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-3 bottom-3 p-2 h-auto rounded-lg bg-purple-600 hover:bg-purple-700 text-white"
          >
            <Send className="h-5 w-5" />
          </Button>
        </form>
        <div className="max-w-4xl mx-auto mt-2 text-xs text-gray-500 flex items-center justify-center">
          <Sparkles className="h-3 w-3 mr-1" />
          <span>Powered by divine wisdom and artificial intelligence</span>
        </div>
      </div>
    </div>
  )
}

