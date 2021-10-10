import './styles.css';

import { Header } from '../Header';
import { Cats } from '../Cats';
import { Footer } from '../Footer';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Cats />
      <Footer />
    </div>
  );
};
