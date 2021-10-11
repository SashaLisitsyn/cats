import './styles.css';

import { useEffect, useState } from 'react';

import { Header } from '../Header';
import { Cats } from '../Cats';
import { Footer } from '../Footer';

export const App = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch('https://api.unsplash.com/search/photos?query=cat', {
      headers: {
        Authorization: 'Client-ID IeCjn9OyTne41SW4UBklyy96cNSkg5L_KCdLi3zsutI',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCats(data.results);
      });
  }, []);

  console.log(cats);

  const handleCatDelete = (cat) => {
    setCats((state) => state.filter((c) => c.id !== cat.id));
  };

  return (
    <div className="app">
      <Header />
      <Cats cats={cats} handleCatDelete={handleCatDelete} />
      <Footer />
    </div>
  );
};
