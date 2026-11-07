import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { MapPin, Mail, Phone, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.target);
    
    // Pulling the secret key from your .env file!
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setFormStatus('success');
        e.target.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus('error');
    }
  };

  return (
    <div className="pt-0">
      <PageHero 
        title="Let's Find the Right Talent Together" 
        subtitle="Whether you are an organization looking to hire or a professional exploring new career opportunities, Staffora is here to help." 
        bgImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80" 
      />
      
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Details Column */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-1 space-y-8">
            <SectionHeading title="Get in Touch" subtitle="Contact Information" />
            
            <div className="space-y-6 bg-brand-50 p-8 rounded-2xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                  <Mail className="w-5 h-5 text-accent-500" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900 mb-1">Email Us</h4>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-600 hover:text-accent-500 transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                  <Phone className="w-5 h-5 text-accent-500" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900 mb-1">Call Us</h4>
                  <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="text-gray-600 hover:text-accent-500 transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                  <Clock className="w-5 h-5 text-accent-500" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900 mb-1">Business Hours</h4>
                  <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Unified Contact Form Column */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 h-full">
              
              <h3 className="text-2xl font-serif font-bold text-brand-900 mb-8">Send an Enquiry</h3>

              {formStatus === 'success' ? (
                <div className="py-12 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-8">Thank you for reaching out. A representative from Staffora will contact you shortly.</p>
                  <Button onClick={() => setFormStatus('idle')} variant="outline">Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name">Full Name *</label>
                      <input id="name" name="name" type="text" required placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email">Email Address *</label>
                      <input id="email" name="email" type="email" required placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone">Phone Number</label>
                      <input id="phone" name="phone" type="tel" placeholder="+1 234 567 8900" />
                    </div>
                    <div>
                      <label htmlFor="company">Company Name (Optional)</label>
                      <input id="company" name="company" type="text" placeholder="e.g. Acme Corp" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message">Message / Enquiry Details *</label>
                    <textarea id="message" name="message" required rows="6" placeholder="How can we assist you?"></textarea>
                  </div>

                  {formStatus === 'error' && (
                    <div className="bg-red-50 p-4 rounded-lg flex items-start gap-3 mt-4 text-red-800 text-sm">
                      Something went wrong. Please check your network connection and try again.
                    </div>
                  )}

                  <Button type="submit" variant="primary" className="w-full md:w-auto px-12">
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
