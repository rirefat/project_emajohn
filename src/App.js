import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <Footer></Footer>

      <ScrollToTop smooth={true} top={500} width={18} height={18}/>
    </div>
  );
};

export default App;