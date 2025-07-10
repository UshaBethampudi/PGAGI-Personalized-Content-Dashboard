import React from "react";

interface NewsCardProps {
  news: {
    image: string;
    title: string;
    description: string;
    url: string;
  };
}

const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="w-full h-48 sm:h-56 md:h-60 lg:h-64 overflow-hidden">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-1">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
          {news.title}
        </h2>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {news.description || "No description available."}
        </p>
        <a
          href={news.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline text-sm font-medium"
        >
          Read more →
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
