import React, { Component } from 'react'
import { format } from "date-fns"


export default class SingleFeaturedPost extends Component {
    render() {
        return (
           
            
            <div
                    className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">{this.props.category}</strong>
                        <h3 className="mb-0">{this.props.article.title}</h3>
                        <div className="mb-1 text-muted">{format(new Date(this.props.article.publishedAt), "MMM d")}</div>
                        <p className="card-text mb-auto">
                        {this.props.article.description}
                        </p>
                        <a href={this.props.article.url} className="stretched-link">Continue reading</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img style={{width: "200px" , height:"250px", objectFit: "cover"}} src={this.props.article.urlToImage} alt="" />
                    </div>
                </div>
            
            
            
            
            /* <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-primary">{this.props.category}</strong>
              <h3 className="mb-0">
                <a clasNames="text-dark" href="https://getbootstrap.com/docs/4.0/examples/blog/#">{this.props.article.title}</a>
              </h3>
              <div className="mb-1 text-muted">{format(new Date(this.props.article.publishedAt), "MMM d")}</div>
              <p className="card-text mb-auto">{this.props.article.description}</p>
              <a href={this.props.article.url}>Continue reading</a>
            </div>
            <img className="card-img-right flex-auto d-none d-md-block" alt="Thumbnail [200x250]" style="width: 200px; height: 250px;" src={this.props.article.urlToImage} />
          </div> */
                
                
                
        )
    }
}
