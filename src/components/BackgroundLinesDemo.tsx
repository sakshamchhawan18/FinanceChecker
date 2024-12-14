import { BackgroundLines } from "../components/ui/background-lines"; // Importing the BackgroundLines component

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen">
      {/* BackgroundLines component for animated lines */}
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        
        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-6">
          {/* Title Text */}
          <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans py-4 md:py-8 font-bold tracking-tight z-20">
            Revolutionizing Financial Decisions  <br /> with Transparent Data Insights.
          </h2>
          
          {/* Subtitle Text */}
          <p className="max-w-xl mx-auto text-base sm:text-lg md:text-xl text-neutral-700 dark:text-neutral-400 mt-4">
            Unlock the power of interpretable machine learning models to enhance transparency, reduce risks, and drive better financial decisions.
          </p>
        </div>
        
      </BackgroundLines>
    </section>
  );
}
