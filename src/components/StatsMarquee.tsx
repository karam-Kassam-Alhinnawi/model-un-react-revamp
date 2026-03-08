const stats = [
  { value: "101", label: "countries" },
  { value: "104", label: "languages" },
  { value: "1,500,000", label: "words" },
  { value: "18,000", label: "students" },
];

const StatsMarquee = () => {
  const items = [...stats, ...stats, ...stats, ...stats];

  return (
    <section className="py-8 bg-accent overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((stat, i) => (
          <div key={i} className="flex items-center mx-8">
            <span className="text-accent-foreground font-heading font-bold text-2xl md:text-3xl">
              {stat.value}
            </span>
            <span className="ml-2 text-accent-foreground/70 font-body text-sm uppercase tracking-wider">
              {stat.label}
            </span>
            <span className="ml-8 text-secondary text-2xl">•</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsMarquee;
