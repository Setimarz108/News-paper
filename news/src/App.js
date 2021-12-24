import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import FeaturedPost from "./components/Featured-post";
import SinglePost from "./components/SinglePost";
import Jumbotron from "./components/Jumbotron";
import FetchData from "./components/FetchData";
import { Component } from "react";
import { format, formatDistance, formatRelative, subDays } from "date-fns";

class App extends Component {
  state = {
    parameter: "category",
    query: "Business",
    articles: [],
    links: [
      `Business`,
      `Entertainment`,
      `General`,
      `Health`,
      `Science`,
      `Sports`,
      `Technology`,
    ],
  };
  changeQuery = (query) => {
    this.fetchPosts(query);
  };

  componentDidMount = async () => {
    this.fetchPosts();
  };

  fetchPosts = async (query = "Business") => {
    try {
      let response = await fetch(
        `https://newsapi.org/v2/top-headlines?category=${query}&apiKey=ea4fdf74476a425c84207193b5c74bbf`
      );
      if (response.ok) {
        console.log("Is ok");
        let data = await response.json();
        this.setState({ articles: data.articles });
      }
    } catch {
      console.log("Something went wrong");
    }
    const today = this.state.articles[2];
    console.log(today);
  };

  render() {
    return (
      <div className="App mx-auto">
        <Navbar links={this.state.links} changeQ={this.changeQuery} />
        {this.state.articles[0] && (
          <Jumbotron
            bgImage={this.state.articles[0].urlToImage}
            description={this.state.articles[0].description}
            contLink={this.state.articles[0].url}
            title={this.state.articles[0].title}
          />
        )}

        {this.state.articles[1] && (
          <FeaturedPost
            fPostsTitle={this.state.articles[2].title}
            fDatePost={this.state.articles[2].publishedAt}
            fDescriptionPost={this.state.articles[2].description}
            fContLink={this.state.articles[2].url}
            fUrlToImage={this.state.articles[2].urlToImage}
            postsTitle={this.state.articles[3].title}
            datePost={this.state.articles[3].publishedAt}
            descriptionPost={this.state.articles[3].description}
            contLink={this.state.articles[3].url}
            urlToImage={this.state.articles[3].urlToImage}
          />
        )}

        {/* fPostsTitle={} fDatePost={} fDescriptionPost ={} fContLink={} postsTitle={} datePost={} descriptionPost ={} contLink={}  */}
        {this.state.articles[4] && (
          <SinglePost
            title={this.state.articles[4].title}
            date={this.state.articles[4].publishedAt}
            author={this.state.articles[4].author}
            description={this.state.articles[4].description}
            content={this.state.articles[5].content}
          />
        )}
      </div>
    );
  }
}

export default App;
