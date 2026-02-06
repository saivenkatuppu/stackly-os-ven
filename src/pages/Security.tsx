import { Header } from "@/components/stackly/Header";
import { FooterCTA } from "@/components/stackly/FooterCTA";
import { useEffect } from "react";

const securitySections = [
    {
        title: "1. Data Protection",
        content: (
            <p>
                Stackly OS applies industry-standard security practices to protect user
                data against unauthorized access, alteration, or disclosure.
            </p>
        ),
    },
    {
        title: "2. Infrastructure Security",
        content: (
            <p>
                Our infrastructure is hosted with reputable cloud providers and
                monitored continuously for reliability and security.
            </p>
        ),
    },
    {
        title: "3. Access Controls",
        content: (
            <p>
                Access to systems and user data is restricted to authorized personnel
                only, following least-privilege principles.
            </p>
        ),
    },
    {
        title: "4. Responsible Disclosure",
        content: (
            <p>
                If you discover a security vulnerability, please report it responsibly.
                We appreciate the security community’s support in keeping Stackly OS safe.
            </p>
        ),
    },
];

const Security = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#f4f6f5]">
            <Header />
            <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-[#1a1f1c]">Security</h1>

                <div className="space-y-12">
                    {securitySections.map((section, index) => (
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

export default Security;
