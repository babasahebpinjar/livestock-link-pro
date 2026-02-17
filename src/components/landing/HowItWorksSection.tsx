import { UserPlus, ListChecks, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Register with OTP",
    description: "Sign up using your mobile number — no password needed.",
  },
  {
    icon: ListChecks,
    step: "02",
    title: "Choose a Service",
    description: "Browse training, vaccination, trading, insurance or loan options.",
  },
  {
    icon: Truck,
    step: "03",
    title: "Order & Track",
    description: "Place your request and track real-time status updates.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Get Fulfilled",
    description: "Verified vendors deliver the service to your doorstep.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mt-3">
            Simple Steps, Real Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <div key={s.step} className="text-center relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
              )}
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 relative z-10">
                <s.icon size={28} className="text-primary" />
              </div>
              <span className="text-secondary font-bold text-sm">{s.step}</span>
              <h3 className="font-sans font-bold text-foreground mt-1 mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
