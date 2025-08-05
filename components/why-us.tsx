import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, Globe, Users, TrendingUp, Lock } from "lucide-react"

export function WhyUs() {
  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance with SOC 2, PCI DSS, and GDPR standards.",
      color: "text-green-600",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process transactions in milliseconds with our optimized infrastructure.",
      color: "text-yellow-600",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Support for 150+ currencies and payment methods across 200+ countries.",
      color: "text-blue-600",
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Dedicated support team available around the clock for enterprise clients.",
      color: "text-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "Real-time insights and reporting to optimize your financial operations.",
      color: "text-indigo-600",
    },
    {
      icon: Lock,
      title: "Regulatory Compliance",
      description: "Stay compliant with evolving regulations across all major markets.",
      color: "text-red-600",
    },
  ]

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            Why Choose Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Built for Enterprise
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the unique challenges of enterprise financial operations. Our platform is designed to meet the
            highest standards of security, performance, and reliability.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">99.99%</div>
              <div className="text-blue-100">Uptime SLA</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">{"<"}50ms</div>
              <div className="text-blue-100">Response Time</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">$2.4B+</div>
              <div className="text-blue-100">Daily Volume</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
