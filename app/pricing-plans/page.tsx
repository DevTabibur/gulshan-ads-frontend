import { Layout } from "@/components/Layout"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

const packages = [
  {
    name: "Basic Package",
    subtitle: "Entry Level",
    color: "from-emerald-500 to-cyan-500",
    prices: ["$100", "$300", "$500"],
    features: [
      "Entry-level campaign setup",
      "Basic analytics",
      "Email support",
    ],
  },
  {
    name: "Standard Package",
    subtitle: "Growth Level",
    color: "from-cyan-500 to-blue-500",
    prices: ["$1000", "$2000", "$3000"],
    features: [
      "Growth-focused strategy",
      "Advanced analytics",
      "Priority support",
      "Monthly reporting",
    ],
    popular: true,
  },
  {
    name: "Premium Package",
    subtitle: "Pro Level",
    color: "from-purple-500 to-pink-500",
    prices: ["$5000", "$10000", "$30000"],
    features: [
      "Pro-level management",
      "Dedicated account manager",
      "Custom creative assets",
      "24/7 support",
      "Weekly strategy calls",
    ],
  },
]

const PricingPlans = () => {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-900 dark:to-cyan-900/20 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Pricing Plans
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Choose the best package for your needs and grow your business.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={pkg.name}
                className={`relative group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border-2 transition-all duration-300
                  ${pkg.popular
                    ? "border-emerald-500 dark:border-emerald-400 scale-105 z-10"
                    : "border-slate-200 dark:border-slate-700"
                  }
                  hover:shadow-2xl`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </div>
                )}
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${pkg.color} rounded-xl mb-6`}>
                  <span className="text-2xl font-bold text-white">{pkg.name[0]}</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{pkg.name}</h2>
                <div className="text-emerald-600 dark:text-emerald-400 font-semibold mb-4">{pkg.subtitle}</div>
                <div className="flex flex-wrap gap-3 justify-center mb-6">
                  {pkg.prices.map((price, i) => (
                    <span
                      key={price}
                      className="inline-block bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-bold px-4 py-2 rounded-full text-lg shadow-sm"
                    >
                      {price}
                    </span>
                  ))}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="https://wa.link/izw72x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-block text-center py-4 rounded-xl font-semibold transition-all duration-300 ${pkg.popular
                      ? "bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-lg hover:shadow-xl"
                      : "border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                    }`}
                  style={{ marginTop: "-0.5rem" }}
                >
                  Start Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default PricingPlans