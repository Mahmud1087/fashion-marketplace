// pages/privacy-policy.tsx
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className='bg-white text-gray-800'>
      <header className='bg-gray-900 text-white py-16'>
        <div className='container mx-auto text-center'>
          <h1 className='text-4xl font-bold mb-4'>Privacy Policy</h1>
          <p className='text-xl'>
            Your privacy is important to us. Learn how we handle your data.
          </p>
        </div>
      </header>

      <section className='container mx-auto py-12 px-4 md:px-0'>
        {/* Introduction */}
        <div className='mb-12'>
          <h2 className='text-3xl font-bold mb-4'>Introduction</h2>
          <p className='mb-4'>
            Welcome to Fashion E-Marketplace. This Privacy Policy explains how
            we collect, use, and protect your personal information when you
            visit our website or use our services.
          </p>
          <p>
            By accessing our website, you agree to the collection and use of
            information as outlined in this policy.
          </p>
        </div>

        {/* Section 1: Information We Collect */}
        <div className='mb-12'>
          <h2 className='text-3xl font-bold mb-4'>1. Information We Collect</h2>
          <p className='mb-4'>We collect the following types of information:</p>
          <ul className='list-disc pl-5 mb-4'>
            <li>
              <strong>Personal Information:</strong> Includes name, email
              address, phone number, and payment information when you sign up,
              purchase a product, or interact with us.
            </li>
            <li>
              <strong>Usage Data:</strong> Includes data on how you access and
              interact with our website, such as your IP address, browser type,
              and pages visited.
            </li>
            <li>
              <strong>Cookies:</strong> We use cookies to improve your
              experience, track your preferences, and provide personalized
              content.
            </li>
          </ul>
        </div>

        {/* Section 2: How We Use Your Information */}
        <div className='mb-12'>
          <h2 className='text-3xl font-bold mb-4'>
            2. How We Use Your Information
          </h2>
          <p className='mb-4'>
            We use the information we collect for the following purposes:
          </p>
          <ul className='list-disc pl-5 mb-4'>
            <li>
              <strong>To provide services:</strong> We use your information to
              process orders, communicate with you, and offer customer support.
            </li>
            <li>
              <strong>To personalize your experience:</strong> We use your data
              to tailor your shopping experience based on your preferences.
            </li>
            <li>
              <strong>For security:</strong> We may use information to detect
              and prevent fraud or unauthorized access.
            </li>
            <li>
              <strong>For analytics:</strong> We use data to understand how our
              platform is used and to make improvements.
            </li>
          </ul>
        </div>

        {/* Section 3: Sharing Your Information */}
        <div className='mb-12'>
          <h2 className='text-3xl font-bold mb-4'>
            3. Sharing Your Information
          </h2>
          <p className='mb-4'>
            We may share your information with third parties in the following
            circumstances:
          </p>
          <ul className='list-disc pl-5 mb-4'>
            <li>
              <strong>Service Providers:</strong> We share data with trusted
              service providers who help us operate our platform (e.g., payment
              processors, shipping companies).
            </li>
            <li>
              <strong>Legal Compliance:</strong> We may disclose your
              information if required to do so by law or to protect our rights.
            </li>
          </ul>
        </div>

        {/* Section 4: Protecting Your Information */}
        <div className='mb-12'>
          <h2 className='text-3xl font-bold mb-4'>
            4. Protecting Your Information
          </h2>
          <p className='mb-4'>
            We implement industry-standard security measures to protect your
            personal data. However, no method of transmission over the internet
            is 100% secure. We cannot guarantee the absolute security of your
            data.
          </p>
        </div>

        {/* Section 5: Your Data Rights */}
        <div className='mb-12'>
          <h2 className='text-3xl font-bold mb-4'>5. Your Data Rights</h2>
          <p className='mb-4'>
            You have the right to access, update, or delete your personal
            information. You can also opt-out of certain data processing
            activities by contacting us at the email below.
          </p>
        </div>

        {/* Section 6: Changes to This Policy */}
        <div className='mb-12'>
          <h2 className='text-3xl font-bold mb-4'>6. Changes to This Policy</h2>
          <p className='mb-4'>
            We may update this Privacy Policy from time to time. When we do, we
            will post the revised policy on this page and update the “Last
            Updated” date.
          </p>
        </div>

        {/* Contact Section */}
        <div className='text-center'>
          <h2 className='text-3xl font-bold mb-4'>Contact Us</h2>
          <p className='mb-4'>
            If you have any questions or concerns about our Privacy Policy,
            please contact us at:
          </p>
          <p className='mb-4 font-semibold'>
            Email: privacy@fashionmarketplace.com
          </p>
          <Link href='/contact'>
            <Button className='bg-blue-600 text-white px-6 py-2 mt-4'>
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
