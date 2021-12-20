import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import FeaturedPost from "./components/Featured-post";
import SinglePost from "./components/SinglePost";
import Jumbotron from "./components/Jumbotron";
import FetchData from "./components/FetchData";

function App() {
  return (
    <div className="App mx-auto">
      <FetchData />
      <Navbar />
      <Jumbotron />
      <FeaturedPost />
      <SinglePost />
    </div>
  );
}

export default App;
