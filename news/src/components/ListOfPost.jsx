import React, { Component } from 'react'
import Aside from './Aside'
import SinglePost from './SinglePost'





export default class ListOfPost extends Component {
    
   /*  sortedArticles = this.props.articles.sort((a, b) => b.publishedAt - a.publishedAt)  */
    
    
    render() {
        return (

            <div>
    
        <div className="row">
                <div className="col-md-8 blog-main">
                <h3 className="pb-4 mb-4 font-italic border-bottom">From the Firehose</h3>

                <div className="blog-post">
                    <SinglePost article={this.props.articles[0]}
              categories={this.props.categories}/>
                    
                </div>
                </div>
                    <Aside/>
                 </div>
         </div>

                
         

               
               
        )
    }
}
