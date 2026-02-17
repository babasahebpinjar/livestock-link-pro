import { Smartphone, Monitor, Settings } from "lucide-react";

const platforms = [
  {
    icon: Smartphone,
    title: "Farmer Mobile App",
    description: "Multilingual Android & iOS app with icon-driven navigation, OTP login, order tracking, and push notifications.",
    features: ["Hindi & Marathi support", "OTP-based login", "Real-time order tracking", "Photo & document uploads"],
  },
  {
    icon: Monitor,
    title: "Partner Web Portal",
    description: "Subscription-based portal for regional partners to manage farmer networks and place consolidated orders.",
    features: ["Farmer management", "Bulk order placement", "Commission tracking", "Analytics dashboard"],
  },
  {
    icon: Settings,
    title: "Admin Dashboard",
    description: "Comprehensive control centre for Think Unique to oversee all operations, vendors, and financial transactions.",
    features: ["Order & vendor management", "Commission & payouts", "Reports & analytics", "User approvals"],
  },
];

const PlatformSection = () => {
  return (
    <section id="platform" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">The Platform</span>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mt-3">
            Built for Every Stakeholder
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Three powerful interfaces — one unified ecosystem connecting farmers, partners, and administrators.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {platforms.map((p) => (
            <div key={p.title} className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary p-6">
                <p.icon size={32} className="text-primary-foreground mb-3" />
                <h3 className="font-serif text-xl text-primary-foreground">{p.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.description}</p>
                <ul className="space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
