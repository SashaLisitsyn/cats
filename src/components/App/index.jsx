import './styles.css';

import { Header } from '../Header';
import { CardsList } from '../CardsList';
import { CardsLikedFilter } from '../CardsLikedFiltred';
import { Footer } from '../Footer';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <CardsLikedFilter />
      <CardsList />
      <Footer />
    </div>
  );
};
