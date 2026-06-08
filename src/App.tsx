import "./index.css";

function App() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <section className="max-w-2xl space-y-6 text-center">
        <h1>Welcome to My Site</h1>
        <p className="text-lg text-fg leading-relaxed">
          A clean starting point for building meaningful digital experiences —
          designed with intention and built with care.
        </p>
        <button
          type="button"
          className="mt-4 inline-flex items-center rounded-lg bg-accent px-6 py-3 text-base font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Get Started
        </button>
      </section>
    </main>
  );
}

export default App;
