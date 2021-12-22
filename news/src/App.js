import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import FeaturedPost from "./components/FeaturedPost";
import { Component } from 'react';
import Jumbotron from "./components/Jumbotron";
import BlogList from "./components/BlogList";

const categories = ['business','sports','entertainment','health','general','science','technology']

class App extends Component {

      
   state = {       
    articles: null,
    searchResults: [],
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

   searchBar = async (searchString) => {
    if (searchString === "") {
      this.setState({ error: false, searchResults: [] }, () => {
        this.fetchNews();
      });
    } else {
      try {
        const response = await fetch(
          this.URL + "&category=" + searchString + this.apikey
        );
        if (response.ok) {
          const data = await response.json();
          if (data.Response === "True") {
            this.setState({ searchResults: data.articles, error: false });
          } else {
            this.setState({ error: true });
          }
        } else {
          this.setState({ error: true });
        }
      } catch (error) {
        this.setState({ error: true });
        console.log(error);
      }
    }
  };
   

       render(){

        return (
    <div className="App mx-auto"> 
      
      <Navbar categories={categories} getNews={this.getNews} />
      <Jumbotron/>
      <FeaturedPost />
      <BlogList  articles={this.searchBar} getNews={this.getNews}/>

    </div>
  );

  }
 }



export default App;