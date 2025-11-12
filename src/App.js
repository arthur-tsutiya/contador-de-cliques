import './App.css';
import Contador from './Contador.js';
import Footer from './Footer.js';

function App() {
  return (
    <>
      <div className="App">
        <div className="contador-wrapper">
          <h1>Contador simples</h1>
          <p>Pressione o botão para incrementar o contador.</p>
          <Contador />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
