import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetails } from '../services/api';

function Details() {
  const { mediaType, id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const loadDetails = async () => {
      const data = await fetchDetails(mediaType, id);
      setDetails(data);
    };
    loadDetails();
  }, [mediaType, id]);

  if (!details) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <img
            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
            alt={details.title || details.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">{details.title || details.name}</h1>
          <div className="flex items-center mb-4">
            <span className="text-yellow-400 text-xl">★</span>
            <span className="ml-2">{details.vote_average.toFixed(1)}</span>
            <span className="mx-2">•</span>
            <span>{details.release_date || details.first_air_date}</span>
          </div>
          <p className="text-gray-300 mb-6">{details.overview}</p>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Genres</h2>
            <div className="flex flex-wrap gap-2">
              {details.genres.map(genre => (
                <span
                  key={genre.id}
                  className="bg-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
          {mediaType === 'tv' && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Seasons</h2>
              <p>{details.number_of_seasons} seasons • {details.number_of_episodes} episodes</p>  
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Details;