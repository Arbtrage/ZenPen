import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="mockup-window border m-10 h-auto bg-base-300">
      <div className="flex flex-col gap-5 justify-center bg-base-200">
        <Navbar />
        <Hero/>
      </div>
    </div>
  );
}

export default App;
