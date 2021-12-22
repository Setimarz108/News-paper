import { Button} from "react-bootstrap";
import React, { Component } from "react";
import SinglePost from "./SinglePost";

class BlogList extends Component {

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
               let articles = data.articles
               console.log(articles)
        }else {
                this.setState({ error: true });
                console.log("fetch failed");
              }
            
        }
     catch{
        console.log("Something went wrong")
    }
       }

  render() {
    return (
      <>
        {this.props.articles.slice(0, 1).map((b, i) => (
          <SinglePost key={i} articles={b} />
        ))}
        <Button id="older" variant="outline-warning">Older</Button>
  <Button id="newer" variant="outline-danger">Newer</Button>
      </>
    );
  }
}

export default BlogList;