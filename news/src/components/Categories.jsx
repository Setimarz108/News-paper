
import React, { Component } from 'react'

export default class Categories extends Component {

    state = {
       
        categories: []
    }
   
    componentDidMount = async ()=>{
       
        try{
            let response = await fetch ("https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=1931895ad8f647eabfcc4f8434c25d34")
            if (response.ok){
                console.log("Is ok")
                let data = await response.json()
                // this.setState({articles: data})
                console.log(data)
                
            }
        }catch{
            console.log("Something went wrong")
        }
    }
  
         
    render() {
        return (
            <>
            
                <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex justify-content-between"> 

         
    
 
                 <a onClick={ (e)=> this.props.changeCategory(e.target.value)} className="p-2 text-muted" href="#">World</a>
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
                 <a className="p-2 text-muted" href="#">Travel</a> 
            </nav>
           </div>
            </>
        )
    
    }
} 

