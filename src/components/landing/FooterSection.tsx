import { Mail, Phone, MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg font-serif">TU</span>
              </div>
              <span className="font-serif text-xl text-background">Think Unique</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Digitising cattle services across India — connecting farmers, partners, and vendors through one unified platform.
            </p>
          </div>

          <div>
            <h4 className="font-sans font-bold text-background mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Services", "How It Works", "Platform", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="block text-background/60 hover:text-secondary text-sm transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-sans font-bold text-background mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/60 text-sm">
                <Mail size={16} className="text-secondary flex-shrink-0" />
                info@thinkunique.in
              </div>
              <div className="flex items-center gap-3 text-background/60 text-sm">
                <Phone size={16} className="text-secondary flex-shrink-0" />
                +91 XXXXX XXXXX
              </div>
              <div className="flex items-center gap-3 text-background/60 text-sm">
                <MapPin size={16} className="text-secondary flex-shrink-0" />
                India
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/40 text-sm">
            © 2026 Think Unique Infomedia Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
