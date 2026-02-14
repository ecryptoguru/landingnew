import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-12 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <h2 className="text-xl font-semibold mb-6">Multiasset AI & LYRA</h2>
        <p className="italic mb-12">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">1. Why This Privacy Policy Exists</h3>
          <p className="mb-4">We believe privacy is a <span className="font-bold">right, not a trade-off</span>.</p>
          <p className="mb-4">This Privacy Policy explains:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>What personal data we collect</li>
            <li>Why we collect it</li>
            <li>How we use and protect it</li>
            <li>What choices and rights you have</li>
          </ul>
          <p>We aim to be <span className="font-bold">clear, minimal, and transparent</span>.</p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">2. Who This Policy Applies To</h3>
          <p className="mb-4">This policy applies to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Visitors to our website</li>
            <li>Registered users of the Multiasset AI platform</li>
            <li>Users of AI features, including LYRA</li>
            <li>Free and paid users</li>
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">3. What Data We Collect</h3>
          <p className="mb-6">We collect <span className="font-bold">only what is necessary</span> to operate the platform.</p>
          
          <h4 className="text-xl font-bold mb-2">3.1 Information You Provide Directly</h4>
          <p className="mb-2">This may include:</p>
          <ul className="list-disc pl-6">
            <li>Name (if provided)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
