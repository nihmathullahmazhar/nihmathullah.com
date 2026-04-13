import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const RefundPolicy = () => {
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
          <div className="inline-block px-4 py-1 rounded-full bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 mb-4">
            <span className="text-red-800 dark:text-red-300 text-sm font-semibold">REFUND POLICY</span>
          </div>

        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
          <div className="bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 rounded-lg p-6">
            <p className="text-slate-700 dark:text-slate-300 text-base mb-0">
              Thank you for choosing <strong>Nihmathullah Web Services</strong>. All services provided are custom digital services, and therefore this Refund Policy applies strictly as outlined below.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-cyan-500">1.</span> Advance Payment
            </h2>
            <div className="space-y-3 text-slate-600 dark:text-slate-400">
              <p className="leading-relaxed">
                • A <strong>50% advance payment</strong> is required before the project starts.
              </p>
              <p className="leading-relaxed">
                • Once the project has commenced, the advance payment is <strong>strictly non-refundable</strong>, regardless of project cancellation, change of requirements, or delays from the client.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-cyan-500">2.</span> Service Nature
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Since website design and development involve <strong>custom work and time-based effort</strong>, refunds are not applicable once work has begun.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-cyan-500">3.</span> Project Cancellation
            </h2>
            <div className="space-y-3 text-slate-600 dark:text-slate-400">
              <p className="leading-relaxed">
                • If the client cancels the project after work has started, <strong>no refund will be issued</strong> for the advance payment.
              </p>
              <p className="leading-relaxed">
                • Any completed or partially completed work remains the property of <strong>Nihmathullah Web Services</strong> until full payment is made.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-cyan-500">4.</span> Final Payment & Delivery
            </h2>
            <div className="space-y-3 text-slate-600 dark:text-slate-400">
              <p className="leading-relaxed">
                • The remaining <strong>50% balance payment</strong> must be completed before final handover.
              </p>
              <p className="leading-relaxed">
                • No website files, source code, domain access, or hosting credentials will be released until <strong>100% payment is received and verified</strong>.
              </p>
            </div>
          </section>

          <section className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-cyan-500">📧</span> Contact
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              For any questions regarding this Refund Policy, please contact:
            </p>
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
              <p className="text-slate-700 dark:text-slate-300 text-base mb-0">
                📧 Email:{' '}
                <a 
                  href="mailto:nihmathullahmazhar@gmail.com" 
                  className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-semibold"
                >
                  nihmathullahmazhar@gmail.com
                </a>
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </section>

          {/* Important Notice */}
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-600 p-6 rounded-r-lg">
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-200 mb-2">
                  Important Notice
                </h3>
                <p className="text-red-800 dark:text-red-300 text-sm leading-relaxed mb-0">
                  All advance payments are <strong>strictly non-refundable</strong> once project work has commenced. Please ensure you have reviewed all project details and pricing before making payment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;