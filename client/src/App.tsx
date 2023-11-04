import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="mockup-window border m-10 h-auto bg-base-300">
      <div className="flex flex-col gap-5 justify-center bg-base-200">
        <Navbar />
        <Hero />
      </div>
      <Footer />
    </div>
  );
}

export default App;
