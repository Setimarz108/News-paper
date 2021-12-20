
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import FeaturedPost from './components/Featured-post';
import SinglePost from './components/SinglePost';

function App() {
  return (
    <div className="App mx-auto">
     <Navbar/>
     <Jumbotron/>
     
      
      <FeaturedPost />
      <SinglePost />
      <Footer/>
    </div>
  );
}

export default App;
