import { Utensils, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const Header = () => {
    const navigate = useNavigate();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const handleNavClick = (path) => {
        navigate(path);
        setIsMobileOpen(false);
    };
    
    return (
        <header className="w-full bg-white shadow-sm">
            <section className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Utensils className="bg-orange-600 text-white p-1 size-8 rounded-lg"/>
                    <Link to="/">
                        <h1 className='font-bold text-xl sm:text-2xl whitespace-nowrap'>
                            THE KING CHAAP
                        </h1>
                    </Link>
                </div>

                {/* Desktop Nav + CTA */}
                <div className="hidden md:flex items-center gap-8">
                    <nav className='flex items-center gap-6 text-sm sm:text-base md:text-lg font-medium'>
                        <Link to="/" className="hover:text-orange-600 transition-colors">Home</Link>
                        <Link to="/about" className="hover:text-orange-600 transition-colors">About</Link>
                        <Link to="/menu" className="hover:text-orange-600 transition-colors">Menu</Link>
                        <Link to="/franchise" className="hover:text-orange-600 transition-colors">Franchise</Link>
                    </nav>
                    <button 
                        onClick={() => navigate('/franchise')}
                        className='bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-orange-700 transition'
                    >
                        Book Franchise
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <button
                    type="button"
                    className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-600"
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    aria-label="Toggle navigation menu"
                >
                    {isMobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                </button>
            </section>

            {/* Mobile Menu */}
            {isMobileOpen && (
                <div className="md:hidden border-t border-gray-200 bg-white">
                    <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 sm:px-6 lg:px-8 text-base font-medium">
                        <button
                            className="text-left py-2 hover:text-orange-600"
                            onClick={() => handleNavClick('/')}
                        >
                            Home
                        </button>
                        <button
                            className="text-left py-2 hover:text-orange-600"
                            onClick={() => handleNavClick('/about')}
                        >
                            About
                        </button>
                        <button
                            className="text-left py-2 hover:text-orange-600"
                            onClick={() => handleNavClick('/menu')}
                        >
                            Menu
                        </button>
                        <button
                            className="text-left py-2 hover:text-orange-600"
                            onClick={() => handleNavClick('/franchise')}
                        >
                            Franchise
                        </button>
                        <button
                            className="mt-3 w-full bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-orange-700 transition"
                            onClick={() => handleNavClick('/franchise')}
                        >
                            Book Franchise
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
