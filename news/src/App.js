import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FeaturedPost from "./components/Featured-post";
import SinglePost from "./components/SinglePost";
import { Component } from 'react';

const categories =  ['business', 'entertainment', 'general', 'health', 'science', 'sports','technology']

class App extends Component {

   state = {
    
     category : "",

   }

   
  render(){

  return (
    <div className="App mx-auto"> {console.log(this.state)}
      
      <Navbar  categories={categories}/>
      <FeaturedPost />
      <SinglePost category={categories}/>
    </div>
  );
 }
}

export default App;
