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
    mainCategory: []
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
      
      <Navbar setCat={this.setState} categories={categories} getNews={this.getNews} />
      <Jumbotron/>
      <FeaturedPost />
     {this.state.mainCategory.length ><BlogList mainCat={this.state.mainCategory}  />}
  
    {/* 1) Here create a component NewsByCat pass mainCategory as props
    , place an if statement around the component and only render if there is a mainCategory  
    pass getNews as props, fetch inside the component and then map*/}
      {/* <BlogList  /> */}

    </div>
  );

  }
 }



export default App;