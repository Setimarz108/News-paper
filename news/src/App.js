import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FeaturedPost from "./components/Featuredpost";
import ListOfPost from "./components/ListOfPost";
import Jumbotron from './components/Jumbotron';
import { Component } from 'react';



class App extends Component {

   state = {
     posts: [],
     category : "sports",
     loading: true,
     error: false,
   }
   componentDidMount = () => {
     this.loadArticles("")
   }
   loadArticles = async () => {
     try {
       const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${this.state.category}&apiKey=03e5214f5868473eb4b3bb655d009efc`)
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
        this.setState({ error: true })
     }
    }
   
   
 
  
    

  
   
   
   
    

  
render() {
  return (
    <div className="App mx-auto"> {console.log(this.state)}
      
      <Navbar  />
      <Jumbotron/> 
      <FeaturedPost articles={this.state.posts} categories={this.state.category}/>
      <ListOfPost articles={this.state.posts} categories={this.state.category}/>
    </div>
  );
 }
}

export default App;
