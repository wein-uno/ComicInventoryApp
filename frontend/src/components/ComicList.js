import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ComicList = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchComics = async () => {
      const response = await axios.get('http://localhost:5000/api/comics');
      setComics(response.data);
    };

    fetchComics();
  }, []);

  return (
    <div>
      <h2>Comic List</h2>
      <ul>
        {comics.map((comic) => (
          <li key={comic.id}>
            {comic.title} #{comic.number} (Grade: {comic.grade}, Value: ${comic.value})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComicList;

