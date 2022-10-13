
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <Navbar></Navbar>
      <h1 className='text-6xl'>No more turning away</h1>
      <Pricing></Pricing>
      
    </div>
  );
}

export default App;
