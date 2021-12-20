import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import FeaturedPost from "./components/Featured-post";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <div className="App mx-auto">
      <Navbar />
      <FeaturedPost />
      <SinglePost />
    </div>
  );
}

export default App;
