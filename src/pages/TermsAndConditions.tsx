import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020202] text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link 
          to="/web-services" 
          className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Web Services
        </Link>

        <div className="mb-8">
          <div className="inline-block px-4 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-700 mb-4">
            <span className="text-amber-800 dark:text-amber-300 text-sm font-semibold">⚠️ TERMS & CONDITIONS</span>
          </div>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
          <div className="bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 rounded-lg p-6">
            <p className="text-slate-700 dark:text-slate-300 text-base mb-0">
              By engaging the services of <strong>Nihmathullah Web Services</strong>, you agree to the following Terms & Conditions.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-cyan-500">1.</span> Advance Payment
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              A <strong>50% advance payment</strong> is required to commence the project. Work will begin only after the advance payment is received and confirmed.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-cyan-500">2.</span> Non-Refundable Payment
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              All advance payments are <strong>strictly non-refundable</strong> once the project has started, irrespective of project cancellation, delays, or changes in requirements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-cyan-500">3.</span> Delivery Timeline
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Standard project delivery is between <strong>7–14 business days</strong>, depending on the project scope, complexity, and timely submission of required content by the client. Any delays in content submission or scope changes may extend the delivery timeline.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-cyan-500">4.</span> Final Handover
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              All website files, source code, live deployment access, domain, and hosting credentials will be handed over only after <strong>100% of the total project payment</strong> is received and verified.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-cyan-500">5.</span> Scope of Work
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              This agreement covers only the services explicitly mentioned in the quotation. Any additional pages, features, integrations, or changes beyond the agreed scope will require a separate quotation and approval.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-cyan-500">6.</span> Exclusions (Unless Stated Otherwise)
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              The following are <strong>not included</strong> unless explicitly stated in your package:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 ml-4">
              <li>Third-party paid tools or plugins</li>
              <li>Advanced backend functionality</li>
              <li>Content writing</li>
              <li>Photography</li>
              <li>Custom graphics</li>
              <li>Ongoing maintenance beyond the free period</li>
              <li>Domain or hosting renewal after the free 1-year period</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-cyan-500">7.</span> Revisions
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              The number of revisions included depends on the package selected and will be clearly mentioned in the quotation. Any revisions beyond the included limit or major scope changes will be charged separately.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-cyan-500">8.</span> Domain & Hosting (If Included)
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Free domain and hosting (if offered) are provided for <strong>1 year only</strong>. Renewal after the first year will be charged separately at prevailing rates.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-cyan-500">9.</span> Client Responsibilities
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              The client must provide all required content (text, images, logos, menu, contact details) within <strong>48 hours</strong> of project commencement. Failure to do so may affect delivery timelines.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-cyan-500">10.</span> Payment Methods
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Payments may be made via <strong>Bank Transfer, PayHere, PayPal, Wise</strong>, or other mutually agreed methods. Payment confirmation must be shared after transfer.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-cyan-500">11.</span> Agreement
            </h2>
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
              <p className="text-slate-700 dark:text-slate-300 text-base mb-0">
                By proceeding with payment, the client confirms that they have <strong>read, understood, and agreed</strong> to these Terms & Conditions.
              </p>
            </div>
          </section>

          <section className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              For questions about these Terms, please contact us at{' '}
              <a 
                href="mailto:nihmathullahmazhar@gmail.com" 
                className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-semibold"
              >
                nihmathullahmazhar@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;