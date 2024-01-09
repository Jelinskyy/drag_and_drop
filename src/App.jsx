import './styles/App.css';
import Container from "./components/Container"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Drag n' Drop
        </p>
      </header>
      <main class="App-body">
        <Container />
        <Container />
      </main>
    </div>
  );
}

export default App;
