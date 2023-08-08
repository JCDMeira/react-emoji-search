import './styles.css';

type SearchbarProps = {
  // eslint-disable-next-line no-unused-vars
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Searchbar: React.FC<SearchbarProps> = ({ handleSearch }) => {
  return (
    <div className="search-input">
      <div>
        <input
          className="input-text"
          placeholder="Search Emoji"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};
