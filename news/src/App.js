import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import FeaturedPost from "./components/FeaturedPost";
import SinglePost from "./components/SinglePost";
import { Component } from 'react';
import Jumbotron from "./components/Jumbotron";

const categories = ['business','sports','entertainment','health','general','science','technology']

class App extends Component {

      
   state = {       
    articles: null,
}

componentDidMount = () => {
    this.getNews("business");
  };

getNews = async (category)=>{
   
    try{
             let response = await fetch (`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=e8f72e73c91240da8aa5810ea86636cd`)
        if (response.ok){
            console.log("Is ok")
            let data = await response.json()
            console.log("main fetch",data)
             this.setState({articles: data.articles})
        }else {
                this.setState({ error: true });
                console.log("fetch failed");
              }
            
        }
     catch{
        console.log("Something went wrong")
    }
   }
   

       render(){

        return (
    <div className="App mx-auto"> 
      
      <Navbar categories={categories} getNews={this.getNews} />
      <Jumbotron/>
      <FeaturedPost />
      <SinglePost post={this.state.articles[0]}/>

    </div>
  );

  }
 }



export default App;