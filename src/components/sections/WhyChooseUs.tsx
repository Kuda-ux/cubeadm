import { 
  Award, 
  Users, 
  Globe, 
  Zap, 
  CheckCircle, 
  TrendingUp 
} from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Industry Certifications',
    description: 'Our courses prepare you for globally recognized certifications from Cisco, AWS, CompTIA, and more.',
  },
  {
    icon: Users,
    title: 'Expert Instructors',
    description: 'Learn from certified professionals with real-world experience in enterprise environments.',
  },
  {
    icon: Globe,
    title: 'Global Standards',
    description: 'Training aligned with international best practices and industry-leading methodologies.',
  },
  {
    icon: Zap,
    title: 'Hands-On Learning',
    description: 'Practical labs and real-world projects that prepare you for actual job requirements.',
  },
  {
    icon: CheckCircle,
    title: 'Proven Track Record',
    description: '98% success rate with graduates working at leading organizations across Africa.',
  },
  {
    icon: TrendingUp,
    title: 'Career Support',
    description: 'Job placement assistance, career counseling, and networking opportunities.',
  },
]

const stats = [
  { value: '500+', label: 'Students Trained' },
  { value: '50+', label: 'Corporate Clients' },
  { value: '98%', label: 'Success Rate' },
  { value: '15+', label: 'Certifications' },
]

const partners = [
  'Cisco', 'AWS', 'Microsoft', 'CompTIA', 'Oracle', 'VMware'
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-[150px]" />
      
      <div className="container-custom mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            Why Choose CubeADM
          </span>
          <h2 className="heading-lg text-white mt-3 mb-4">
            Your Partner in Technology Excellence
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            We combine world-class training with enterprise IT solutions to deliver 
            exceptional value for individuals and organizations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 bg-dark-800/50 border border-white/5 rounded-xl hover:border-primary-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary-500/10 via-primary-500/5 to-primary-500/10 border border-primary-500/20 rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div className="text-center">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-8">
            Aligned with Global Technology Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner) => (
              <div
                key={partner}
                className="text-2xl font-bold text-gray-600 hover:text-primary-500 transition-colors cursor-default"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
