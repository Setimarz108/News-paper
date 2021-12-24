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
<div className="row mb-2" style={{height: "400px", }}>
            <div className="col-md-6">
                <div
                    className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary" >World</strong>
                        <h3 className="mb-0" style={{width:"20rem", height:"2rem", overflow:"hidden"}}>{this.props.fPostsTitle}</h3>
                        <div className="mb-1 text-muted">{this.props.fDatePost}</div>
                        <p className="card-text mb-auto">
                            {
                                this.props.fDescriptionPost
                            }
                        </p>
                        <a href={this.props.fContLink} className="stretched-link">Continue reading</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img style={{width: "10rem" , height:"20rem", objectFit: "cover"}} src={this.props.fUrlToImage} alt="" />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                {/* fPostsTitle={} fDatePost={} fDescriptionPost ={} fContLink={} postsTitle={} datePost={} descriptionPost ={} contLink={} */}
                <div
                    className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-success">Design</strong>
                        <h3 className="mb-0" style={{width:"20rem", height:"2rem", overflow:"hidden"}}>{this.props.postsTitle}</h3>
                        <div className="mb-1 text-muted">{this.props.datePost}</div>
                        <p className="mb-auto">
                        {this.props.descriptionPost}
                        </p>
                        <a href={this.props.contLink} className="stretched-link">Continue reading</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                    <img style={{width: "10rem" , height:"20rem", objectFit: "cover"}} src={this.props.fUrlToImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        
        );
    }
}
 
export default FeaturedPost;

