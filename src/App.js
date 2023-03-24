
import './scss/main.scss';

import Header from './components/Header';
import Categories from './components/categories/Categories';
import LargeBanner from './components/large-banner/LargeBanner';
import MediumBanner from './components/meduim-banner/MediumBanner';

function App() {
  return (
    <div className="App">
      <Header />
      {/* body */}
      <main>
        <Categories />
        <div className="main-wrapper">
          <LargeBanner />
          <MediumBanner />
        </div>
      </main>
    </div>
  );
}

export default App;