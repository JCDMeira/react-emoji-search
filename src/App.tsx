import { Emojis } from './Dashboard/Emojis';
import { Header } from './Dashboard/Header';
import { Searchbar } from './Dashboard/Searchbar';

function App() {
  return (
    <div>
      <Header />
      <Searchbar />
      <Emojis />
    </div>
  );
}

export default App;
