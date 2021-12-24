import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import FeaturedPost from "./components/Featured-post";
import SinglePost from "./components/SinglePost";
import Jumbotron from "./components/Jumbotron";
import FetchData from "./components/FetchData";
import { Component } from "react";
import { parseISO, format } from "date-fns";
import Aside from "./components/Aside";

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
    months: [
      `January`,
      `February`,
      `March`,
      `April`,
      `May`,
      `June`,
      `July`,
      `August`,
      `September`,
      `August`,
      `November`,
      `December`,
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
        `https://newsapi.org/v2/top-headlines?category=${query}&language=en&apiKey=ea4fdf74476a425c84207193b5c74bbf`
      );
      if (response.ok) {
        console.log("Is ok");
        let data = await response.json();
        this.setState({ articles: data.articles });
      }
    } catch {
      console.log("Something went wrong");
    }

    let listOfDates = this.state.articles.map((element) =>
      format(parseISO(element.publishedAt), "MMMM do yyyy | HH:mm")
    );
    console.log(listOfDates[16] > listOfDates[17]);
    let orderDates = listOfDates.sort(
      (dateA, dateB) => dateB.date - dateA.date
    );

    let filteredDates = listOfDates.filter((element) =>
      element.includes("November")
    );
    console.log(filteredDates);
  };

  render() {
    return (
      <div className="App mx-auto">
        <Navbar links={this.state.links} changeQ={this.changeQuery} />
        {this.state.articles[0] && (
          <Jumbotron
            bgImage="https://images.finanzen.net/mediacenter/unsortiert/krypto-wit-olszewski-660-41.jpg"
            description="Die Kurse der wichtigsten Kryptowährungen im Überblick."
            contLink="https://www.finanzen.net/nachricht/devisen/krypto-marktbericht-bitcoinkurse-co-aktuell-so-steht-es-um-die-kurse-der-digitalwaehrungen-10874922"
            title="Bitcoinkurse & Co. aktuell: So steht es um die Kurse der Digitalwährungen - finanzen.net"
          />
        )}

        {this.state.articles[1] && (
          <FeaturedPost
            fPostsTitle={this.state.articles[2].title}
            fDatePost={format(
              parseISO(this.state.articles[2].publishedAt),
              "MMMM do yyyy | HH:mm"
            )}
            fDescriptionPost={this.state.articles[2].description}
            fContLink={this.state.articles[2].url}
            fUrlToImage={this.state.articles[2].urlToImage}
            postsTitle={this.state.articles[3].title}
            datePost={format(
              parseISO(this.state.articles[3].publishedAt),
              "MMMM do yyyy | HH:mm"
            )}
            descriptionPost={this.state.articles[3].description}
            contLink={this.state.articles[3].url}
            urlToImage={this.state.articles[3].urlToImage}
          />
        )}

        <div className="row">
          <div className="col-8">
            {this.state.articles[4] && (
              <SinglePost
                months={this.state.months}
                title={this.state.articles[4].title}
                date={format(
                  parseISO(this.state.articles[4].publishedAt),
                  "MMMM do yyyy | HH:mm"
                )}
                author={
                  this.state.articles[this.state.articles.length - 1].author
                }
                description={
                  this.state.articles[this.state.articles.length - 1]
                    .description
                }
                content={
                  this.state.articles[this.state.articles.length - 1].content
                }
              />
            )}
          </div>
          <div className="col-4">
            <Aside months={this.state.months} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
