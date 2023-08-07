import { Emojis } from './Dashboard/Emojis';
import { Header } from './Dashboard/Header';
import { Searchbar } from './Dashboard/Searchbar';

function App() {
  return (
    <div>
      <Header />
      <Searchbar />
      <Emojis emojiData={[]} />
    </div>
  );
}

export default App;
