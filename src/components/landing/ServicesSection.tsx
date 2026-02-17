import { GraduationCap, Syringe, ArrowLeftRight, Shield, Banknote } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Training",
    description: "Expert-led cattle care training programs accessible directly from your phone.",
  },
  {
    icon: Syringe,
    title: "Vaccination",
    description: "Schedule and track vaccinations with certified veterinary partners.",
  },
  {
    icon: ArrowLeftRight,
    title: "Trading",
    description: "Buy and sell cattle through a transparent, verified marketplace.",
  },
  {
    icon: Shield,
    title: "Insurance",
    description: "Protect your livestock with affordable and hassle-free insurance plans.",
  },
  {
    icon: Banknote,
    title: "Financing",
    description: "Access loans and financial support tailored for cattle farmers.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mt-3">
            Everything Your Cattle Need
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A comprehensive suite of services designed to support Indian farmers at every stage of cattle management.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-sans font-bold text-lg text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
