import Timer from './components/Timer.js';

function App() {
  return (
    <div >
      <Timer key={0} time={10} step={100} autostart={false} />
      <Timer key={1} time={20} step={1000} autostart={true} />
    </div>
  );
}

export default App;