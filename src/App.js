import Timer from './components/Timer.js';

function App() {
  return (
    <div >
      <Timer id={1} key={0} time={10} step={100} autostart={false} />
      <Timer id={2} key={1} time={20} step={1000} autostart={true} />
    </div>
  );
}

export default App;