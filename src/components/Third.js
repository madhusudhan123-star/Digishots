// import React from 'react';
// import seo from '../assets/seo.png';
// import ppc from '../assets/ppc.png';
// import social from '../assets/social.png';
// import content from '../assets/content.png';
// import web from '../assets/web.png';
// import email from '../assets/email.png';
// import brand from '../assets/rebrand.png';
// import video from '../assets/video.png';

// const Third = () => {
//     const seoServices = [
//         {
//             title: "Search Engine Optimization (SEO)",
//             description: "Boost your organic search visibility and drive long-term traffic to your website with our tailored SEO strategies. From keyword research to on-page optimization, link building, and content creation, we ensure that your website ranks high for relevant searches, attracting qualified visitors.",
//             features: [
//                 "Comprehensive Website Audits",
//                 "Keyword Research & Strategy",
//                 "On-page & Off-page SEO",
//                 "Local SEO",
//                 "Technical SEO",
//                 "SEO Reporting & Analytics"
//             ],
//             img: seo,
//         },
// {
//     title: "Pay-Per-Click Advertising (PPC)",
//     description: "Drive instant traffic and conversions with our highly targeted PPC campaigns. We craft campaigns across Google Ads, Facebook Ads, and other platforms, optimizing your ad spend for maximum ROI.",
//     features: [
//         "Google Ads Campaigns",
//         "Facebook, Instagram & LinkedIn Ads ",
//         "Display & Retargeting Ads",
//         "Conversion Tracking & Analytics",
//         "A/B Testing & Ad Optimization",
//     ],
//     img: ppc,
// },
// {
//     title: "Social Media Marketing",
//     description: "Engage, inform, and grow your audience on social media platforms. Our social media marketing services are designed to create connections and build brand loyalty through consistent, impactful content.",
//     features: [
//         "Social Media Strategy Development",
//         "Content Creation & Curation",
//         "Social Media Management & Monitoring",
//         "Paid Social Campaigns",
//         "Influencer Marketing",
//     ],
//     img: social
// },
// {
//     title: "Content Marketing",
//     description: "Content is king, and we make sure your brand's voice is heard. Our content marketing services focus on creating valuable, relevant content that engages your audience and drives profitable customer actions.",
//     features: [
//         "Blog Writing & Management",
//         "Infographic Design",
//         "Email Marketing Campaigns",
//         "Local SEO",
//         "Content Strategy & SEO Integration",
//     ],
//     img: content,
// },
// {
//     title: "Web Design & Development",
//     description: "Your website is your digital storefront. We create sleek, responsive, and user-friendly websites that are optimized for conversions and designed to reflect your brand's identity.",
//     features: [
//         "Custom Website Design",
//         "E-commerce Solutions",
//         "WordPress Development",
//         "Website Maintenance & Support",
//     ],
//     img: web,
// },
// {
//     title: "Email Marketing",
//     description: "Stay connected with your audience through personalized and targeted email campaigns. We design and execute email marketing strategies that keep your customers engaged and informed, driving repeat business.",
//     features: [
//         "Email Strategy Development",
//         "Automated Drip Campaigns",
//         "Newsletter Design & Content Creation",
//         "Segmentation & Personalization",
//         "Performance Analytics & Reporting",
//     ],
//     img: email,
// },
// {
//     title: "Brand Launch & Rebranding Services",
//     description: "Launching a new brand or revamping an existing one requires a strategic, creative approach to make a lasting impression. At Digishots we specialize in helping businesses establish a strong brand presence, whether you're starting from scratch or refreshing an existing brand identity. With our deep expertise in video ad production, TVCs, and digital marketing, we create cohesive, memorable campaigns that resonate with your audience and set your brand apart.",
//     features: [
//         "Brand Strategy & Positioning",
//         "Brand Identity Design",
//         "Launch Campaign Development",
//     ],
//     img: brand,
// },
// {
//     title: "Film Production, Ads and AVs",
//     description: "With two decades of experience in producing high-quality TV commercials and video ads, we understand the power of visual storytelling. Our team delivers compelling video content that resonates with your target audience, boosts engagement, and drives conversions.",
//     features: [
//         "TV Commercials (TVCs)",
//         "Corporate & Brand Videos",
//         "Product Demonstration Videos",
//         "Scriptwriting & Storyboarding",
//         "Full Video Production (Filming, Editing, Post-production)",
//     ],
//     img: video,
// }
//     ];

