import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import React from "react";

const COLORS = [
  { name: "Dark Green", className: "bg-brand-dark", hex: "#213F33" },
  { name: "Sage Green", className: "bg-brand-sage", hex: "#5D745E" },
  { name: "Cream", className: "bg-brand-cream", hex: "#EFEBD4" },
  { name: "Mustard", className: "bg-brand-mustard", hex: "#D7A946" },
];

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-white/80 rounded-xl shadow-card p-6 mb-8 border border-brand-cream">
      <h2 className="text-xl font-semibold mb-4 text-brand-dark border-b border-brand-cream pb-2">{title}</h2>
      {children}
    </section>
  );
}

export default function StyleGuidePage() {
  return (
    <main className="min-h-screen bg-brand-cream py-10 px-4 flex flex-col items-center">
      <div className="max-w-2xl w-full">
        <header className="flex items-center gap-4 mb-10">
          <span className="inline-block w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center shadow-card">
            <span className="text-3xl text-brand-cream">👨‍🍳</span>
          </span>
          <h1 className="text-4xl font-bold text-brand-dark font-sans tracking-tight">Cheflyte Style Guide</h1>
        </header>

        <SectionCard title="Colors">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {COLORS.map((c) => (
              <div key={c.hex} className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-lg shadow-card border-2 border-brand-sage flex items-center justify-center relative ${c.className}`}>
                  <span className="absolute bottom-1 right-1 text-[10px] bg-white/70 px-1 rounded text-brand-dark border border-brand-cream">{c.hex}</span>
                </div>
                <span className="text-xs mt-2 text-brand-dark font-medium">{c.name}</span>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Typography">
          <div className="space-y-2">
            <div className="text-4xl font-bold font-sans text-brand-dark">Heading 1</div>
            <div className="text-2xl font-semibold font-sans text-brand-dark">Heading 2</div>
            <div className="text-lg font-medium font-sans text-brand-dark">Body text example</div>
            <div className="text-sm font-sans text-brand-sage">Small text, secondary</div>
          </div>
        </SectionCard>

        <SectionCard title="UI Elements">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <div className="space-y-2">
                <div className="text-sm text-brand-dark font-semibold mb-1">Button States</div>
                <div className="flex gap-2 flex-wrap">
                  <Button className="w-28">Default</Button>
                  <Button variant="outline" className="w-28">Outline</Button>
                  <Button disabled className="w-28">Disabled</Button>
                  <Button variant="destructive" className="w-28">Destructive</Button>
                </div>
              </div>
              <div className="space-y-2 mt-4">
                <div className="text-sm text-brand-dark font-semibold mb-1">Input States</div>
                <Input placeholder="Default" className="w-full" />
                <Input placeholder="Disabled" className="w-full" disabled />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center">
              <Card className="p-6 bg-brand-cream rounded-lg shadow-card w-full">
                <div className="text-xl font-bold text-brand-dark mb-2">Card</div>
                <div className="text-brand-dark">This is some text inside of a card. Cards use the brand cream background and soft shadow.</div>
              </Card>
            </div>
          </div>
        </SectionCard>
      </div>
    </main>
  );
}
