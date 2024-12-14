import { BackgroundLines } from "@/components/ui/background-lines"; // Importing the BackgroundLines component

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen">
      {/* BackgroundLines component for animated lines */}
      <BackgroundLines
        numberOfLines={10} // Adjust the number of lines for the background
        color="#fff" // Line color, can be customized
        lineWidth={1} // Width of the lines
        lineLength={0.9} // Length of the lines, you can adjust
      />

      {/* Hero content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-6">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Revolutionizing Financial Decisions  <br /> with Transparent Data Insights.
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Unlock the power of interpretable machine learning models to enhance transparency, reduce risks, and drive better financial decisions.
        </p>
      </div>
    </section>
  );
}
