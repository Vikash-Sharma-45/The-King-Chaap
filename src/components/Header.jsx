import { Utensils } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const Header = () => {
    const navigate = useNavigate();
    
    return (
        <section className="flex items-center justify-around p-4 bg-white">
            <nav className='flex items-center gap-2'>
                <Utensils className="bg-orange-600 text-white p-1 size-8 rounded-lg"/>
                <Link to="/"><h1 className='font-bold text-2xl'>THE KING CHAAP</h1></Link> 
            </nav>

            <nav className='flex gap-8 text-lg font-medium'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/franchise">Franchise</Link>
            </nav>

            <button 
                onClick={() => navigate('/franchise')}
                className='bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-orange-700 transition'
            >
                Book Franchise
            </button>
        </section>
    );
};

export default Header;
