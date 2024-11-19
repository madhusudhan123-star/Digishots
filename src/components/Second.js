import React, { useState } from 'react';
import { X } from 'lucide-react';

const Second = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const services = [
        {
            title: "Strategy",
            description: "Brands become more human when they're accessible and responsible"
        },
        {
            title: "Concept",
            description: "We create your strategical branding developing & develop a digital ecosystem"
        },
        {
            title: "Design",
            description: "We deliver effective digital brand strategies, identities, and platforms"
        },
        {
            title: "Execution",
            description: "We craft digital brand experiences people understand and embrace"
        }
    ];

    const serviceButtons = [
        "Social Media Management",
        "Pay per click Advertising",
        "Paid Advertising",
        "Content Marketing",
        "Email Marketing",
        "Web Development",
        "Graphic Design, Iconography and Illustrations",
        "Film Production, Ads and AVs",
        "Campaign Planning",
        "New Brand Launch and Rebranding"
    ];

    return (
        <>
            <section className="py-16 px-4 bg-white">
                {/* Heading Section */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-8">
                        What do you get with
                        <br />
                        Digishots
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 min-h-[200px] flex flex-col justify-between"
                            >
                                <div>
                                    <h3 className="text-xl font-serif mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Solutions Button */}
                <div className="text-center mt-12">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-blue-600 text-white px-12 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 text-lg"
                    >
                        Solutions
                    </button>
                </div>
            </section>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-[#1a237e] text-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {/* Modal Content */}
                        <div className="p-6 sm:p-8">
                            <div className="space-y-6">
                                {/* Text Content */}
                                <div className="space-y-4">
                                    <p className="text-sm sm:text-base leading-relaxed">
                                        From creative video production to strategic digital marketing, we offer complete solutions for your brand's success. Our video content is designed to communicate your brand's narrative in a compelling and engaging way. We seamlessly integrate digital marketing to amplify your brand's reach across multiple platforms. Whether it's video ads, social media content, or search marketing, we provide all the tools you need to thrive.
                                    </p>
                                    <p className="text-sm sm:text-base leading-relaxed">
                                        Our team crafts unique brand stories that connect with your target audience and enhance your digital presence. We help you build brand recognition by combining storytelling with effective digital marketing strategies. Let us handle everything from video production to campaign management, ensuring your brand gets noticed. Our solutions are designed to elevate your brand's image, drive engagement, and boost conversions. With our expertise in both video and digital marketing, we offer a holistic approach to growing your business.
                                    </p>
                                </div>

                                {/* Service Buttons */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {serviceButtons.map((service, index) => (
                                        <button
                                            key={index}
                                            className="bg-[#2196f3] hover:bg-blue-600 text-lg text-white py-6 px-6 rounded transition-colors duration-300 text-center"
                                        >
                                            {service}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Second;