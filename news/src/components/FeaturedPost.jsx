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
                    className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">World</strong>
                        <h3 className="mb-0">Featured post</h3>
                        <div className="mb-1 text-muted">Nov 12</div>
                        <p className="card-text mb-auto">
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content.
                        </p>
                        <a href="#" className="stretched-link">Continue reading</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img style={{width: "200px" , height:"250px", objectFit: "cover"}} src="https://images.unsplash.com/photo-1633113214207-1568ec4b3298?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
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
                    <img style={{width: "200px" , height:"250px", objectFit: "cover"}} src="https://images.unsplash.com/photo-1639972585193-e360d1bd1dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        
        );
    }
}
 
export default FeaturedPost;

