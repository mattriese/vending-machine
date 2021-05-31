
import './App.css';
import NavBar from './NavBar';
import VendingMachine from "./VendingMachine";
import { BrowserRouter } from "react-router-dom";


/** Renders BrowserRouter & VendingMachine
 * App --> VendingMachine
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <VendingMachine/>
      </BrowserRouter>
    </div>
  );
}

export default App;
