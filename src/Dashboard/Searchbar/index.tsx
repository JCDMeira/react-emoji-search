import { SyntheticEvent } from 'react';
import './styles.css';

export const Searchbar = () => {
  const handleText = (event: SyntheticEvent) => {
    console.log(event);
  };

  return (
    <div className="search-input">
      <div>
        <input
          className="input-text"
          placeholder="Search Emoji"
          onChange={handleText}
        />
      </div>
    </div>
  );
};
