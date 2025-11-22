"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  ArrowRight,
  FileSearch,
  ShieldCheck,
  Sparkles,
  Zap,
  Layers,
  BookOpen,
  Search,
} from "lucide-react";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";

import AppHeader from "./dashboard/_components/AppHeader";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">

      {/* Header */}
      <AppHeader />

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-5 pt-32 pb-20">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
          Transform Your Documents with{" "}
          <span className="text-orange-600">IntelliDocs</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
          Upload PDFs, summarize content, search inside documents, and ask
          questions — all powered by advanced AI.
        </p>

        {/* CTA Buttons */}
        <SignedOut>
          <div className="flex gap-4 mt-7 flex-wrap justify-center">
            <SignUpButton mode="modal">
              <Button className="px-8 py-6 text-lg rounded-xl shadow-lg hover:scale-105 transition-transform">
                Get Started <ArrowRight className="ml-2" />
              </Button>
            </SignUpButton>

            <SignInButton mode="modal">
              <Button
                variant="outline"
                className="px-8 py-6 text-lg rounded-xl hover:scale-105 transition-transform"
              >
                Sign In
              </Button>
            </SignInButton>
          </div>
        </SignedOut>

        <SignedIn>
          <Button
            className="mt-7 px-8 py-6 text-lg rounded-xl shadow-lg hover:scale-105 transition-transform"
            onClick={() => (window.location.href = "/dashboard")}
          >
            Go to Dashboard <ArrowRight className="ml-2" />
          </Button>
        </SignedIn>
      </section>

      {/* HOW IT WORKS Section */}
      <section className="px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          How Does <span className="text-orange-600">IntelliDocs</span> Work?
        </h2>

        <p className="text-center mt-3 text-muted-foreground max-w-2xl mx-auto">
          IntelliDocs simplifies document understanding by combining AI
          intelligence with an easy-to-use interface.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14 max-w-6xl mx-auto">
          <HowCard
            icon={<Layers className="w-10 h-10 text-orange-600" />}
            title="1. Upload"
            desc="Drop your PDF or import from your device in seconds."
          />
          <HowCard
            icon={<BookOpen className="w-10 h-10 text-orange-600" />}
            title="2. AI Analysis"
            desc="AI reads your entire document and builds a deep understanding."
          />
          <HowCard
            icon={<Search className="w-10 h-10 text-orange-600" />}
            title="3. Explore"
            desc="Ask questions, summarize, search, or extract insights instantly."
          />
        </div>
      </section>

      {/* WHY CHOOSE Section */}
      <section className="px-6 py-16 bg-muted/30">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Why Choose <span className="text-orange-600">IntelliDocs?</span>
        </h2>

        <p className="text-center mt-3 text-muted-foreground max-w-2xl mx-auto">
          Designed for students, professionals, and teams that work with knowledge-heavy PDFs.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14 max-w-6xl mx-auto">

          <FeatureCard
            icon={<FileSearch className="w-10 h-10 text-orange-600" />}
            title="AI Document Search"
            desc="Ask anything from your PDF and get precise answers."
          />

          <FeatureCard
            icon={<Sparkles className="w-10 h-10 text-orange-600" />}
            title="Smart Summaries"
            desc="Ultra-accurate summaries for long research papers."
          />

          <FeatureCard
            icon={<Zap className="w-10 h-10 text-orange-600" />}
            title="Lightning Fast"
            desc="Built with serverless Next.js & Convex for speed."
          />

          <FeatureCard
            icon={<ShieldCheck className="w-10 h-10 text-orange-600" />}
            title="Secure & Private"
            desc="End-to-end encrypted, safe document handling."
          />

          <FeatureCard
            icon={<ArrowRight className="w-10 h-10 text-orange-600" />}
            title="Ask Anything"
            desc="Your personal AI reader that helps explain or simplify any topic."
          />

          <FeatureCard
            icon={<BookOpen className="w-10 h-10 text-orange-600" />}
            title="Made for Students"
            desc="Perfect for exam prep, notes, lecture PDFs, and research material."
          />
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Start Exploring Your PDFs with <span className="text-orange-600">AI Power</span>
        </h2>

        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Experience the easiest way to understand and analyze documents.
        </p>

        <div className="flex justify-center mt-7">
          <SignedOut>
            <SignUpButton mode="modal">
              <Button className="px-10 py-6 rounded-xl text-lg shadow-xl hover:scale-110 transition-transform flex items-center">
                Start Your Journey <ArrowRight className="ml-2" />
              </Button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <Button
              className="px-10 py-6 rounded-xl text-lg shadow-xl hover:scale-110 transition-transform flex items-center"
              onClick={() => (window.location.href = "/dashboard")}
            >
              Start Your Journey <ArrowRight className="ml-2" />
            </Button>
          </SignedIn>
        </div>
      </section>

      {/* CLEAN FOOTER (NO LOGO) */}
      <footer className="py-8 text-center border-t text-sm text-muted-foreground">
        © {new Date().getFullYear()} IntelliDocs — Built by Jayant
      </footer>
    </div>
  );
}

/* Feature Card */
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="p-6 rounded-2xl bg-background border hover:shadow-xl transition-all duration-300">
      {icon}
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-muted-foreground mt-2">{desc}</p>
    </div>
  );
}

/* How it Works Card */
function HowCard({ icon, title, desc }) {
  return (
    <div className="p-6 rounded-2xl bg-background border hover:shadow-lg transition-all duration-300">
      {icon}
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-muted-foreground mt-2 leading-relaxed">{desc}</p>
    </div>
  );
}
