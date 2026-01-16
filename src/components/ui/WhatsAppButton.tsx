'use client'

import { useState, useEffect } from 'react'
import { X, MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  const phoneNumber = '263782667295'
  const defaultMessage = 'Hello CubeADM! I would like to inquire about your IT training and services.'

  useEffect(() => {
    // Show button after 2 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    // Auto-open chat popup after 4 seconds
    const openTimer = setTimeout(() => {
      setIsOpen(true)
    }, 4000)

    // Show tooltip after 6 seconds if chat is closed
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true)
    }, 6000)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(openTimer)
      clearTimeout(tooltipTimer)
    }
  }, [])

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(url, '_blank')
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Chat Popup */}
      {isOpen && (
        <div className="animate-in slide-in-from-bottom-5 fade-in duration-300 w-[340px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] p-4 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#25D366]" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">CubeADM Support</h3>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                  <span className="text-white/90 text-sm">Online | Replies instantly</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#ECE5DD] min-h-[140px]">
            <div className="bg-white rounded-lg p-3 shadow-sm max-w-[85%] relative">
              <div className="absolute -left-2 top-3 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-white border-b-8 border-b-transparent"></div>
              <p className="text-gray-800 text-sm leading-relaxed">
                👋 Hi there! Welcome to <strong>CubeADM</strong>. How can we help you today?
              </p>
              <p className="text-gray-600 text-sm mt-2">
                We offer world-class IT training and solutions. Click below to chat with us!
              </p>
              <span className="text-[10px] text-gray-400 float-right mt-1">Just now</span>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 bg-white border-t border-gray-100">
            <button
              onClick={handleWhatsAppClick}
              className="w-full py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Start Chat
            </button>
            <p className="text-center text-xs text-gray-400 mt-2">
              Powered by WhatsApp
            </p>
          </div>
        </div>
      )}

      {/* Tooltip */}
      {!isOpen && showTooltip && (
        <div className="animate-in fade-in slide-in-from-right-2 duration-300 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100 mr-2">
          <p className="text-sm text-gray-700 font-medium">Need help? Chat with us! 💬</p>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full shadow-lg hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'scale-90' : 'hover:scale-110'
        }`}
      >
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse opacity-40"></span>
        
        {/* Icon */}
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-white relative z-10" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>

        {/* Notification Badge */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce">
            1
          </span>
        )}
      </button>
    </div>
  )
}
