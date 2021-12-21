import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FeaturedPost from "./components/Featuredpost";
import SinglePost from "./components/SinglePost";
import Jumbotron from './components/Jumbotron';
import { Component } from 'react';

const categories =  ['business', 'entertainment', 'general', 'health', 'science', 'sports','technology']

class App extends Component {

   state = {
     blogs: [],
     category : "business",

   }
   componentDidMount = () => {
     this.loadArticles("")
   }
   loadArticles = async (category) => {
     try {
       const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${this.state.category}&apiKey=44664f71879f4e05a41ac78d7c3eeaed`)
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        this.setState({
          blogs: data.articles,
        })
      
          } else {
            alert('There was a problem with your the api')
          }
    }catch (error) {
       console.log(error)
     }
    }
   
  
   render() {

  return (
    <div className="App mx-auto"> {console.log(this.state)}
      
      <Navbar  />
      <Jumbotron/>
      <FeaturedPost articles={this.state.blogs} categories={this.state.category}/>
      <SinglePost />
    </div>
  );
 }
}

export default App;
