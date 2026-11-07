export default function SectionHeading({ title, subtitle, centered = false, light = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <span className={`font-semibold tracking-wider uppercase text-sm mb-3 block ${light ? 'text-accent-400' : 'text-accent-500'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-bold ${light ? 'text-white' : 'text-brand-900'}`}>
        {title}
      </h2>
      <div className={`h-1 w-24 bg-accent-500 mt-6 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
}