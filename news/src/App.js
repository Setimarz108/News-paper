
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App mx-auto">
     <Navbar/>
     <Jumbotron/>
     <Footer/>
    </div>
  );
}

export default App;
