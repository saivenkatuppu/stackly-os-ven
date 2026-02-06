import { Header } from "@/components/stackly/Header";
import { FooterCTA } from "@/components/stackly/FooterCTA";
import { useEffect } from "react";

const termsSections = [
    {
        title: "1. Acceptance of Terms",
        content: (
            <p>
                By accessing or using Stackly OS, you agree to be bound by these Terms
                of Service. If you do not agree, please do not use the platform.
            </p>
        ),
    },
    {
        title: "2. Use of the Platform",
        content: (
            <p>
                Stackly OS is provided for internal workflow management and operational
                use by teams. You agree not to misuse the platform or attempt to access
                systems beyond authorized permissions.
            </p>
        ),
    },
    {
        title: "3. Early Access",
        content: (
            <p>
                Stackly OS may be offered in early access form. Features may change,
                evolve, or be discontinued as we improve the product.
            </p>
        ),
    },
    {
        title: "4. Limitation of Liability",
        content: (
            <p>
                Stackly OS is provided “as is”. We are not liable for any indirect or
                consequential damages arising from use of the platform.
            </p>
        ),
    },
];

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#f4f6f5]">
            <Header />
            <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-[#1a1f1c]">Terms of Service</h1>

                <div className="space-y-12">
                    {termsSections.map((section, index) => (
                        <div key={index} className="space-y-4">
                            <h2 className="text-2xl font-semibold text-[#1a1f1c]">{section.title}</h2>
                            <div className="text-[#4a524e] leading-relaxed text-base md:text-lg">
                                {section.content}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <FooterCTA />
        </div>
    );
};

export default Terms;
