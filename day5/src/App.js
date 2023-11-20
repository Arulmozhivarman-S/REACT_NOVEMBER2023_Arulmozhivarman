import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './error';
import List from './list';
function App() {
  return (
    <div className="App">
      <ErrorBoundary/>
      <List/>
    </div>
  );
}

export default App;
