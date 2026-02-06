import { Header } from "@/components/stackly/Header";
import { FooterCTA } from "@/components/stackly/FooterCTA";
import { useEffect } from "react";

const privacySections = [
    {
        title: "1. Overview",
        content: (
            <p>
                Welcome to <span className="text-[#10b981] font-semibold">Stackly OS</span>.
                Stackly OS (“we”, “our”, or “us”) provides a control-first operating system
                for teams to design, manage, and scale structured internal workflows.
                This Privacy Policy explains how we collect, use, and protect your
                information when you use our website or request early access.
            </p>
        ),
    },
    {
        title: "2. Information We Collect",
        content: (
            <>
                <p className="font-semibold text-[#10b981]">a. Information you provide</p>
                <ul className="list-disc ml-6 mt-2 space-y-1 text-[#5c6660]">
                    <li>Name</li>
                    <li>Work email address</li>
                    <li>Company name</li>
                    <li>Workflow or product challenges (optional)</li>
                </ul>

                <p className="mt-4 font-semibold text-[#10b981]">b. Automatically collected data</p>
                <ul className="list-disc ml-6 mt-2 space-y-1 text-[#5c6660]">
                    <li>Browser and device information</li>
                    <li>IP address</li>
                    <li>Usage and interaction data</li>
                </ul>
            </>
        ),
    },
    {
        title: "3. How We Use Your Information",
        content: (
            <ul className="list-disc ml-6 space-y-1 text-[#5c6660]">
                <li>Grant and manage early access to Stackly OS</li>
                <li>Respond to product or access requests</li>
                <li>Improve platform functionality and experience</li>
                <li>Communicate important updates</li>
            </ul>
        ),
    },
    {
        title: "4. Data Retention",
        content: (
            <p>
                We retain personal data only for as long as necessary to provide our
                services or comply with legal requirements. You may request data removal
                at any time by contacting us.
            </p>
        ),
    },
];

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#f4f6f5]">
            <Header />
            <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a1f1c]">Privacy Policy</h1>


                <div className="space-y-12">
                    {privacySections.map((section, index) => (
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

export default Privacy;
