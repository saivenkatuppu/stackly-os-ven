import { Header } from "@/components/stackly/Header";
import { FooterCTA } from "@/components/stackly/FooterCTA";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

// Content Definitions
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

type SectionType = "privacy" | "terms" | "security";

interface LegalPageProps {
    initialSection?: SectionType;
}

const LegalPage = ({ initialSection = "privacy" }: LegalPageProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState<SectionType>(initialSection);

    // Sync active tab with route if accessed directly via URL props
    useEffect(() => {
        setActiveTab(initialSection);
    }, [initialSection]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const handleTabChange = (tab: SectionType) => {
        setActiveTab(tab);
        navigate(`/${tab}`);
    };

    const getContent = () => {
        switch (activeTab) {
            case "terms":
                return { sections: termsSections, title: "Terms of Service" };
            case "security":
                return { sections: securitySections, title: "Security" };
            case "privacy":
            default:
                return { sections: privacySections, title: "Privacy Policy" };
        }
    };

    const { sections, title } = getContent();

    return (
        <div className="min-h-screen bg-[#f4f6f5]">
            <Header />
            <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#1a1f1c]">{title}</h1>

                    {/* Tabs Navigation */}
                    <div className="flex flex-wrap gap-2 border-b border-[#e0e5e2] pb-1">
                        <button
                            onClick={() => handleTabChange("privacy")}
                            className={cn(
                                "px-4 py-2 text-sm font-medium rounded-t-lg transition-colors relative top-[1px]",
                                activeTab === "privacy"
                                    ? "text-[#10b981] border-b-2 border-[#10b981] bg-white/50"
                                    : "text-[#5c6660] hover:text-[#1a1f1c] hover:bg-white/30"
                            )}
                        >
                            Privacy Policy
                        </button>
                        <button
                            onClick={() => handleTabChange("terms")}
                            className={cn(
                                "px-4 py-2 text-sm font-medium rounded-t-lg transition-colors relative top-[1px]",
                                activeTab === "terms"
                                    ? "text-[#10b981] border-b-2 border-[#10b981] bg-white/50"
                                    : "text-[#5c6660] hover:text-[#1a1f1c] hover:bg-white/30"
                            )}
                        >
                            Terms of Service
                        </button>
                        <button
                            onClick={() => handleTabChange("security")}
                            className={cn(
                                "px-4 py-2 text-sm font-medium rounded-t-lg transition-colors relative top-[1px]",
                                activeTab === "security"
                                    ? "text-[#10b981] border-b-2 border-[#10b981] bg-white/50"
                                    : "text-[#5c6660] hover:text-[#1a1f1c] hover:bg-white/30"
                            )}
                        >
                            Security
                        </button>
                    </div>
                </div>

                <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {sections.map((section, index) => (
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

export default LegalPage;
