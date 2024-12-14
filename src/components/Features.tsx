import React from "react";
import { Compare } from "@/components/ui/compare";
import { GlobeDemo } from "./ui/GlobeDemo";

const Features = () => {
  return (
    <section className="py-16 px-8">
      <div className="flex flex-col items-start">
        {/* Features Text Section */}
        <div className="w-full mb-8">
          <h2 className="bg-clip-text text-transparent text-left bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-6xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Features
          </h2>
          <p className="text-gray-600 mt-4 text-left">
            Maximize Accuracy and Trust in Every Financial Decision
          </p>
        </div>

        {/* Box Section */}
        <div className="grid grid-cols-1 gap-8 w-full">
          {/* Top Box */}
          <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform group/bento hover:scale-105 cursor-pointer flex">
            {/* Left Box */}
            <div className="flex-1">
              <h3 className="bg-clip-text text-transparent text-left bg-gradient-to-b from-purple-700 to-purple-400 dark:from-purple-600 dark:to-purple-300 text-3xl font-sans py-2 md:py-5 relative z-20 font-semibold tracking-tight">
                Transparent Fraud Detection
              </h3>
              <p className="text-gray-600 mt-2 text-left">
                AI-Powered Fraud Detection with Clear Explanations. Fraud detection
                is crucial for preventing financial losses. By leveraging explainable machine
                learning, we not only identify fraudulent transactions but also provide actionable,
                understandable reasons for flagging them. With clear explanations such as, “This decision
                was based on a high debt-to-income ratio and a history of missed payments,” applicants gain
                a clear understanding of why they were approved or denied, fostering trust and fairness.
              </p>
            </div>

            {/* Right Box */}
            <div
  className="p-6 rounded-xl text-white bg-[url(https://plus.unsplash.com/premium_vector-1711987768568-d2d79c8e0d07?q=80&w=3076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] 
  bg-cover bg-center w-[400px] md:w-[600px] h-[300px] flex-none ml-6"
>

                
           
            
            </div>
          </div>

          {/* Bottom Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Box 1 */}
            <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform group/bento hover:scale-105 cursor-pointer">
              <h3 className="bg-clip-text text-transparent text-left bg-gradient-to-b from-purple-700 to-purple-400 dark:from-purple-600 dark:to-purple-300 text-3xl font-sans py-2 md:py-5 relative z-20 font-semibold tracking-tight">
                Enhanced Lending Decisions
              </h3>
              <div className=" p-6 rounded-lg center text-white ml-6 flex-none">
              <Compare
        firstImage="https://assets.aceternity.com/code-problem.png"
        secondImage="https://assets.aceternity.com/code-solution.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[150px] w-[100px] md:h-[300px] md:w-[500px]"
        slideMode="hover"
      />
              </div>
              <p className="text-gray-600 mt-2 text-left">
                AI-Powered Fraud Detection with Clear Explanations. Fraud detection
                is crucial for preventing financial losses. By leveraging explainable machine learning,
                we not only identify fraudulent transactions but also provide actionable, understandable reasons
                for flagging them.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform group/bento hover:scale-105 cursor-pointer">
              <h3 className="bg-clip-text text-transparent text-left bg-gradient-to-b from-purple-700 to-purple-400 dark:from-purple-600 dark:to-purple-300 text-3xl font-sans py-2 md:py-5 relative z-20 font-semibold tracking-tight">
              Navigate Loan Risks in a Changing World
              </h3>
             
              <p className="text-gray-600 mt-2 text-left">
                Predicting loan defaults is a challenge for lenders. Our explainable machine learning models
                analyze borrowers' financial behavior to predict default risks with greater accuracy. With insights
                such as, “The loan has a high default risk due to inconsistent payments and a high credit utilization
                ratio,” financial institutions can take proactive steps to mitigate risks, such as offering repayment
                plans or adjusting loan terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
