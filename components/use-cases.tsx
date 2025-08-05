import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, ShoppingCart, Smartphone, CreditCard, Banknote, Plane } from "lucide-react"

export function UseCases() {
  const useCases = [
    {
      icon: Building2,
      title: "Enterprise Payments",
      description:
        "Streamline B2B transactions with automated invoicing, multi-currency support, and advanced reconciliation.",
      features: ["Bulk payments", "Smart routing", "Real-time tracking"],
      image: "/enterprise-payment-dashboard.png",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Boost conversion rates with seamless checkout experiences and global payment method coverage.",
      features: ["One-click payments", "Fraud protection", "Mobile optimization"],
      image: "/ecommerce-checkout.png",
    },
    {
      icon: Smartphone,
      title: "Digital Wallets",
      description: "Enable secure peer-to-peer transfers and digital wallet functionality for your users.",
      features: ["P2P transfers", "QR payments", "Loyalty integration"],
      image: "/mobile-wallet-app.png",
    },
    {
      icon: CreditCard,
      title: "Card Processing",
      description: "Accept all major card types with industry-leading security and competitive processing rates.",
      features: ["EMV compliance", "Tokenization", "Chargeback protection"],
      image: "/placeholder-vx91s.png",
    },
    {
      icon: Banknote,
      title: "Banking Services",
      description: "Offer comprehensive banking services including accounts, loans, and investment products.",
      features: ["Account management", "Loan origination", "Investment tools"],
      image: "/placeholder-hkef8.png",
    },
    {
      icon: Plane,
      title: "Travel & Hospitality",
      description: "Handle complex travel bookings, multi-party payments, and international transactions seamlessly.",
      features: ["Split payments", "Currency hedging", "Booking management"],
      image: "/travel-booking-platform.png",
    },
  ]

  return (
    <section id="use-cases" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
            Real-World Applications
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powering Every
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Industry
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From startups to Fortune 500 companies, our platform adapts to your unique business needs across various
            industries and use cases.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 h-full">
                  {/* Content */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <useCase.icon className="w-7 h-7 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{useCase.description}</p>

                      {/* Features */}
                      <ul className="space-y-2 mb-6">
                        {useCase.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="ghost" className="self-start text-blue-600 hover:text-blue-700 p-0">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Image */}
                  <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
                    <img
                      src={useCase.image || "/placeholder.svg"}
                      alt={useCase.title}
                      className="w-full h-full object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our platform to streamline their financial operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 bg-transparent">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
