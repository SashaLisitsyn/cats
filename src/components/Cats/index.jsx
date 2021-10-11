import './styles.css';

import { Cat } from '../Cat';

export const Cats = ({ cats, handleCatDelete }) => {
  return (
    <main className="cats">
      {cats.map((cat) => (
        <Cat key={cat.id} cat={cat} handleCatDelete={handleCatDelete} />
      ))}
    </main>
  );
};
