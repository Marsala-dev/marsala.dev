import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-moss-950 text-white">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-hero-gradient opacity-90" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-hero-glow opacity-30 blur-[100px] animate-pulse-slow" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-moss-900/50 border border-moss-700/30 backdrop-blur-md mb-8 animate-fade-in">
                    <span className="w-2 h-2 rounded-full bg-moss-100 animate-pulse" />
                    <span className="text-sm font-medium text-moss-100 tracking-wide">
                        v2.0 Now Available
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 animate-slide-up [animation-delay:200ms]">
                    The open-source, <span className="text-transparent bg-clip-text bg-gradient-to-r from-moss-100 to-sage-200">AI-native IDE</span>
                    <br />
                    for modern developers
                </h1>

                <p className="text-xl md:text-2xl text-moss-200 max-w-3xl mx-auto mb-12 animate-slide-up [animation-delay:400ms]">
                    Build faster, collaborate in real-time, and deploy with confidence using the most advanced development environment ever created.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up [animation-delay:600ms]">
                    <Link
                        href="/download"
                        className="group relative px-8 py-4 bg-moss-100 text-moss-950 rounded-full font-semibold text-lg transition-all hover:shadow-glow-electric hover:scale-105"
                    >
                        <span className="flex items-center gap-2">
                            <Download className="w-5 h-5" />
                            Download for Windows
                        </span>
                    </Link>

                    <Link
                        href="/features"
                        className="group px-8 py-4 bg-moss-900/50 text-white rounded-full font-semibold text-lg border border-moss-700 transition-all hover:bg-moss-800/50"
                    >
                        <span className="flex items-center gap-2">
                            Explore Use Cases
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                </div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-moss-950 to-transparent pointer-events-none" />
        </section>
    );
}
