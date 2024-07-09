import "./App.css";
import Navbar from "./common/Navbar";
import Academy from "./component/Academy";
import BasicCrypto from "./component/BasicCrypto";
import CryptoDict from "./component/CryptoDict";
import Footer from "./component/Footer";
import Roadmap from "./component/Roadmap";
import ToFollow from "./component/ToFollow";

function App() {
  return (
    <div className="App relative outfit-font bg-black min-h-screen">
      <Navbar />
      <Academy />
      <Roadmap />
      <ToFollow />
      <CryptoDict />
      <Footer />
    </div>
  );
}

export default App;
