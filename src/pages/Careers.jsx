import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { Upload, AlertCircle, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../data/services';

export default function Careers() {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
    }, 1500);
  };

  return (
    <div className="pt-0">
      <PageHero title="Your Next Career Opportunity Starts Here" subtitle="Explore exciting roles across international industries." bgImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80" />
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionHeading title="Why Work With Us?" subtitle="Candidate Benefits" />
            <p className="text-gray-600 text-lg leading-relaxed mb-8">At Staffora, we treat candidates as our partners. We are dedicated to supporting professionals in achieving their career ambitions by connecting them with leading organizations globally.</p>
            <div className="space-y-6">
              {[
                { title: "Global Opportunities", desc: "Access roles in the Middle East, India, and beyond." },
                { title: "Industry Focus", desc: "Specialized guidance in Travel, Hospitality, Aviation, and BPO." },
                { title: "Confidentiality", desc: "Your CV and career aspirations are handled with strict privacy." },
                { title: "Career Growth", desc: "We place candidates in environments where they can thrive and advance." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-900 text-lg">{item.title}</h4>
                    <p className="text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16">
              <h3 className="text-2xl font-serif font-bold text-brand-900 mb-6">Industries We Recruit For</h3>
              <div className="flex flex-wrap gap-3">
                {servicesData.map(s => <span key={s.id} className="px-4 py-2 bg-brand-50 text-brand-900 rounded-full text-sm font-medium border border-gray-100">{s.title}</span>)}
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-brand-900 mb-2">Submit Your CV</h3>
            <p className="text-gray-500 mb-8 text-sm">Register your profile with us. Our team will contact you when suitable opportunities arise.</p>
            {formStatus === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-brand-900 mb-2">Application Received!</h4>
                <p className="text-gray-600 mb-6">Thank you for submitting your profile. Our recruitment team will review your credentials.</p>
                <Button onClick={() => setFormStatus('idle')} variant="outline">Submit Another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div><label>First Name *</label><input type="text" required placeholder="John" /></div>
                  <div><label>Last Name *</label><input type="text" required placeholder="Doe" /></div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div><label>Email Address *</label><input type="email" required placeholder="john@example.com" /></div>
                  <div><label>Phone Number *</label><input type="tel" required placeholder="+1 234 567 8900" /></div>
                </div>
                <div>
                  <label>Primary Industry *</label>
                  <select required>
                    <option value="">Select an Industry</option>
                    {servicesData.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div><label>Current Location</label><input type="text" placeholder="e.g. Dubai, UAE" /></div>
                <div>
                  <label>Upload CV/Resume *</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-accent-500 transition-colors bg-gray-50 cursor-pointer">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600 justify-center">
                        <span className="relative cursor-pointer rounded-md font-medium text-brand-900 hover:text-accent-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-accent-500">Upload a file</span>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</p>
                    </div>
                  </div>
                </div>
                
                <Button type="submit" variant="primary" className="w-full mt-6" disabled={formStatus === 'submitting'}>{formStatus === 'submitting' ? 'Submitting...' : 'Submit Profile'}</Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}