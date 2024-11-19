// import React from 'react';
// import {
//     Share2,
//     Palette,
//     Target,
//     FileEdit
// } from 'lucide-react';

// const Fourth = () => {
//     const services = [
//         {
//             title: "Strategic Planning",
//             icon: Share2
//         },
//         {
//             title: "Social platform design",
//             icon: Share2
//         },
//         {
//             title: "Creative Marketing Campaign",
//             icon: Palette
//         },
//         {
//             title: "Paid Ads Across Channel",
//             icon: Target
//         },
//         {
//             title: 'Editorial and content development',
//             icon: FileEdit
//         }
//     ];

//     return (
//         <section className="py-12 px-4 bg-[#0b79bf] overflow-hidden">
//             <div className="container mx-auto max-w-7xl">
//                 {/* Scrollable container for mobile */}
//                 <div className="overflow-x-auto pb-4">
//                     {/* Flex container for buttons */}
//                     <div className="flex gap-4 min-w-max lg:min-w-0 lg:flex-wrap lg:justify-center">
//                         {services.map((service, index) => {
//                             const IconComponent = service.icon;
//                             return (
//                                 <div
//                                     key={index}
//                                     className="flex bg-white px-6 py-10 rounded flex-col items-center gap-3"
//                                 >
//                                     {/* Icon Circle */}
//                                     <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
//                                         <IconComponent className="w-8 h-8 text-blue-600" />
//                                     </div>
//                                     {/* Button */}
//                                     <button
//                                         className="bg-blue-500 text-white px-6 py-2 rounded-full whitespace-nowrap hover:bg-blue-600 transition-colors duration-300"
//                                     >
//                                         {service.title}
//                                     </button>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Fourth;

import React from 'react';
import { Share2, Palette, Target, Megaphone, Edit3 } from "lucide-react";

const Fourth = () => {
    const services = [
        {
            title: "Strategic Planning",
            icon: Share2,
        },
        {
            title: "Social Platform Design",
            icon: Share2,
        },
        {
            title: "Creative Marketing Campaign",
            icon: Palette,
        },
        {
            title: "Paid Ads Across Channels",
            icon: Megaphone,
        },
        {
            title: "Editorial & Content Development",
            icon: Edit3,
        },
    ];

    return (
        <div className="text-center py-8 px-4 bg-gray-100">
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">Our Expertise</h2>
            <p className="text-sm text-gray-600 mb-8">
                Elevate your brand with our tailored solutions designed to meet your business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
                {services.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                        <div key={index} className="bg-white rounded-lg shadow-md w-64 p-6 text-center transform transition-transform hover:translate-y-[-5px]">
                            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-50 rounded-full">
                                <IconComponent size={32} className="text-blue-600" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-800">{service.title}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Fourth;
