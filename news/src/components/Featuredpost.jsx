import React, { Component } from "react";

import SingleFeaturedPost from "./SingleFeaturedPost";

class FeaturedPost extends Component {
  render() {
    return (
      <div>
        <div className="row mb-2">
          <div className="col-md-6">
            <SingleFeaturedPost
              article={this.props.articles[0]}
              categories={this.props.categories}
            />
            {console.log(
              "Article before drilling to fA:^",
              this.props.articles[0]
            )}
          </div>
          <div className="col-md-6">
       <SingleFeaturedPost article={this.props.articles[1]}
              categories={this.props.categories}  />
           
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturedPost;
