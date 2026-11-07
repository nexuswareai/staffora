export default function Logo({ className = "", light = false }) {
  const primaryColor = light ? "fill-white" : "fill-brand-900";
  const secondaryColor = light ? "fill-gray-200" : "fill-accent-500";

  return (
    <svg viewBox="0 0 550 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <text 
        x="0" y="60" 
        fontFamily="'Playfair Display', serif" 
        fontSize="64" 
        fontWeight="700" 
        className={primaryColor} 
        letterSpacing="2"
      >
        STAFFORA
      </text>
      <text 
        x="4" y="88" 
        fontFamily="'Inter', sans-serif" 
        fontSize="13.5" 
        fontWeight="600" 
        className={secondaryColor} 
        letterSpacing="4"
      >
        THE FUTURE OF STAFFING, SIMPLIFIED.
      </text>
    </svg>
  );
}