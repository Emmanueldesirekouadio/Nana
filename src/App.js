import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className='app'>
      {/* Header */}
      <Header />
      <div className='app__body'>
        <div className='app__left'></div>
        <div className='app__feed'>
          <img src='/Sparkle.png' alt='feed_image_a' className='app__image' />
          <img src='/Sparklea.png' alt='feed_imag_b' className='app__image' />
          <img src='/Sparkleb.png' alt='feed_image_c' className='app__image' />
        </div>
        <div className='app__right'></div>
      </div>
    </div>
  );
}

export default App;
