// src/components/testimonials-section.tsx

export function TestimonialsSection() {
  return (
    <section className="section">
      <div className="container6">
        <div className="text-center">
          <h2 className="h2">
            What clients say
          </h2>
          <p className="p max-w-2xl mx-auto">
            Real feedback from founders and businesses we’ve helped launch,
            scale, and look premium.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          
          {/* Testimonial 1 */}
          <div className="surface hover-lift">
            <div className="surface-inner sheen-hover p-8">
              <p className="text-white/80 leading-relaxed">
                “Tanner built our MVP faster than any agency quoted — and it
                actually worked out of the gate. Clean UI, no fluff, and clear
                communication the entire time. We launched in weeks, not
                months.”
              </p>

              <div className="mt-6">
                <div className="text-sm font-semibold text-white">
                  Michael R.
                </div>
                <div className="text-xs text-white/55">
                  Founder, Tech Startup
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="surface hover-lift">
            <div className="surface-inner sheen-hover p-8">
              <p className="text-white/80 leading-relaxed">
                “The branding and promo video completely changed how people see
                our business. It looks premium now. The quality feels like a big
                agency — but without the insane pricing or delays.”
              </p>

              <div className="mt-6">
                <div className="text-sm font-semibold text-white">
                  Jessica L.
                </div>
                <div className="text-xs text-white/55">
                  Owner, E-commerce Brand
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
