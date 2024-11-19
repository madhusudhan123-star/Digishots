import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import logo from '../assets/logo.svg'
const Footer = () => {
    const services = [
        "Digital Marketing",
        "Social Media",
        "Content Creation",
        "SEO Services",
        "Web Development",
        "Brand Strategy"
    ];

    const company = [
        "About Us",
        "Our Team",
        "Careers",
        "Contact Us",
        "Privacy Policy",
        "Terms of Service"
    ];

    const contactInfo = {
        email: "info@digishots.com",
        phone: "+1 (123) 456-7890",
        address: "123 Digital Street, Marketing Valley, MV 12345"
    };

    return (
        <footer className="bg-[#0b125f] text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-6">
                        {/* Logo */}
                        <div className="mb-6">
                            <img
                                src={logo}
                                alt="Digishots Logo"
                                className="h-12 w-auto"
                            />
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Empowering brands with innovative digital solutions.
                            We create, design, and execute strategies that drive growth
                            and enhance your digital presence.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                                    >
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Company</h3>
                        <ul className="space-y-3">
                            {company.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-gray-300" />
                                <a
                                    href={`mailto:${contactInfo.email}`}
                                    className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                                >
                                    {contactInfo.email}
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-gray-300" />
                                <a
                                    href={`tel:${contactInfo.phone}`}
                                    className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                                >
                                    {contactInfo.phone}
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="text-gray-300 mt-1" />
                                <span className="text-gray-300 text-sm">
                                    {contactInfo.address}
                                </span>
                            </li>
                        </ul>

                        {/* Social Media Icons */}
                        <div className="mt-6">
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                                    <Twitter size={20} />
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                                    <Instagram size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-300 text-sm">
                            © {new Date().getFullYear()} Digishots. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-300">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-300">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-300">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;