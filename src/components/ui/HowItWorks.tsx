"use client";
import { cn } from "../../lib/utils";

export default function HowItWorksSection() {
    return (
      <div className="w-full py-32 bg-white dark:bg-gray-900">
        {/* Heading */}
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-6xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          How It Works
        </h2>
  
        {/* Cards Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        <div className="max-w-xs w-full group/card">
      <div
      className={cn(
        "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
        "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover bg-center"
      )}
      
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
        <h4 className="h-10 w-10 rounded-full border-2 flex items-center justify-center text-white text-2xl">1</h4>
          
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-1xl text-gray-50 relative z-10">
          Data Collection & Model Training
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
          Gather relevant financial data—transaction history, credit scores, income levels—and train models to detect patterns and generate predictions.
          </p>
        </div>
      </div>
    </div>





    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
        <h4 className="h-10 w-10 rounded-full border-2 flex items-center justify-center text-white text-2xl">2</h4>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-1xl text-gray-50 relative z-10">
          Explainability with Advanced Techniques
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
          Use advanced tools like SHAP and LIME to interpret the decision-making process and ensure transparency in model predictions.
          </p>
        </div>
      </div>
    </div>





    <div className="max-w-xs w-full group/card">
      <div
      className={cn(
        "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
        "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover bg-center  bg-no-repeat"
      )}
      
      
      
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
        <h4 className="h-10 w-10 rounded-full border-2 flex items-center justify-center text-white text-2xl">3</h4>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-1xl text-gray-50 relative z-10">
          Transparent Predictions
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
          Provide clear explanations showing how each feature (e.g., income, credit score) influences the prediction, empowering decision-makers with actionable insights.
          </p>
        </div>
      </div>
    </div>







    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
        <h4 className="h-10 w-10 rounded-full border-2 flex items-center justify-center text-white text-2xl">4</h4>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-1xl text-gray-50 relative z-10">
          Real-Time Application
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
          Deploy the model in real-time to make informed decisions, reduce risk, and improve customer relationships with clear, actionable predictions.
          </p>
        </div>
      </div>
    </div>
        </div>
      </div>
    );
  }

  



