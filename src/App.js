
import './scss/main.scss';

import Header from './components/Header';
import Categories from './components/categories/Categories';
import LargeBanner from './components/large-banner/LargeBanner';
import MediumBanner from './components/meduim-banner/MediumBanner';
import TwoColBanner from './components/two-col-banner/TwoColBanner';
import TextImageBanner from './components/text-image-banner/TextImageBanner';
import Footer from './components/footer/footer';
import { useState } from 'react';

function App() {
  const [isMenuBlureTrue, setMenuBlur] = useState(false);
  let cn = ''
  if(isMenuBlureTrue === true) {
    cn = 'menu-open'
  } else {
    cn = ''
  }
  console.log(isMenuBlureTrue)
  return (
    <div className={'App'+' '+cn}>
      <Header onMenuOpen={setMenuBlur} />
      {/* body */}
      <main>
        <Categories />
        <div className="main-wrapper">
          <LargeBanner />
          <MediumBanner />
          <TwoColBanner />
          <TextImageBanner />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;