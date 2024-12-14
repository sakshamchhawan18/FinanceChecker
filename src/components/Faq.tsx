"use client"
import { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // FAQ data array with the benefits of Explainable AI in Finance
  const faqData = [
    {
      question: 'Why is explainability important in financial decisions?',
      answer:
        'Explainability builds trust and transparency. When financial institutions provide clear, understandable explanations for decisions, customers and stakeholders can better trust the outcomes. This ensures that AI-driven decisions are predictable, consistent, and aligned with their expectations.',
    },
    {
      question: 'How does explainable AI help reduce bias in financial systems?',
      answer:
        'Bias mitigation is one of the key advantages of explainable AI. By using interpretable models, financial institutions can identify and eliminate biases in the decision-making process. This ensures that decisions are based on objective, data-driven factors, rather than hidden or subjective biases that could impact fairness.',
    },
    {
      question: 'How does explainable AI support regulatory compliance?',
      answer:
        'Many financial institutions are required by law to explain the reasoning behind their decisions. Explainable AI makes it easier for institutions to comply with these regulations by providing clear, understandable justifications for decisions like loan rejections or fraud alerts, ensuring that the institution meets legal standards.',
    },
    {
      question: 'Can explainable AI improve risk management?',
      answer:
        'Yes, improved risk management is another benefit of explainable AI. By making predictions transparent and understandable, financial institutions can identify potential risks earlier. This allows them to act proactively to reduce financial exposure and mitigate risks before they become bigger issues.',
    },
    {
      question: 'How does explainable AI benefit customer relationships?',
      answer:
        'When customers understand the reasons behind financial decisions (such as loan denials or fraud flags), they feel more confident and satisfied with the process. This fosters stronger customer relationships by improving transparency and helping customers trust the decisions made by financial institutions.',
    },
  ];

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle visibility
  };

  return (
    <div className="w-full max-w-3xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">FAQs</h2>
      <p className="text-center text-lg text-gray-600 mb-8">
        Learn more about the benefits of Explainable AI in Finance and its impact on decision-making.
      </p>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 py-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAnswer(index)}>
              <span className="text-lg font-medium text-left text-gray-700">{faq.question}</span>
              <button className="text-xl text-gray-500 focus:outline-none">
                {activeIndex === index ? '↑' : '↓'}
              </button>
            </div>
            {activeIndex === index && (
              <div className="mt-3 pl-4 text-left text-gray-600 text-base">
                <p className="text-gray-600 mt-2 text-left">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
