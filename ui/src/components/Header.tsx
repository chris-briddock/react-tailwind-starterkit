import React from 'react';
import { useTheme } from '../ThemeContext';

const Header: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className={`bg-${theme === 'dark' ? 'black' : 'white'} text-${theme === 'dark' ? 'white' : 'gray-800'} shadow-md`}>
            <div className="container mx-auto flex justify-between items-center py-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Sample Text</h1>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#" className={`hover:text-gray-300 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Home</a></li>
                        <li><a href="#" className={`hover:text-gray-300 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Shop</a></li>
                        <li><a href="#" className={`hover:text-gray-300 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>About</a></li>
                        <li><a href="#" className={`hover:text-gray-300 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Contact</a></li>
                    </ul>
                </nav>
                <button onClick={toggleTheme} className={`text-sm font-semibold focus:outline-none ${theme === 'dark' ? 'text-white' : 'text-gray-700'} ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
                    {theme === 'dark' ? 'Light Theme' : 'Dark Theme'}
                </button>
            </div>
        </header>
    );
};

export default Header;