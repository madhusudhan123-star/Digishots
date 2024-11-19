import React, { useState } from "react";

const PortfolioAndReviews = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "SEO Campaign",
      service: "SEO",
      image: "/images/seo-project.jpg",
      details: "Improved organic traffic by 200% in 6 months.",
    },
    {
      id: 2,
      title: "PPC Campaign",
      service: "PPC",
      image: "/images/ppc-project.jpg",
      details: "Generated 150% ROI with Google Ads.",
    },
    {
      id: 3,
      title: "Social Media Strategy",
      service: "Social Media Marketing",
      image: "/images/social-media-project.jpg",
      details: "Increased engagement by 300%.",
    },
    // Add more projects here
  ];

  const reviews = [
    {
      id: 1,
      client: "John Doe",
      review: "Digishots transformed our online presence. Highly recommend!",
    },
    {
      id: 2,
      client: "Jane Smith",
      review: "Their PPC campaigns boosted our revenue by 50%. Fantastic work!",
    },
    // Add more reviews here
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.service === filter);

  return (
    <div className="bg-gray-100 py-16 px-4">
      {/* Portfolio Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Portfolio
        </h2>
        {/* Filters */}
        <div className="flex justify-center mb-6">
          {["All", "SEO", "PPC", "Social Media Marketing"].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 mx-2 border ${
                filter === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600"
              } rounded-md transition hover:bg-blue-500 hover:text-white`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white shadow-lg rounded-lg overflow-hidden relative"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover transition-transform transform group-hover:scale-110"
              />
              <div className="p-4">
                <h3 className="font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.service}</p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-75 text-white p-4 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-sm mt-2">{project.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Client Reviews */}
      <div className="max-w-7xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Client Reviews
        </h2>
        <div className="relative">
          <div className="carousel flex overflow-x-auto space-x-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex-shrink-0 w-80 bg-white shadow-lg rounded-lg p-6"
              >
                <p className="text-gray-600 italic">"{review.review}"</p>
                <h4 className="text-gray-800 font-bold mt-4">
                  - {review.client}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioAndReviews;
