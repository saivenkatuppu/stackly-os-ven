export function TeamSection() {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-narrow mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Built by Venturemond
        </h2>

        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Stackly OS is built by Venturemond,
          a venture studio focused on execution-first products
          using open infrastructure.
        </p>

        <div className="bg-card p-6 rounded-xl border border-border inline-block">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-primary">KM</span>
          </div>
          <p className="font-semibold text-foreground">Kavyanth Munagala</p>
          <p className="text-sm text-muted-foreground">Founder</p>
        </div>
      </div>
    </section>
  );
}
