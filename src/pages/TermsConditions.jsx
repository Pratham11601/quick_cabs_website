import React from 'react';

const TermsConditions = () => {
  return (
    <div className="bg-white text-gray-900 py-16 px-6 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center bg-yellow-50 py-4 px-6 rounded-md w-full">
          Terms and Conditions
        </h1>
        <p className="text-lg text-gray-700 mb-12 text-center py-4 px-6 rounded-md w-full">
          Welcome to SyncBook! By accessing and using our website, you agree to comply with the following terms and conditions.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            These terms and conditions govern your use of our website, services, and products. By accessing the SyncBook website, you agree to these terms. If you disagree with any part of the terms, you must not use our website.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Use of the Website</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            You agree to use the SyncBook website for lawful purposes only. You may not use the website in any way that could harm, disable, or disrupt the functionality of the website or interfere with any other user’s enjoyment.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Account Registration</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            To access certain features of the website, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Privacy</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            Your use of our website is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Intellectual Property</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            All content, graphics, logos, and trademarks on the SyncBook website are the property of SyncBook and are protected by intellectual property laws. You may not copy, reproduce, or distribute any content without our written permission.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Limitation of Liability</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            SyncBook is not liable for any damages resulting from your use or inability to use the website or services. We do not guarantee the accuracy, completeness, or availability of the website at all times.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Changes to the Terms</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            We reserve the right to update or modify these terms and conditions at any time. Any changes will be posted on this page, and your continued use of the website constitutes acceptance of the revised terms.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Governing Law</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            These terms and conditions are governed by the laws of the jurisdiction in which SyncBook operates. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in that jurisdiction.
          </p>
        </section>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700">
            If you have any questions regarding these terms and conditions, please contact us at <a href="mailto:support@syncbook.com" className="text-blue-500 hover:underline">support@syncbook.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
