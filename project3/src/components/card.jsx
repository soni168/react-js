import React from 'react'
export default function Card({props}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
        
        {/* Image */}
        <img
          src={props.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085"}
          alt={props.alt || "Card"}
          className="w-full h-48 object-cover"
        />

        {/* Content */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2" p>
            React + Tailwind Card
          </h2>
          
          <p className="text-gray-600 text-sm mb-4">
            This is a simple and modern card component built using React and Tailwind CSS.
            Perfect for portfolios, blogs, or product sections.
          </p>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Learn More
          </button>
        </div>

      </div>
    </div>
  );
}

