import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-9xl font-serif font-bold text-brand-900 opacity-20">404</h1>
      <h2 className="text-3xl font-serif font-bold text-brand-900 mt-4 mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <Button to="/" variant="primary">Return Home</Button>
    </div>
  )
}