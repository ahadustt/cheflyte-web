import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const COLORS = [
  { name: "Dark Green", className: "bg-brand-dark", hex: "#213F33" },
  { name: "Sage Green", className: "bg-brand-sage", hex: "#5D745E" },
  { name: "Cream", className: "bg-brand-cream", hex: "#EFEBD4" },
  { name: "Mustard", className: "bg-brand-mustard", hex: "#D7A946" },
];

export default function StyleGuidePage() {
  return (
    <main className="min-h-screen bg-brand-cream py-10 px-4 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-10">
        <header className="flex items-center gap-4">
          <span className="inline-block w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center">
            <span className="text-2xl text-brand-cream">👨‍🍳</span>
          </span>
          <h1 className="text-3xl font-bold text-brand-dark font-sans">Cheflyte Style Guide</h1>
        </header>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-brand-dark">Colors</h2>
          <div className="flex gap-4">
            {COLORS.map((c) => (
              <div key={c.hex} className="flex flex-col items-center">
                <div className={`w-16 h-8 rounded-lg shadow-card border ${c.className}`}></div>
                <span className="text-xs mt-1 text-brand-dark">{c.name}</span>
                <span className="text-xs text-brand-sage">{c.hex}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-brand-dark">Typography</h2>
          <div className="space-y-1">
            <div className="text-4xl font-bold font-sans text-brand-dark">Heading 1</div>
            <div className="text-2xl font-semibold font-sans text-brand-dark">Heading 2</div>
            <div className="text-lg font-medium font-sans text-brand-dark">Body text example</div>
            <div className="text-sm font-sans text-brand-sage">Small text, secondary</div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-brand-dark">UI Elements</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <Button className="w-full">Button</Button>
              <Input placeholder="Input" className="w-full" />
            </div>
            <div className="w-full md:w-1/2">
              <Card className="p-6 bg-brand-cream rounded-lg shadow-card">
                <div className="text-xl font-bold text-brand-dark mb-2">Card</div>
                <div className="text-brand-dark">This is some text inside of a card.</div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
