import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';


class FeaturedPost extends Component {
    render() { 
        return (
        <div>
            {/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}

<div className="row mb-2">
            <div className="col-md-6">
                <div
                    className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 ">
                    <div className="col p-4 d-flex flex-column ">
                        <strong className="d-flex mb-2 text-primary">World</strong>
                        <h3 className="d-flex mb-0">Featured post</h3>
                        <div className="mb-1 text-muted">Nov 12</div>
                        <p className="card-text mb-auto">
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content.
                        </p>
                        <a href="#" className="stretched-link">Continue reading</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
                            aria-label="Placeholder: Thumbnail">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#55595c" />
                            <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div
                    className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-success">Design</strong>
                        <h3 className="mb-0">Post title</h3>
                        <div className="mb-1 text-muted">Nov 11</div>
                        <p className="mb-auto">
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content.
                        </p>
                        <a href="#" className="stretched-link">Continue reading</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
                            aria-label="Placeholder: Thumbnail">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#55595c" />
                            <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        
        );
    }
}
 
export default FeaturedPost;
