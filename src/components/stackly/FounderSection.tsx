import { Quote, Linkedin, Twitter, Globe, MapPin, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticWrapper } from "@/components/ui/magnetic-wrapper";

export function FounderSection() {
    return (
        <section className="pt-0 pb-24 md:pb-32 bg-background relative overflow-hidden">
            {/* Decorative gradient blob */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none -z-10" />

            <div className="container-wide mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Visual Side */}
                    <div className="w-full lg:w-1/3 flex justify-center lg:justify-end animate-fade-in-up">
                        <div className="relative">
                            <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-border shadow-2xl bg-card relative group">
                                <img
                                    src="/founder.png"
                                    alt="Kavyanth Munagala"
                                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                                />
                                {/* Overlay content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/60 to-transparent">
                                    <p className="font-bold text-xl drop-shadow-md text-white">Kavyanth Munagala</p>
                                    <p className="text-sm opacity-90 drop-shadow-md text-white">Founder & CEO </p>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-2 md:-right-6 bg-card border border-border p-3 md:p-4 rounded-xl shadow-xl flex items-center gap-2 md:gap-3 animate-float">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Quote className="w-4 h-4 md:w-5 md:h-5" />
                                </div>
                                <div>
                                    <p className="text-xs md:text-sm font-bold text-foreground">Vision to Reality</p>
                                    <p className="text-[10px] md:text-xs text-muted-foreground">Execution focussed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-2/3 text-center lg:text-left animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                        <span className="text-eyebrow mb-4 block mx-auto lg:mx-0 w-fit">THE FOUNDER</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                            Building the next generation of
                            <span className="text-primary block mt-2">technology-driven ventures.</span>
                        </h2>

                        <div className="prose prose-lg text-muted-foreground mb-8 mx-auto lg:mx-0">
                            <p className="mb-4">
                                I’m <strong>Kavyanth Munagala</strong>, Founder & CEO of <strong>Venturemond</strong>, a next-generation Venture Studio
                                based in <MapPin className="w-4 h-4 inline-block text-primary -mt-1" /> <strong>Hyderabad, India</strong>.
                            </p>
                            <p className="mb-4">
                                At Venturemond, we turn ideas into execution. My focus lies in product strategy and growth
                                enablement—ensuring every idea is market-ready and scalable. I lead end-to-end operations with a
                                cross-functional perspective gained from AI, logistics, education, and agritech.
                            </p>
                            <p>
                                Stackly OS is born from this ethos: a system built for speed, clarity, and results.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                            <a href="https://www.linkedin.com/in/kavyanthm/" target="_blank" rel="noopener noreferrer">
                                <MagneticWrapper>
                                    <Button variant="default" size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                                        Connect on LinkedIn
                                    </Button>
                                </MagneticWrapper>
                            </a>
                            <div className="flex gap-4 px-4">
                                <a href="https://x.com/Kavyanth_m" target="_blank" rel="noopener noreferrer">
                                    <MagneticWrapper className="rounded-full">
                                        <div className="p-2 rounded-full bg-muted/50 hover:bg-black hover:text-white transition-colors group">
                                            {/* X Logo */}
                                            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
                                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                            </svg>
                                        </div>
                                    </MagneticWrapper>
                                </a>
                                <a href="https://venturemond.com" target="_blank" rel="noopener noreferrer">
                                    <MagneticWrapper className="rounded-full">
                                        <div className="p-2 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors">
                                            <Link2 className="w-5 h-5" />
                                        </div>
                                    </MagneticWrapper>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
