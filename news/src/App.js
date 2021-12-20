<<<<<<< HEAD

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
=======
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import FeaturedPost from "./components/Featured-post";
import SinglePost from "./components/SinglePost";
>>>>>>> a9e1a89927f2f818b203a6bb5ec9246662b81624

function App() {
  return (
    <div className="App mx-auto">
<<<<<<< HEAD
     <Navbar/>
     <Jumbotron/>
     <Footer/>
=======
      <Navbar />
      <FeaturedPost />
      <SinglePost />
>>>>>>> a9e1a89927f2f818b203a6bb5ec9246662b81624
    </div>
  );
}

export default App;
