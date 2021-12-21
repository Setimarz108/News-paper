
import React, { Component } from 'react'

// const categories =  ['business', 'entertainment', 'general', 'health', 'science', 'sports','technology']

export default class Categories extends Component {

       
         
    render() {
        return (
            <>
            
                <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex justify-content-between"> 

         
                {
                    this.props.categories.map(category => (
                        <a onClick={e => {this.setState({...this.state,selectedCategory:category})}} 
                        className="p-2 text-muted" key={category} 
                        href={'#' + category}>{category.slice(0, 1).toUpperCase() + 
                        category.slice(1)}</a>
                    ))
                }

 
                 {/* <a onClick={ (e)=> this.props.changeCategory(e.target.value)} className="p-2 text-muted" href="#">World</a>
                 <a className="p-2 text-muted" href="#">U.S.</a>
                <a className="p-2 text-muted" href="#">Technology</a>
                <a className="p-2 text-muted" href="#">Design</a>
                <a className="p-2 text-muted" href="#">Culture</a>
                 <a className="p-2 text-muted" href="#">Business</a>
                 <a className="p-2 text-muted" href="#">Politics</a>
                 <a className="p-2 text-muted" href="#">Opinion</a>
                 <a className="p-2 text-muted" href="#">Science</a>
                 <a className="p-2 text-muted" href="#">Health</a>
                 <a className="p-2 text-muted" href="#">Style</a>
                 <a className="p-2 text-muted" href="#">Travel</a>  */}
            </nav>
           </div>
            </>
        )
    
    }
} 

