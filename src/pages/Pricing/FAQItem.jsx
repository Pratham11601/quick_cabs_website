import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const FAQItem = ({ question, children, isOpen, onClick }) => (
  <div className="mb-4">
    <button
      onClick={onClick}
      className="w-full bg-white rounded-xl p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
    >
      <span className="text-xl text-left text-gray-900">{question}</span>
      <Plus 
        className={`flex-shrink-0 transition-transform ${isOpen ? 'rotate-45' : ''}`}
        size={24}
      />
    </button>
    {isOpen && (
      <div className="p-6 pt-2">
        {children}
      </div>
    )}
  </div>
);

const FAQSection = () => {
  const [openItem, setOpenItem] = useState(null);
  const [expandAll, setExpandAll] = useState(false);

  const handleItemClick = (index) => {
    if (expandAll) {
      setExpandAll(false);
    }
    setOpenItem(openItem === index ? null : index);
  };

  const toggleExpandAll = () => {
    setExpandAll(!expandAll);
    setOpenItem(null);
  };

  const faqs = [
    {
      question: "Do I need to pay for Goldie?",
      answer: "Goldie offers both free and premium plans. You can start with our free plan and upgrade anytime for additional features."
    },
    {
      question: "Can I pay yearly instead of monthly?",
      answer: "Yes! We offer annual billing with a discount compared to monthly billing. You can switch between billing periods at any time."
    },
    {
      question: "Do I need to pay extra for reminders?",
      answer: "Basic reminders are included in all plans. Premium features like custom reminder schedules are available in paid plans."
    },
    {
      question: "How much do I have to pay for additional text messages?",
      answer: "Text message credits can be purchased separately. Pricing varies based on volume and your subscription plan."
    },
    {
      question: "Do I need a credit card to sign up?",
      answer: "No credit card is required to sign up for our free plan. You'll only need to provide payment information when upgrading to a paid plan."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-black">FAQs</h2>
        <button
          onClick={toggleExpandAll}
          className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded-full font-medium flex items-center gap-2 transition-colors"
        >
          Expand all
          <Plus size={20} className={expandAll ? 'rotate-45' : ''} />
        </button>
      </div>

      <div>
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            isOpen={expandAll || openItem === index}
            onClick={() => handleItemClick(index)}
          >
            <p className="text-gray-600">{faq.answer}</p>
          </FAQItem>
        ))}
      </div>

      <div className="mt-8 text-gray-600">
        Can't find the answer here?{' '}
        <a href="/support" className="text-gray-500 hover:underline">
          Check out our Support page
        </a>
      </div>
    </div>
  );
};

export default FAQSection;