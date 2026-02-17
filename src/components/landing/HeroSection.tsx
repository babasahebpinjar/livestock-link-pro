import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Shield } from "lucide-react";
import heroImage from "@/assets/hero-farmer.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Indian farmer with cattle in green field" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Smartphone size={16} className="text-secondary" />
            <span className="text-primary-foreground/90 text-sm font-medium">Available in Hindi & Marathi</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif text-primary-foreground leading-tight mb-6 animate-fade-in-up">
            Empowering Farmers with Digital Cattle Services
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-lg animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            One platform for training, vaccination, trading, insurance & financing — built for India's farmers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" variant="secondary" className="text-base font-semibold gap-2">
              Download App <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline" className="text-base font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Learn More
            </Button>
          </div>

          <div className="flex items-center gap-6 mt-10 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            <div className="flex items-center gap-2">
              <Shield size={18} className="text-secondary" />
              <span className="text-primary-foreground/70 text-sm">GST Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={18} className="text-secondary" />
              <span className="text-primary-foreground/70 text-sm">Secure & Reliable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
