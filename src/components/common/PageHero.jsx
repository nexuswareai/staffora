import { motion } from 'framer-motion';

export default function PageHero({ title, subtitle, bgImage }) {
  return (
    <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={bgImage} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-950/80 mix-blend-multiply"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 font-light"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}