//     return (
//         <section className="py-16 px-4 bg-gray-100">
//             <div className="container mx-auto max-w-7xl">
//                 {/* Grid of SEO Service Cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {seoServices.map((service, index) => (
//                         <div
//                             key={index}
//                             className="bg-[#3f51b5] text-white rounded-lg p-8 hover:shadow-xl transition-shadow duration-300"
//                         >
//                             <div className='flex items-center'>
//                                 <img className='h-36 mr-4' src={service.img} />
//                                 <h3 className="text-3xl font-serif mb-4">
//                                     {service.title}
//                                 </h3>
//                             </div>
//                             <p className="text-sm leading-relaxed mb-6 text-gray-200">
//                                 {service.description}
//                             </p>
//                             <ul className="space-y-2">
//                                 {service.features.map((feature, idx) => (
//                                     <li
//                                         key={idx}
//                                         className="text-sm text-gray-200"
//                                     >
//                                         {feature}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Third;


import React, { useState } from 'react';
import Modal from 'react-modal';
import seo from '../assets/seo.png';
import ppc from '../assets/ppc.png';
import social from '../assets/social.png';
import content from '../assets/content.png';
import web from '../assets/web.png';
import email from '../assets/email.png';
import brand from '../assets/rebrand.png';
import video from '../assets/video.png';

// Bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const Third = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '800px',
            width: '90%',
            maxHeight: '90vh',
            overflow: 'auto',
            padding: '2rem',
            borderRadius: '0.5rem',
            border: 'none',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 1000,
        },
    };

    const seoServices = [
        {
            title: "Search Engine Optimization (SEO)",
            description: "Boost your organic search visibility and drive long-term traffic to your website with our tailored SEO strategies. From keyword research to on-page optimization, link building, and content creation, we ensure that your website ranks high for relevant searches, attracting qualified visitors.",
            features: [
                "Comprehensive Website Audits",
                "Keyword Research & Strategy",
                "On-page & Off-page SEO",
                "Local SEO",
                "Technical SEO",
                "SEO Reporting & Analytics"
            ],
            img: seo,
            longDescription: `Our SEO services are designed to help your business achieve sustainable growth through improved search engine visibility. We begin with a comprehensive audit of your website, analyzing technical aspects, content quality, and backlink profile. Our team then develops a customized strategy that aligns with your business goals and target audience.

We focus on both on-page and off-page optimization, ensuring your website not only ranks well but also provides value to your visitors. Our local SEO services help you dominate local search results, while our technical SEO ensures your website meets all current search engine requirements.

Regular reporting and analytics keep you informed of your campaign's progress and ROI.`
        },
        {
            title: "Pay-Per-Click Advertising (PPC)",
            description: "Generate instant results with our data-driven PPC campaigns. We optimize your ad spend across Google Ads, Facebook Ads, and more to maximize your ROI and drive conversions.",
            features: [
                "Google Ads Campaigns",
                "Social Media Ads (Facebook, Instagram & LinkedIn)",
                "Display & Retargeting Ads",
                "Conversion Tracking & Analytics",
                "A/B Testing for Ad Optimization"
            ],
            img: ppc,
            longDescription: `Our PPC services help your business drive targeted traffic and generate measurable results quickly. We create tailored campaigns that focus on specific audience segments, ensuring every dollar spent is used effectively.
        
        From crafting compelling ad copy to using advanced targeting strategies, we handle every aspect of your PPC campaigns. Regular performance tracking, optimization, and transparent reporting ensure your campaigns continuously deliver value.`
        },
        {
            title: "Social Media Marketing",
            description: "Connect with your audience and grow your brand on social media. Our strategies focus on impactful content creation and engagement to build long-term brand loyalty.",
            features: [
                "Custom Social Media Strategies",
                "Content Creation & Curation",
                "Platform Management & Monitoring",
                "Targeted Paid Social Campaigns",
                "Influencer Partnerships"
            ],
            img: social,
            longDescription: `Social media is more than just posts; it’s about creating meaningful connections with your audience. Our services cover everything from content creation to strategy development, ensuring your brand stays active and relevant.
        
        Whether it’s organic engagement or paid campaigns, we help you stand out on platforms like Instagram, Facebook, LinkedIn, and TikTok. Let us help you turn followers into loyal customers with authentic and consistent communication.`
        },
        {
            title: "Content Marketing",
            description: "Attract and retain your audience with valuable, high-quality content. We create strategies that align with your brand’s goals, driving engagement and profitable actions.",
            features: [
                "Blog Writing & SEO Integration",
                "Infographic Design",
                "Email Marketing Campaigns",
                "Content Strategy Development",
                "Multimedia Content Production"
            ],
            img: content,
            longDescription: `Our content marketing services are tailored to showcase your expertise and solve your audience’s problems. By producing valuable and engaging content, we help you attract new customers and nurture existing ones.
        
        From SEO-friendly blogs to multimedia assets like infographics and videos, our team ensures your brand consistently delivers impactful messaging. Let us create a strategy that drives measurable results.`
        },
        {
            title: "Web Design & Development",
            description: "Turn your ideas into reality with sleek, responsive, and user-friendly websites. We create designs that captivate your audience and drive conversions.",
            features: [
                "Custom Website Design",
                "E-commerce Development",
                "WordPress Customization",
                "Ongoing Maintenance & Support"
            ],
            img: web,
            longDescription: `Your website is often the first impression of your brand, and we make sure it’s a memorable one. Our team specializes in creating websites that are not only visually stunning but also optimized for performance.
        
        Whether it’s a simple portfolio site or a full-scale e-commerce platform, we provide solutions that meet your business needs. With responsive designs and SEO-friendly structures, we ensure your website stands out and delivers value.`
        },
        {
            title: "Email Marketing",
            description: "Boost customer engagement with personalized email campaigns. We design strategies that keep your audience informed, driving repeat sales and building loyalty.",
            features: [
                "Automated Drip Campaigns",
                "Newsletter Design & Content Creation",
                "Audience Segmentation & Personalization",
                "Performance Analytics & Reporting"
            ],
            img: email,
            longDescription: `Email remains one of the most effective marketing channels, and we ensure your campaigns are optimized for engagement and results. Our email marketing services include everything from designing compelling newsletters to automating personalized drip campaigns.
        
        We focus on crafting messages that resonate with your audience and drive measurable actions, ensuring your emails never go unnoticed.`
        },
        {
            title: "Brand Launch & Rebranding Services",
            description: "Make a lasting impression with our brand launch and rebranding services. We create cohesive strategies to ensure your brand stands out and resonates with your target audience.",
            features: [
                "Brand Strategy Development",
                "Logo & Identity Design",
                "Comprehensive Launch Campaigns"
            ],
            img: brand,
            longDescription: `Whether launching a new brand or refreshing an existing one, our team ensures every detail aligns with your business goals and audience expectations. From creative visuals to strategic campaigns, we help position your brand for success. 
        
        With a focus on consistency and storytelling, we deliver results that build brand recognition and loyalty.`
        },
        {
            title: "Film Production, Ads, and AVs",
            description: "Tell your story through compelling video content. From TVCs to product demos, we produce videos that captivate and convert your audience.",
            features: [
                "High-quality TV Commercials",
                "Corporate & Brand Storytelling Videos",
                "End-to-End Video Production (Filming, Editing, Post-production)",
                "Creative Scriptwriting & Storyboarding"
            ],
            img: video,
            longDescription: `Our two decades of expertise in film production mean we know how to craft visuals that resonate. Whether it’s a TV ad, corporate video, or product demo, we create content that communicates your brand’s story effectively.
        
        From ideation to delivery, we handle every aspect of video production with precision and creativity.`
        },


    ];

    const openModal = (service) => {
        setSelectedService(service);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedService(null);
    };

    return (
        <section id='services' className="py-16 px-4 bg-gray-100">
            <div className="container mx-auto max-w-7xl">
                <h1 className='text-center text-5xl mb-10'> What We Do</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {seoServices.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#3f51b5] text-white rounded-lg p-8 hover:shadow-xl flex flex-col justify-between transition-shadow duration-300"
                        >
                            <div className='flex flex-col sm:flex-row items-center gap-4'>
                                <img
                                    className='h-24 sm:h-36 w-auto object-contain'
                                    src={service.img}
                                    alt={service.title}
                                />
                                <h3 className="text-xl sm:text-3xl font-serif text-center sm:text-left">
                                    {service.title}
                                </h3>
                            </div>
                            <p className="text-sm leading-relaxed my-6 text-gray-200">
                                {service.description}
                            </p>
                            <ul className="space-y-2 mb-6">
                                {service.features.map((feature, idx) => (
                                    <li
                                        key={idx}
                                        className="text-sm text-gray-200"
                                    >
                                        • {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => openModal(service)}
                                className="w-full bg-white text-[#3f51b5] py-2 px-4 rounded-md hover:bg-gray-100 transition-colors font-medium"
                            >
                                Explore More
                            </button>
                        </div>
                    ))}
                </div>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Service Details"
                >
                    {selectedService && (
                        <div className="relative">
                            <button
                                onClick={closeModal}
                                className="absolute top-0 right-0 text-gray-600 hover:text-gray-800 text-xl font-bold"
                            >
                                ×
                            </button>

                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={selectedService.img}
                                    alt={selectedService.title}
                                    className="h-16 w-auto object-contain"
                                />
                                <h2 className="text-2xl font-serif text-gray-800">
                                    {selectedService.title}
                                </h2>
                            </div>

                            <div className="space-y-6">
                                <div className="prose max-w-none">
                                    <p className="text-gray-700 leading-relaxed">
                                        {selectedService.longDescription || selectedService.description}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                                    <ul className="list-disc pl-5 space-y-2">
                                        {selectedService.features.map((feature, idx) => (
                                            <li key={idx} className="text-gray-700">
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </Modal>
            </div>

        </section>
    );
};

export default Third;