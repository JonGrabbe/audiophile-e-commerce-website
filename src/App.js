
import './scss/main.scss';

import Header from './components/Header';
import Categories from './components/categories/Categories';

function App() {
  return (
    <div className="App">
      <Header />
      {/* body */}
      <main>
        <Categories />
      </main>
    </div>
  );
}

export default App;