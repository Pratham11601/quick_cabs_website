
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FAQItem from './FAQItem';

const PricingSection = () => {
  const [billingOption, setBillingOption] = useState('Annually');
  const [expandedCards, setExpandedCards] = useState({});
  const navigate = useNavigate();

  const featureLimit = 3; // Maximum number of features to show before "Read More"

  const toggleExpand = (index) => {
    setExpandedCards((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const plans = [
    {
      name: "Starter",
      priceMonthly: 0,
      priceAnnually: 0,
      featuresMonthly: [
        "20 appointments/mo",
        "One user/calendar",
        "Basic support",
        "Additional feature for testing",
      ],
      featuresAnnually: [
        "240 appointments/yr",
        "One user/calendar",
        "Priority support",
        "Extra annual benefit",
      ],
      buttonText: "Get started",
      isFree: true,
    },
    {
      name: "Pro",
      priceMonthly: 19.99,
      priceAnnually: 199.99,
      featuresMonthly: [
        "Unlimited appointments",
        "Payments (2.7% + $0.30)",
        "Basic reports",
        "More features included",
      ],
      featuresAnnually: [
        "Unlimited appointments",
        "Lower transaction fees (2.5% + $0.25)",
        "Advanced reports",
        "Priority support",
      ],
      buttonText: "Get started",
    },
    {
      name: "Pro Plus",
      priceMonthly: 39.99,
      priceAnnually: 399.99,
      featuresMonthly: [
        "Unlimited users/calendars",
        "Team management",
        "Team logins and permissions",
        "Additional team features",
      ],
      featuresAnnually: [
        "Unlimited users/calendars",
        "Team management",
        "Advanced team analytics",
        "Dedicated account manager",
      ],
      buttonText: "Get started",
    },
  ];

  return (
    <section className="bg-yellow-50 py-12 px-6 text-center">
      <h2 className="text-5xl font-bold text-gray-900 mb-4 animate__animated animate__fadeIn">
        Pricing
      </h2>
      <p className="text-gray-700 mb-8 text-lg animate__animated animate__fadeIn animate__delay-1s">
        SyncBook has affordable plans that fit your business.
      </p>

      {/* Billing Toggle */}
      <div className="inline-flex bg-white rounded-full shadow-md p-1 mb-10">
        <button
          className={`px-6 py-2 rounded-full transition-all duration-300 ease-in-out ${
            billingOption === 'Monthly' ? 'bg-yellow-200 text-gray-800' : 'text-gray-600'
          }`}
          onClick={() => setBillingOption('Monthly')}
        >
          Monthly
        </button>
        <button
          className={`px-6 py-2 rounded-full transition-all duration-300 ease-in-out ${
            billingOption === 'Annually' ? 'bg-gray-900 text-white' : 'text-gray-600'
          }`}
          onClick={() => setBillingOption('Annually')}
        >
          Annually
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3 h-auto flex flex-col justify-between hover:shadow-2xl transition-transform transform hover:scale-105 animate__animated animate__fadeIn animate__delay-2s"
          >
            <div className="bg-gray-900 text-white rounded-t-lg py-4">
              <h3 className="text-xl font-bold uppercase">{plan.name}</h3>
              <p className="text-sm mt-2">
                {plan.isFree
                  ? "The essential tools you need to start your business."
                  : "Everything you need to grow and manage your business."}
              </p>
            </div>

            <div className="py-6 flex flex-col justify-between flex-grow">
              {/* Price Section */}
              <div>
                <h4 className="text-4xl font-bold text-gray-900 mb-2">
                  {plan.isFree
                    ? "FREE"
                    : `$${billingOption === "Monthly" ? plan.priceMonthly : plan.priceAnnually} ${
                        billingOption === "Annually" ? "/YR" : "/MO"
                      }`}
                </h4>
                {!plan.isFree && billingOption === "Annually" && (
                  <p className="text-green-600 font-semibold mb-4">
                    Save {Math.round(((plan.priceMonthly * 12 - plan.priceAnnually) / (plan.priceMonthly * 12)) * 100)}% annually
                  </p>
                )}
              </div>

              {/* Features Section */}
              <ul className="text-left text-gray-600 mb-6">
                {(billingOption === "Monthly" ? plan.featuresMonthly : plan.featuresAnnually)
                  .slice(0, expandedCards[index] ? undefined : featureLimit)
                  .map((feature, idx) => (
                    <li key={idx} className="mb-1">
                      ✅ {feature}
                    </li>
                  ))}
              </ul>
              {plan.featuresMonthly.length > featureLimit && (
                <button
                  className="text-blue-600 font-semibold mb-4 self-start"
                  onClick={() => toggleExpand(index)}
                >
                  {expandedCards[index] ? "Show Less" : "Read More"}
                </button>
              )}

              {/* CTA Button */}
              <button className="bg-pink-500 text-white py-2 px-6 rounded-full font-semibold hover:bg-pink-600 transition-all duration-300 ease-in-out">
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      <br />

      <div className="bg-yellow-400 rounded-3xl p-12 max-w-5xl mx-auto animate__animated animate__fadeIn animate__delay-3s">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
            Schedule with ease
          </h1>

          <div className="max-w-2xl">
            <p className="text-xl md:text-2xl text-gray-900">
              Download the app and start booking for free with SyncBook today
            </p>
          </div>

          <button
            className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 ease-in-out"
            onClick={() => navigate('/share')}
          >
            Get started
          </button>
        </div>
      </div>
      <FAQItem />
    </section>
  );
};

export default PricingSection;
