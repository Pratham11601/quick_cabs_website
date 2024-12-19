import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-lg text-gray-700 mb-6">
          At SyncBook, we value your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
          <p className="text-gray-700">
            We collect personal information that you provide to us, such as your name, email address, and any other details you provide when registering for an account or using our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700">
            We use your personal information to provide and improve our services, communicate with you, process transactions, and send important updates related to your account and services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Protect Your Information</h2>
          <p className="text-gray-700">
            We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of electronic transmission or storage is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Sharing Your Information</h2>
          <p className="text-gray-700">
            We do not sell or rent your personal information to third parties. We may share your information with trusted partners who help us operate our website or provide services to you, but they are obligated to keep your information confidential.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Cookies</h2>
          <p className="text-gray-700">
            We use cookies to enhance your user experience, analyze website traffic, and personalize content. You can control the use of cookies through your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Rights</h2>
          <p className="text-gray-700">
            You have the right to access, correct, or delete your personal information. You can also request that we stop processing your data by contacting us at support@syncbook.com.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Changes to This Policy</h2>
          <p className="text-gray-700">
            We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page, and your continued use of the website constitutes acceptance of the revised policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:support@syncbook.com" className="text-blue-500 hover:underline">support@syncbook.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
