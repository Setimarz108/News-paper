import React, { Component } from 'react'


 

export default class Jumbotron extends Component {

    state = {
        parameter: "q",
        query: "Spain",
        articles: []
        
    }


    componentDidMount = async() => {

        
            try{
                let response = await fetch (`https://newsapi.org/v2/top-headlines?${this.state.parameter}=${this.state.query}&apiKey=1931895ad8f647eabfcc4f8434c25d34`)
                if (response.ok){
                    console.log("Is ok")
                    let data = await response.json()
                    console.log(data.articles)
                    this.setState({articles: data.articles[0]})
                    
                }
            }catch{
                console.log("Something went wrong")
            
        }

    }
        
    

    render() {
        return (
            <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark" style={{ backgroundImage: `url(${this.state.articles.urlToImage})`, backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover"}}
            >
                <div className="col-md-6 px-0">
                    <h1 className="display-4 font-italic">{this.state.articles.title}</h1>
                <p className="lead my-3">{this.state.articles.description}</p>
                <p className="lead mb-0"><a href="https://getbootstrap.com/docs/4.0/examples/blog/#" className="text-white font-weight-bold">Continue reading...</a></p>
                </div>
            </div>
        )
    }
}
