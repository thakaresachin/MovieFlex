import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchTVShows } from '../services/api';

function TVShows() {
  const [shows, setShows] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const loadShows = async () => {
      const data = await fetchTVShows(page);
      setShows(prev => [...prev, ...data.results]);
    };
    loadShows();
  }, [page]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Popular TV Shows</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shows.map((show) => (
          <div
            key={show.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-transform"
            onClick={() => navigate(`/details/tv/${show.id}`)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
              alt={show.name}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{show.name}</h3>
              <p className="text-gray-400">{show.first_air_date}</p>
              <div className="mt-2 flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="ml-1">{show.vote_average.toFixed(1)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={() => setPage(p => p + 1)}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default TVShows;