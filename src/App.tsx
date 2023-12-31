import { useState } from 'react';
import { Emojis } from './Dashboard/Emojis';
import { onFilter } from './Dashboard/Emojis/onFilter';
import { Header } from './Dashboard/Header';
import { Searchbar } from './Dashboard/Searchbar';

function App() {
  const [filteredEmojis, setfilteredEmojis] = useState(
    onFilter({ searchText: '' }),
  );
  const handleSearch = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setfilteredEmojis(onFilter({ searchText: value, maxResults: 15 }));

  return (
    <div>
      <Header />
      <Searchbar {...{ handleSearch }} />
      <Emojis emojiData={filteredEmojis} />
    </div>
  );
}

export default App;
