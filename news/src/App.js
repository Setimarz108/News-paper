import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< Updated upstream
import Navbar from "./components/Navbar";
import FeaturedPost from "./components/Featured-post";
import SinglePost from "./components/SinglePost";
import Jumbotron from "./components/Jumbotron";
import FetchData from "./components/FetchData";
=======
import FeaturedPost from "./components/FeaturedPost";
import SinglePost from "./components/SinglePost";
import { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';


class App extends Component {

      
   state = {       
    selectedCategory: 'sports', 
    articles: null,
}

componentDidMount = async ()=>{
   
    try{
             let response = await fetch (`https://newsapi.org/v2/top-headlines?category=${this.state.selectedCategory}&apiKey=1931895ad8f647eabfcc4f8434c25d34`)
        if (response.ok){
            console.log("Is ok")
            let data = await response.json()
            console.log("main fetch",data)
             this.setState({articles: data.articles})
           
            
        }
    }catch{
        console.log("Something went wrong")
    }
}
 

     render(){
>>>>>>> Stashed changes

function App() {
  return (
<<<<<<< Updated upstream
    <div className="App mx-auto">
      <FetchData />
      <Navbar />
      <Jumbotron />
      <FeaturedPost />
      <SinglePost />
=======
    <div className="App mx-auto"> {console.log(this.state)}
      
      <Navbar categories={["business","entertainment",]}/>
      <Jumbotron/>
      <FeaturedPost post={this.state.articles}/>
      <SinglePost />

>>>>>>> Stashed changes
    </div>
  );
}

export default App;
