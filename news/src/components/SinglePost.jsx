import React, { Component } from 'react'
import Aside from './Aside'

export default class SinglePost extends Component {
    render() {
        return (

            <>
            
            
            <h3 className="pb-4 mb-4 font-italic border-bottom">From the Firehose</h3>
        
            <div className="blog-post">
                <h2 className="blog-post-title">{this.props.title}</h2>
                <p className="blog-post-meta">
                {this.props.date} by <a href="#">{this.props.author}</a>
                </p>
        
                <p>
                {this.props.description}
                </p>
                <hr />
                {this.props.content}
               </div>
            
            </>
    
        
      

                
         

               
               
        )
    }
}
