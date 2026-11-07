import { Link } from 'react-router-dom';

export default function Button({ children, variant = 'primary', to, onClick, className = '', type = 'button' }) {
  const baseStyle = "inline-flex items-center justify-center px-8 py-3.5 text-sm md:text-base font-semibold transition-all duration-300 rounded-md min-h-[44px]";
  
  const variants = {
    primary: "bg-accent-500 text-white hover:bg-accent-600 shadow-md hover:shadow-lg",
    secondary: "bg-brand-900 text-white hover:bg-brand-800 shadow-md hover:shadow-lg",
    outline: "border-2 border-brand-900 text-brand-900 hover:bg-brand-900 hover:text-white",
    outlineWhite: "border-2 border-white text-white hover:bg-white hover:text-brand-900"
  };

  const combinedClasses = `${baseStyle} ${variants[variant]} ${className}`;

  if (to) {
    return <Link to={to} className={combinedClasses}>{children}</Link>;
  }
  return <button type={type} onClick={onClick} className={combinedClasses}>{children}</button>;
}