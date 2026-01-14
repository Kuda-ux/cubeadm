import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Cpu, Award, Clock, Users, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI & Automation Training Zimbabwe | Machine Learning, ChatGPT | CubeADM',
  description: 'Professional AI and automation training in Zimbabwe. Learn machine learning, ChatGPT, process automation, Python for AI, and data science. Future-proof your career with CubeADM Harare!',
  keywords: ['AI Training Zimbabwe', 'Machine Learning Course Zimbabwe', 'Automation Training Harare', 'ChatGPT Training Zimbabwe', 'Artificial Intelligence Course Zimbabwe', 'Data Science Training Zimbabwe', 'Python AI Zimbabwe', 'RPA Training Zimbabwe'],
  openGraph: {
    title: 'AI & Automation Training Zimbabwe | CubeADM',
    description: 'Professional AI and machine learning training in Zimbabwe.',
    url: 'https://cubeadm.co.zw/training/ai-automation',
    type: 'website',
  },
  alternates: {
    canonical: 'https://cubeadm.co.zw/training/ai-automation',
  },
}

export default function AIAutomationTrainingPage() {
  return (
    <div className="pt-24">
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#005CFF] font-bold text-sm uppercase tracking-wider">Training</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">AI & Automation</h1>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Explore the future of technology with CubeADM&apos;s AI and automation training. 
                Learn to leverage AI tools and automate business processes.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5 text-[#005CFF]" />
                  <span className="font-semibold">8 Weeks</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-5 h-5 text-[#005CFF]" />
                  <span className="font-semibold">90+ Graduates</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Award className="w-5 h-5 text-[#005CFF]" />
                  <span className="font-semibold">Hands-on Projects</span>
                </div>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#005CFF] text-white font-bold rounded-full hover:bg-[#0050DD] transition-colors">
                Enroll Now <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <Image src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80" alt="AI Training" width={600} height={400} className="rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What You&apos;ll Learn</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['AI Fundamentals', 'Machine Learning Basics', 'Process Automation', 'AI Tools & Platforms', 'Business Applications', 'Data Analysis'].map((topic) => (
              <div key={topic} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                <Cpu className="w-8 h-8 text-[#005CFF]" />
                <span className="font-bold text-gray-900">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#005CFF]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Master AI & Automation</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Join our next cohort and become an AI-ready professional.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#005CFF] font-bold rounded-full hover:bg-gray-100 transition-colors">
            Register Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
