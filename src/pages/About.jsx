import { motion } from 'framer-motion';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import { CheckCircle } from 'lucide-react';

const values = [
  { title: "Integrity", desc: "Building relationships through honesty and transparency." },
  { title: "Expertise", desc: "Understanding industry-specific recruitment requirements." },
  { title: "Commitment", desc: "Delivering dedicated and professional recruitment services." },
  { title: "Quality", desc: "Focusing on skills, experience and candidate suitability." },
  { title: "Relationships", desc: "Creating lasting connections with clients and candidates." }
];

export default function About() {
  return (
    <div className="pt-0">
      <PageHero title="About Us" subtitle="Your Trusted Recruitment Partner" bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" />
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SectionHeading title="Who We Are" subtitle="About Staffora" />
            <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
              <p>Staffora is a specialist recruitment firm committed to connecting the right talent with the right opportunities.</p>
              <p>With a team comprising professionals experienced in the Travel, Tourism and Hospitality sectors, we bring industry knowledge and practical understanding to every recruitment assignment.</p>
              <p>We specialize in sourcing and placing qualified professionals across various business functions, from entry-level positions to senior management.</p>
              <p>Our approach is built on industry expertise, personalized service and long-term professional relationships.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" alt="Corporate office team" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-brand-900/10"></div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-brand-950 text-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-brand-900 p-10 md:p-14 rounded-2xl border border-brand-800">
            <h3 className="text-3xl font-serif font-bold mb-6 flex items-center gap-4"><span className="w-12 h-12 rounded-full bg-accent-500/20 text-accent-500 flex items-center justify-center text-sm uppercase tracking-widest">01</span> Our Vision</h3>
            <p className="text-gray-300 leading-relaxed text-lg">To become a trusted recruitment partner across regional and international markets by connecting exceptional talent with leading organizations and creating opportunities for sustainable business and career growth.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-brand-900 p-10 md:p-14 rounded-2xl border border-brand-800">
            <h3 className="text-3xl font-serif font-bold mb-6 flex items-center gap-4"><span className="w-12 h-12 rounded-full bg-accent-500/20 text-accent-500 flex items-center justify-center text-sm uppercase tracking-widest">02</span> Our Mission</h3>
            <p className="text-gray-300 leading-relaxed text-lg">To deliver reliable, efficient and industry-focused recruitment solutions by understanding our clients' needs, identifying the right talent and supporting professionals in achieving their career ambitions.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <SectionHeading title="Our Core Values" subtitle="What Drives Us" centered />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {values.map((v, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-10 border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-1">
              <CheckCircle className="w-12 h-12 text-accent-500 mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-serif font-bold text-brand-900 mb-4">{v.title}</h4>
              <p className="text-gray-600 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}