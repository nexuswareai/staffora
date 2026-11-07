import { motion } from 'framer-motion';
import { ArrowRight, Globe, Users, Briefcase, CheckCircle, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import SectionHeading from '../components/common/SectionHeading';
import { servicesData } from '../data/services';

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

export default function Home() {
  return (
    <div>
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" alt="Corporate Environment" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-brand-950/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 md:px-8 max-w-5xl mx-auto mt-20">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-[1.15]">
            Connecting Exceptional Talent with Opportunity
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-lg md:text-2xl text-gray-200 mb-10 font-light max-w-3xl mx-auto leading-relaxed">
            STAFFORA is your trusted international recruitment partner, specializing in placing premium professionals across key global industries.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button to="/contact" variant="primary" className="w-full sm:w-auto">Hire Talent</Button>
            <Button to="/careers" variant="outlineWhite" className="w-full sm:w-auto bg-white/5 backdrop-blur-sm">Explore Opportunities</Button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <SectionHeading title="Specialist Recruitment Expertise" subtitle="About Staffora" />
            <div className="text-gray-600 space-y-6 text-lg leading-relaxed">
              <p>Staffora is a premier recruitment firm committed to connecting the right talent with the right opportunities. With a deep understanding of international business standards, we ensure trust, transparency, and excellence in every placement.</p>
              <p>Driven by professionals with extensive experience, we bring profound industry knowledge to our core specializations in Travel, Tourism, Hospitality, and Aviation sectors.</p>
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 mt-8 text-brand-900 font-semibold hover:text-accent-500 transition-colors group">
              Discover Our Story <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80" alt="Professional meeting" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-brand-50 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Our Industry Specializations" subtitle="Where We Excel" centered />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {servicesData.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.id} variants={fadeInUp} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <div className="w-14 h-14 bg-brand-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-900 transition-colors">
                    <Icon className="w-7 h-7 text-brand-900 group-hover:text-accent-500 transition-colors" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-brand-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-2">{service.description}</p>
                  <Link to="/services" className="text-accent-500 font-medium inline-flex items-center gap-1 group-hover:text-brand-900 transition-colors">Learn more <ArrowRight className="w-4 h-4" /></Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div className="order-2 lg:order-1 grid grid-cols-2 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {[
              { icon: Briefcase, title: "Industry Expertise" },
              { icon: Users, title: "Personalized Service" },
              { icon: CheckCircle, title: "Quality Screening" },
              { icon: Globe, title: "International Presence" }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} variants={fadeInUp} className="bg-brand-50 p-6 rounded-xl text-center hover:bg-brand-900 hover:text-white transition-colors group">
                  <Icon className="w-10 h-10 mx-auto text-accent-500 mb-4 group-hover:text-white transition-colors" />
                  <h4 className="font-semibold">{item.title}</h4>
                </motion.div>
              )
            })}
          </motion.div>
          <motion.div className="order-1 lg:order-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <SectionHeading title="Why Partner With Us?" subtitle="The Staffora Advantage" />
            <p className="text-gray-600 text-lg leading-relaxed mb-8">We go beyond matching resumes to job descriptions. We build relationships, understand corporate cultures, and source candidates who will thrive and contribute to your organization's long-term success.</p>
            <ul className="space-y-4">
              {['Rigorous candidate vetting process', 'Deep sector-specific knowledge', 'Commitment to long-term partnerships', 'Agile and transparent communication'].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-900 font-medium">
                  <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-brand-950 text-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Our Recruitment Process" subtitle="How We Work" centered light />
          <div className="mt-20 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-brand-800 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              {[
                { step: "01", title: "Understand", desc: "Analyzing your specific business needs and culture." },
                { step: "02", title: "Source", desc: "Identifying top talent through our global network." },
                { step: "03", title: "Screen", desc: "Rigorous interviews and skill assessments." },
                { step: "04", title: "Shortlist", desc: "Presenting only the most qualified candidates." },
                { step: "05", title: "Select", desc: "Assisting with final interviews and onboarding." }
              ].map((process, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-brand-900 rounded-xl p-8 border border-brand-800 relative hover:-translate-y-2 transition-transform text-center">
                  <div className="w-12 h-12 rounded-full bg-accent-500 text-brand-950 font-bold text-xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-accent-500/20">{process.step}</div>
                  <h4 className="text-lg font-bold mb-3">{process.title}</h4>
                  <p className="text-gray-400 text-sm">{process.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeading title="Global Reach, Local Expertise" subtitle="Our Locations" centered />
          <div className="flex flex-col sm:flex-row justify-center gap-8 md:gap-16 mt-12">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex flex-col items-center group">
              <div className="w-24 h-24 rounded-full bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-900 transition-colors">
                <MapPin className="w-10 h-10 text-brand-900 group-hover:text-accent-500 transition-colors" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-900">Cochin, India</h3>
              <p className="text-gray-500 mt-2">Regional Operations Hub</p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col items-center group">
              <div className="w-24 h-24 rounded-full bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-900 transition-colors">
                <Globe className="w-10 h-10 text-brand-900 group-hover:text-accent-500 transition-colors" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-900">Qatar</h3>
              <p className="text-gray-500 mt-2">Middle East Presence</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-accent-500"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] mix-blend-overlay opacity-20 bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
            Let's Find the Right Talent Together.
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/contact" variant="secondary" className="w-full sm:w-auto">I am an Employer</Button>
            <Button to="/careers" variant="outlineWhite" className="w-full sm:w-auto">I am a Candidate</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}