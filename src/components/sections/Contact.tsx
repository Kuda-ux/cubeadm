'use client'

import { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  User,
  Building2,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Globe,
  Headphones
} from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const { error } = await supabase.from('contacts').insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        company: formData.company || null,
        message: `Service: ${formData.service}\n\n${formData.message}`,
      })

      if (error) throw error

      // Send confirmation email to the user
      try {
        await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            service: formData.service,
          }),
        })
      } catch (emailError) {
        console.error('Failed to send confirmation email:', emailError)
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactCards = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'info@cubeadm.co.zw',
      href: 'mailto:info@cubeadm.co.zw',
      color: 'from-[#005CFF] to-[#00D4FF]',
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+263 78 266 7295',
      href: 'tel:+263782667295',
      color: 'from-[#00D4FF] to-[#005CFF]',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'Harare, Zimbabwe',
      href: '#',
      color: 'from-[#005CFF] to-[#0070FF]',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon - Fri: 8AM - 5PM',
      href: '#',
      color: 'from-[#0070FF] to-[#00D4FF]',
    },
  ]

  const services = [
    { value: 'training', label: 'Technology Training' },
    { value: 'it-solutions', label: 'IT Solutions' },
    { value: 'cybersecurity', label: 'Cybersecurity Services' },
    { value: 'cloud', label: 'Cloud Services' },
    { value: 'managed-it', label: 'Managed IT Services' },
    { value: 'consulting', label: 'IT Consulting' },
    { value: 'other', label: 'Other' },
  ]

  return (
    <section id="contact" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#01124b] via-[#020c2d] to-[#01124b]" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#005CFF]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00D4FF]/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#005CFF]/5 rounded-full blur-[200px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,92,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,92,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#005CFF]/10 border border-[#005CFF]/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#00D4FF]" />
            <span className="text-[#00D4FF] font-medium text-sm">Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let&apos;s Build Something
            <span className="block bg-gradient-to-r from-[#005CFF] to-[#00D4FF] bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to transform your business with cutting-edge technology? 
            Our team is here to help you every step of the way.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {contactCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-[#005CFF]/30 transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <card.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-400 text-sm mb-1">{card.title}</p>
              <p className="text-white font-semibold group-hover:text-[#00D4FF] transition-colors">{card.value}</p>
            </a>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Side - Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Why Contact Us */}
            <div className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose CubeADM?</h3>
              <div className="space-y-5">
                {[
                  { icon: Globe, text: 'World-class technology training' },
                  { icon: Headphones, text: '24/7 dedicated support' },
                  { icon: CheckCircle, text: '98% client satisfaction rate' },
                  { icon: Sparkles, text: 'Industry-certified instructors' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#005CFF]/20 rounded-xl flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[#00D4FF]" />
                    </div>
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Response */}
            <div className="p-8 bg-gradient-to-br from-[#005CFF]/20 to-[#00D4FF]/10 backdrop-blur-sm border border-[#005CFF]/20 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 font-medium">We respond within 24 hours</span>
              </div>
              <p className="text-gray-300 text-sm">
                Our team is committed to providing you with prompt and professional assistance. 
                Send us a message and we&apos;ll get back to you as soon as possible.
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-3">
            <div className="relative p-8 md:p-10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
              {/* Form Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-[#005CFF] to-[#00D4FF] rounded-2xl flex items-center justify-center shadow-lg shadow-[#005CFF]/30">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Send Us a Message</h2>
                  <p className="text-gray-400 text-sm">Fill out the form below and we&apos;ll be in touch</p>
                </div>
              </div>

              {submitStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-gray-400 mb-6">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="px-6 py-3 bg-[#005CFF] text-white font-semibold rounded-xl hover:bg-[#0050DD] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name <span className="text-[#00D4FF]">*</span>
                      </label>
                      <div className="relative">
                        <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'name' ? 'text-[#00D4FF]' : 'text-gray-500'}`} />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                          placeholder="John Doe"
                          className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF] focus:ring-2 focus:ring-[#005CFF]/20 transition-all"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address <span className="text-[#00D4FF]">*</span>
                      </label>
                      <div className="relative">
                        <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'email' ? 'text-[#00D4FF]' : 'text-gray-500'}`} />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          placeholder="john@example.com"
                          className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF] focus:ring-2 focus:ring-[#005CFF]/20 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone & Company Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'phone' ? 'text-[#00D4FF]' : 'text-gray-500'}`} />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="+263 78 266 7295"
                          className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF] focus:ring-2 focus:ring-[#005CFF]/20 transition-all"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company
                      </label>
                      <div className="relative">
                        <Building2 className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'company' ? 'text-[#00D4FF]' : 'text-gray-500'}`} />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('company')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Your Company"
                          className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#005CFF] focus:ring-2 focus:ring-[#005CFF]/20 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      What service are you interested in? <span className="text-[#00D4FF]">*</span>
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {services.map((service) => (
                        <label
                          key={service.value}
                          className={`relative flex items-center justify-center p-3 rounded-xl border cursor-pointer transition-all ${
                            formData.service === service.value
                              ? 'bg-[#005CFF]/20 border-[#005CFF] text-white'
                              : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:bg-white/10'
                          }`}
                        >
                          <input
                            type="radio"
                            name="service"
                            value={service.value}
                            checked={formData.service === service.value}
                            onChange={handleChange}
                            required
                            className="sr-only"
                          />
                          <span className="text-sm font-medium text-center">{service.label}</span>
                          {formData.service === service.value && (
                            <CheckCircle className="absolute top-1 right-1 w-4 h-4 text-[#00D4FF]" />
                          )}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Message <span className="text-[#00D4FF]">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={4}
                      placeholder="Tell us about your project or training needs..."
                      className={`w-full px-4 py-4 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all resize-none ${
                        focusedField === 'message' ? 'border-[#005CFF] ring-[#005CFF]/20' : 'border-white/10'
                      }`}
                    />
                  </div>

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <p className="text-red-400">Something went wrong. Please try again.</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-[#005CFF] to-[#00D4FF] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#005CFF]/30 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
