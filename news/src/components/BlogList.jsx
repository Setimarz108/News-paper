import { Button} from "react-bootstrap";
import React, { Component } from "react";
import SinglePost from "./SinglePost";

class BlogList extends Component {
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