import { motion } from 'framer-motion';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import { servicesData } from '../data/services';
import { Check } from 'lucide-react';
import Button from '../components/common/Button';

export default function Services() {
  return (
    <div className="pt-0">
      <PageHero title="Our Services" subtitle="Specialized Recruitment Solutions" bgImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80" />
      <div className="py-24 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionHeading title="Industry Specializations" subtitle="Where We Focus" centered />
          <p className="text-gray-600 text-lg leading-relaxed mt-6">We offer targeted recruitment services across five primary domains, leveraging our deep industry knowledge to source candidates who meet your exact operational requirements.</p>
        </div>
        <div className="space-y-32">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={service.id} className={`flex flex-col gap-12 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <motion.div initial={{ opacity: 0, x: isEven ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="w-full lg:w-1/2">
                  <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                    <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-brand-900/10 transition-colors"></div>
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: isEven ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="w-full lg:w-1/2 lg:px-8">
                  <div className="w-16 h-16 rounded-xl bg-brand-50 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-accent-500" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-6">{service.title}</h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">{service.description}</p>
                  <div className="bg-brand-50 p-8 rounded-xl border border-gray-100">
                    <h4 className="font-semibold text-brand-900 mb-6 uppercase tracking-wider text-sm">Key Roles We Place:</h4>
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {service.functions.map((func, i) => (
                        <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" /><span className="text-gray-700">{func}</span></li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
      <section className="py-24 bg-brand-950 text-center px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Looking to Build Your Team?</h2>
          <p className="text-gray-300 text-lg mb-10">Connect with our industry specialists to discuss your unique hiring requirements.</p>
          <Button to="/contact" variant="primary">Contact Our Specialists</Button>
        </div>
      </section>
    </div>
  )
}