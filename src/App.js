import logo from './logo.svg';
import './App.css';
import ProductListComponent from './product';
import { WithProductList } from './with';
function App() {
  return (
    <div className="App">
     <ProductListComponent/>
     <WithProductList/>
    </div>
  );
}

export default App;
