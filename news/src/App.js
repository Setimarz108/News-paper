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

    // componentDidUpdate = async (prevProps)=>{
        
    //     if(this.props.selectedCategory !== prevProps.selectedCategory){
        
    //     try{
             
    //         let response = await fetch (`https://newsapi.org/v2/top-headlines?category=${this.state.selectedCategory}&apiKey=1931895ad8f647eabfcc4f8434c25d34`)
    //         console.log(this.state.selectedCategory)
    //         if (response.ok){
    //             console.log("Is ok")
    //             let data = await response.json()
    //             console.log("main fetch",data)
    //              this.setState({articles: data.articles})
               
                
    //         }
    //     }catch{
    //         console.log("Something went wrong")
    //     }
    //   }
    // }
     
    render()
        {
        return (
    <div className="App mx-auto"> 
      
      <Navbar categories={categories} setState={this.setState}/>
      <Jumbotron/>
      <FeaturedPost />
      <SinglePost post={this.state.articles[0]}/>

    </div>
  );

 } 
}


export default App;