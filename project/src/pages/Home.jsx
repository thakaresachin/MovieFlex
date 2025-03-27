import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchTrending } from '../services/api';

function Home() {
  const [trending, setTrending] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadTrending = async () => {
      const data = await fetchTrending();
      setTrending(data.results);
    };
    loadTrending();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Welcome to MovieFlick</h1>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Trending Now</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trending.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-transform"
              onClick={() => navigate(`/details/${item.media_type}/${item.id}`)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title || item.name}
                className="w-full h-auto"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title || item.name}</h3>
                <p className="text-gray-400">{item.release_date || item.first_air_date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;