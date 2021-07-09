import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Searchbar from './components/Search';

const App = () => {
  const [word, setWord] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
  }

  return (
    <div>
      <Header title ="Ricky's Images Gallery"/>
      <Searchbar word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;