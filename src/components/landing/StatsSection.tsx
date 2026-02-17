const stats = [
  { value: "5+", label: "Core Services" },
  { value: "2", label: "Languages Supported" },
  { value: "3", label: "Platform Interfaces" },
  { value: "100%", label: "GST Compliant" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl md:text-5xl font-serif text-secondary mb-2">{s.value}</div>
              <div className="text-primary-foreground/70 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
