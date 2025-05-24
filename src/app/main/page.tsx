export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[40vh] text-center">
      <h1 className="text-4xl font-bold mb-4 text-brand-dark">Welcome to Cheflyte</h1>
      <p className="text-lg text-brand-sage max-w-xl">
        Your modern AI-powered chef booking platform. Start by exploring the <a href="/style-guide" className="underline text-brand-mustard hover:text-brand-dark">style guide</a> or check back soon for more features!
      </p>
    </section>
  );
}
