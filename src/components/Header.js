import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.svg';
import headimg from '../assets/header.jpeg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Solutions', href: '#services' },
        { name: 'Blogs', href: '#' },
        { name: 'Teams', href: '#' },
        { name: 'About Us', href: '#' }
    ];

    return (
        <div className="min-h-screen bg-blue-600">
            {/* Navigation */}
            <nav className="bg-white p-4 sticky top-0 z-50 shadow-md">
                <div className="container mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-xl font-bold text-blue-900">
                        <img
                            src={logo}
                            alt="Company Logo"
                            className="h-10 w-auto"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#"
                            className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors duration-200"
                        >
                            Contact Us
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6 text-gray-600" />
                        ) : (
                            <Menu className="w-6 h-6 text-gray-600" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`
                    lg:hidden fixed inset-x-0 bg-white shadow-md transition-all duration-300 ease-in-out
                    ${isMenuOpen ? 'top-[72px] opacity-100' : '-top-full opacity-0'}
                `}>
                    <div className="container mx-auto px-4 py-4 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block text-gray-600 hover:text-blue-600 py-2 transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#"
                            className="block w-full text-center bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="container mx-auto px-4 pt-5 pb-8 md:py-12 lg:py-16">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                    {/* Text Content */}
                    <div className="lg:w-1/2 text-white">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            We create customized digital strategies to grow your business.
                        </h1>
                        <p className="text-base sm:text-lg mb-4 leading-relaxed opacity-90">
                            With 20 years of expertise in storytelling, we have honed
                            the craft of storytelling across various mediums — whether
                            through TVCs, digital ads, & Corporate films. Through
                            these stories, we create memorable moments that help
                            create emotional engagement. A brand's story isn't just
                            about its product; it's about the values, emotions, and
                            experiences that define it.
                        </p>
                        <p className="text-base sm:text-lg leading-relaxed opacity-90">
                            In today's competitive and digital-first world, storytelling
                            involves creating moments that audiences can relate to and
                            feel invested in. Digital-to-create, natural language,
                            tactile & dynamic and data-driven tactics enable marketers
                            to attract significant attention, strike a balance between
                            immediate and long-term objectives, and optimize efforts in
                            the dynamic business environment of today.
                        </p>
                        <button className='bg-orange-400 py-4 px-10 text-xl rounded-lg'> <a href="#services">Explore</a></button>
                    </div>

                    {/* Hero Image */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative w-full aspect-square max-w-lg mx-auto">
                            <img
                                src={headimg}
                                alt="Digital Marketing Illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;