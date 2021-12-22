import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import FeaturedPost from "./components/Featured-post";
import SinglePost from "./components/SinglePost";
import Jumbotron from "./components/Jumbotron";
import FetchData from "./components/FetchData";
import { Component } from "react";

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
    jumboBg:
      "https://images.unsplash.com/photo-1540407211310-8feaba575bca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
  };
  changeQuery = (e) => {
    this.setState({ query: this.state.links[2] });
    console.log("changed query " + this.state.query);
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        `https://newsapi.org/v2/top-headlines?${this.state.parameter}=${this.state.query}&apiKey=ea4fdf74476a425c84207193b5c74bbf`
      );
      if (response.ok) {
        console.log("Is ok");
        let data = await response.json();
        this.setState({ articles: data.articles });
      }
    } catch {
      console.log("Something went wrong");
    }
    console.log(this.state.articles[1].urlToImage);
  };
  render() {
    return (
      <div className="App mx-auto">
        <Navbar links={this.state.links} changeQ={this.changeQuery} />
        <Jumbotron bgImage={this.state.jumboBg} />

        <FeaturedPost />
        {/* category={} title={} publishedAt={} description={} url={} urlToImage={} */}
        <SinglePost />
      </div>
    );
  }
}

export default App;
