'use client'
import { useState, useEffect } from 'react'
import { X, Send, User, MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '917240247809' // +91 72402 47809
const WHATSAPP_MESSAGE = 'Hi! I want to know more about Kotibox services.'

// â”€â”€â”€ Chatbot â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const botReplies: Record<string, string> = {
  default: "Hi! I'm Kotibot ðŸ¤– How can I help you today?",
  services: "We offer Mobile App Development, Web Development, AI Solutions, Digital Marketing & more. Which interests you?",
  pricing: "Our pricing depends on project scope. Let me connect you with our team for a free estimate!",
  contact: "You can reach us at business@kotiboxglobaltech.com or call +91 72402-47809.",
  portfolio: "We've delivered 2000+ projects across 45+ countries. Visit our Portfolio page to see case studies!",
  ai: "We're a Google-certified AI Agency. We build AI chatbots, automation, ML models & generative AI solutions.",
}

const quickReplies = [
  { label: 'Our Services', key: 'services' },
  { label: 'Pricing Info', key: 'pricing' },
  { label: 'AI Solutions', key: 'ai' },
  { label: 'Contact Us', key: 'contact' },
]

type Message = { from: 'bot' | 'user'; text: string; time: string }

function getTime() {
  return new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
}

function ChatbotWindow({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: botReplies.default, time: getTime() },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)

  const sendMessage = (text: string) => {
    if (!text.trim()) return
    const userMsg: Message = { from: 'user', text, time: getTime() }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      const lower = text.toLowerCase()
      let reply = "I'll connect you with our team for a detailed answer. Would you like to leave your details?"
      if (lower.includes('service') || lower.includes('what do you')) reply = botReplies.services
      else if (lower.includes('price') || lower.includes('cost') || lower.includes('how much')) reply = botReplies.pricing
      else if (lower.includes('contact') || lower.includes('email') || lower.includes('phone')) reply = botReplies.contact
      else if (lower.includes('portfolio') || lower.includes('work') || lower.includes('project')) reply = botReplies.portfolio
      else if (lower.includes('ai') || lower.includes('artificial') || lower.includes('chatbot')) reply = botReplies.ai

      setMessages((prev) => [...prev, { from: 'bot', text: reply, time: getTime() }])
      setTyping(false)
    }, 1000)
  }

  return (
    <div className="fixed bottom-24 right-5 z-[150] w-[340px] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-100"
      style={{ maxHeight: '480px' }}
    >
      {/* Header */}
      <div className="bg-[#0a1628] px-4 py-3.5 flex items-center gap-3 flex-shrink-0">
        <div className="w-9 h-9 rounded-full bg-[#f5a623] flex items-center justify-center font-bold text-[#0a1628] text-sm flex-shrink-0">
          KB
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-sm leading-none">Kotibot</p>
          <p className="text-white/50 text-xs mt-0.5 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
            Online â€” replies instantly
          </p>
        </div>
        <button onClick={onClose} className="text-white/50 hover:text-white transition-colors">
          <X size={18} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto bg-gray-50 px-4 py-4 flex flex-col gap-3" style={{ minHeight: 0 }}>
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.from === 'bot' && (
              <div className="w-6 h-6 rounded-full bg-[#0a1628] flex items-center justify-center text-[#f5a623] text-[9px] font-bold flex-shrink-0 mt-auto mr-2">
                KB
              </div>
            )}
            <div className="max-w-[220px]">
              <div
                className={`px-3.5 py-2.5 rounded-2xl text-sm leading-snug ${
                  msg.from === 'user'
                    ? 'bg-[#0a1628] text-white rounded-br-sm'
                    : 'bg-white text-gray-700 shadow-sm border border-gray-100 rounded-bl-sm'
                }`}
              >
                {msg.text}
              </div>
              <p className={`text-[10px] text-gray-400 mt-1 ${msg.from === 'user' ? 'text-right' : 'text-left'}`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex justify-start gap-2">
            <div className="w-6 h-6 rounded-full bg-[#0a1628] flex items-center justify-center text-[#f5a623] text-[9px] font-bold flex-shrink-0 mt-auto">KB</div>
            <div className="bg-white border border-gray-100 shadow-sm px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1">
              {[0, 1, 2].map((i) => (
                <span key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Quick replies */}
      <div className="bg-gray-50 px-3 py-2 flex gap-1.5 overflow-x-auto flex-shrink-0 border-t border-gray-100 [&::-webkit-scrollbar]:hidden">
        {quickReplies.map((q) => (
          <button
            key={q.key}
            onClick={() => sendMessage(q.label)}
            className="whitespace-nowrap text-[11px] font-semibold px-3 py-1.5 rounded-full border border-[#f5a623]/40 text-[#f5a623] hover:bg-[#f5a623] hover:text-white transition-all flex-shrink-0"
          >
            {q.label}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="bg-white px-3 py-2.5 flex items-center gap-2 border-t border-gray-100 flex-shrink-0">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
          placeholder="Type a message..."
          className="flex-1 text-sm text-gray-700 placeholder:text-gray-400 outline-none bg-transparent"
        />
        <button
          onClick={() => sendMessage(input)}
          className="w-8 h-8 rounded-full bg-[#f5a623] hover:bg-[#e8950f] flex items-center justify-center transition-colors flex-shrink-0"
        >
          <Send size={14} className="text-white" />
        </button>
      </div>
    </div>
  )
}

// â”€â”€â”€ Main FloatingButtons â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export default function FloatingButtons() {
  const [chatOpen, setChatOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const [pulse, setPulse] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 800)
    const p = setTimeout(() => setPulse(false), 5000)
    return () => { clearTimeout(t); clearTimeout(p) }
  }, [])

  return (
    <>
      {/* Chatbot window */}
      {chatOpen && <ChatbotWindow onClose={() => setChatOpen(false)} />}

      {/* WhatsApp â€” bottom left */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-5 z-[140] group"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s',
        }}
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse ring */}
        {pulse && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
        )}
        <div className="relative w-14 h-14 rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.45)] flex items-center justify-center hover:scale-110 hover:shadow-[0_6px_28px_rgba(37,211,102,0.6)] transition-all duration-300">
          {/* WhatsApp SVG */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-16 left-0 bg-[#0a1628] text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 pointer-events-none shadow-lg">
          Chat on WhatsApp
          <div className="absolute -bottom-1.5 left-4 w-3 h-3 bg-[#0a1628] rotate-45" />
        </div>
      </a>

      {/* Chatbot â€” bottom right */}
      <button
        onClick={() => setChatOpen((prev) => !prev)}
        className="fixed bottom-6 right-5 z-[140] group"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.4s ease 0.2s, transform 0.4s ease 0.2s',
        }}
        aria-label="Open chatbot"
      >
        {/* Pulse ring */}
        {pulse && !chatOpen && (
          <span className="absolute inset-0 rounded-full bg-[#f5a623] animate-ping opacity-35" />
        )}
        <div className={`relative w-14 h-14 rounded-full shadow-[0_4px_20px_rgba(245,166,35,0.4)] flex items-center justify-center hover:scale-110 hover:shadow-[0_6px_28px_rgba(245,166,35,0.55)] transition-all duration-300 ${chatOpen ? 'bg-[#0a1628]' : 'bg-[#f5a623]'}`}>
          {chatOpen
            ? <X size={22} className="text-white" />
            : <MessageCircle size={24} className="text-[#0a1628]" strokeWidth={2.5} />
          }
        </div>

        {/* Tooltip */}
        {!chatOpen && (
          <div className="absolute bottom-16 right-0 bg-[#0a1628] text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 pointer-events-none shadow-lg">
            Chat with us
            <div className="absolute -bottom-1.5 right-4 w-3 h-3 bg-[#0a1628] rotate-45" />
          </div>
        )}
      </button>
    </>
  )
}
