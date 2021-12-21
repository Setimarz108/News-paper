import React, { Component } from 'react';


class FetchData extends React.Component {
    state = {
        parameter: "category",
        query: "technology",
        articles:[]
        
    }
    componentDidMount = async ()=>{
        try{
            let response = await fetch (`https://newsapi.org/v2/top-headlines?${this.state.parameter}=${this.state.query}&apiKey=ea4fdf74476a425c84207193b5c74bbf`)
            if (response.ok){
                console.log("Is ok")
                let data = await response.json()
                
                 this.setState({articles: data.articles})
                
                
            }
        }catch{
            console.log("Something went wrong")
        }
        console.log(this.state.articles)
        
    }


    render() { 
        return <div>

        </div>;
    }
}
 
export default FetchData;