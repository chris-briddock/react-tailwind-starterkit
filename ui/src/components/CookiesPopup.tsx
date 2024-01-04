import React, { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';
import { Link } from 'react-router-dom';

const CookiesPopup: React.FC = () => {
    const { theme } = useTheme();
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const hasAcceptedCookies = localStorage.getItem('acceptedCookies');
        if (hasAcceptedCookies) {
            setIsVisible(false);
        }
    }, []);

    const closePopup = () => {
        setIsVisible(false);
        localStorage.setItem('acceptedCookies', 'true');
    };

    const handleLearnMore = () => {
        window.location.href = '/privacy-policy';
    };

    return (
        <>
            {isVisible && (
                <div
                    className={`fixed bottom-4 right-4 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-800'} p-4 rounded shadow-lg`}
                >
                    <p className="text-sm">
                        We use cookies to ensure you get the best experience on our website. By using our website, you agree to our{' '}
                        <Link to="/privacy-policy" className="underline">
                            Privacy Policy
                        </Link>
                        .
                    </p>
                    <div className="flex justify-end mt-2">
                        <button
                            onClick={closePopup}
                            className={`text-sm underline cursor-pointer mr-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
                        >
                            Got it!
                        </button>
                        <button
                            onClick={handleLearnMore}
                            className={`text-sm font-semibold py-1 px-3 rounded ${theme === 'dark' ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'
                                } hover:bg-opacity-80 focus:outline-none`}
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default CookiesPopup;