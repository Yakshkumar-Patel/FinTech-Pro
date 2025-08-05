import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Shield, Zap, Globe } from "lucide-react"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Trusted by 10,000+ Global Companies
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transform Your
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Financial{" "}
              </span>
              Operations
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Streamline payments, enhance security, and scale globally with our cutting-edge fintech platform. Built
              for enterprises that demand excellence.
            </p>

            {/* Key Benefits */}
            <div className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start">
              <div className="flex items-center text-gray-700">
                <Shield className="w-5 h-5 text-green-500 mr-2" />
                Bank-Grade Security
              </div>
              <div className="flex items-center text-gray-700">
                <Globe className="w-5 h-5 text-blue-500 mr-2" />
                Global Coverage
              </div>
              <div className="flex items-center text-gray-700">
                <Zap className="w-5 h-5 text-purple-500 mr-2" />
                Real-time Processing
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 bg-transparent">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Trusted by industry leaders</p>
              <div className="flex items-center justify-center lg:justify-start space-x-8 opacity-60">
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Visual */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="677390371b642f9f45086b13_BFS_Blog Images - Emrill.png"
                alt="FinTech Dashboard"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 z-20">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">99.9% Uptime</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 z-20">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">$2.4B+</div>
                <div className="text-sm text-gray-600">Processed Daily</div>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
