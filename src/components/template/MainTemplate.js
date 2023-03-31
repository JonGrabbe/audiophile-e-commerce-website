function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    let cn = ''
    if(isMenuOpen === true) {
      cn = 'menu-open'
    } else {
      cn = ''
    }
    // console.log(isMenuBlureTrue)
    function handleClick() {
      setIsMenuOpen(!isMenuOpen)
    }
    return (
      <div className={'App'+' '+cn}>
  
        <Header isMenuOpen={isMenuOpen} openMenuFunc={handleClick} />
        {isMenuOpen ? <BlurContainer handleClick={handleClick}  /> : null}
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