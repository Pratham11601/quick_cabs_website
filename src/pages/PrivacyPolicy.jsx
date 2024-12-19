import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-gray-900 py-16 px-6 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center bg-yellow-50 py-4 px-6 rounded-md w-full">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-700 mb-12 text-center  py-4 px-6 rounded-md w-full">
          At SyncBook, we respect your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            We collect personal information that you provide to us when registering for an account, interacting with our services, or submitting forms. This includes your name, email address, and any other relevant data.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            Your information helps us provide and improve our services, communicate with you about account updates, and process transactions efficiently. We may also use your data for marketing and promotional purposes with your consent.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Protect Your Information</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, and destruction. While no system can be entirely secure, we are committed to safeguarding your privacy.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Sharing Your Information</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted partners who help us operate our services, but they are obligated to maintain confidentiality and not use it for unauthorized purposes.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Cookies</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            We use cookies to enhance your user experience, analyze website traffic, and personalize content. You have the option to manage or disable cookies through your browser settings.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Rights</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            You have the right to access, update, or delete your personal information. If you wish to stop processing your data, or if you have any questions about your information, please contact us directly at <a href="mailto:support@syncbook.com" className="text-blue-500 hover:underline">support@syncbook.com</a>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Changes to This Policy</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            We reserve the right to update this Privacy Policy at any time. Any changes will be reflected on this page, and your continued use of the website indicates acceptance of the updated policy.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact Us</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            If you have any questions or concerns regarding our Privacy Policy, please reach out to us at <a href="mailto:support@syncbook.com" className="text-blue-500 hover:underline">support@syncbook.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
