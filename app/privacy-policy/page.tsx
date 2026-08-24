import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              VektorStore ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website vektorstore.com and use our services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We collect information you provide directly to us when you create an account, make a purchase, or contact us. This includes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Name and contact information (email address, phone number, shipping address)</li>
              <li>Payment information (processed securely through PayPal)</li>
              <li>Account credentials (username, password)</li>
              <li>Order history and preferences</li>
              <li>Communications you send to us (e.g., customer support messages)</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              We also automatically collect certain information about your device and how you interact with our site, including IP address, browser type, operating system, referring pages, and usage patterns.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Processing and fulfilling your orders</li>
              <li>Providing customer support and responding to your inquiries</li>
              <li>Sending you order confirmations and shipping notifications</li>
              <li>Improving our website, products, and services</li>
              <li>Analyzing usage patterns to enhance user experience</li>
              <li>Detecting and preventing fraud or unauthorized transactions</li>
              <li>Complying with legal obligations</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Payment Processing</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use PayPal as our third-party payment processor. When you make a purchase, your payment information is processed securely by PayPal. We do not store your complete credit card information on our servers.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              PayPal's privacy policy governs the use of your payment information. By using our services, you agree to PayPal's terms and privacy policy. We encourage you to review PayPal's privacy policy at paypal.com.
            </p>
            <p className="text-gray-600 leading-relaxed">
              PayPal may use your information in accordance with their own privacy policy. We are not responsible for the privacy practices of PayPal or any other third-party payment processors.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our site.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Essential cookies: Required for the site to function properly</li>
              <li>Analytics cookies: Help us understand how visitors use our site</li>
              <li>Preference cookies: Remember your settings and preferences</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Information Sharing</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Service providers who assist us in operating our website (e.g., hosting, analytics)</li>
              <li>Payment processors (PayPal) for transaction processing</li>
              <li>Shipping partners to deliver your orders</li>
              <li>Law enforcement or government authorities when required by law</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              These third parties are obligated to protect your information and are prohibited from using it for any other purpose.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Data Security</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className="text-gray-600 leading-relaxed">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>The right to access and obtain a copy of your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to object to processing of your personal information</li>
              <li>The right to data portability</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Children's Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete such information.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date. You are advised to review this privacy policy periodically for any changes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about this privacy policy or our privacy practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-2">
                <strong>Email:</strong> privacy@vektorstore.com
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Phone:</strong> 1-800-VEKTOR
              </p>
              <p className="text-gray-600">
                <strong>Address:</strong> VektorStore, 123 Fashion Avenue, New York, NY 10001
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
